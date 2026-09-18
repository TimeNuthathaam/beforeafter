// Vercel Serverless Function: SQLite / Presets API
// Supports GET, POST, DELETE with persistent storage handling

const fs = require('fs');
const path = require('path');

const DATA_DIR = process.env.TMPDIR || '/tmp';
const STORAGE_FILE = path.join(DATA_DIR, 'beforeafter_presets.json');

function readPresetsFromFile() {
    try {
        if (fs.existsSync(STORAGE_FILE)) {
            const raw = fs.readFileSync(STORAGE_FILE, 'utf8');
            return JSON.parse(raw);
        }
    } catch (err) {
        console.error('Error reading presets:', err);
    }
    return {};
}

function writePresetsToFile(data) {
    try {
        fs.writeFileSync(STORAGE_FILE, JSON.stringify(data, null, 2), 'utf8');
        return true;
    } catch (err) {
        console.error('Error writing presets:', err);
        return false;
    }
}

module.exports = async function handler(req, res) {
    // CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    const { method, query, body } = req;
    const presets = readPresetsFromFile();

    if (method === 'GET') {
        const clinicId = query.clinic || 'all';
        if (clinicId === 'all') {
            return res.status(200).json({ success: true, count: Object.keys(presets).length, presets });
        }
        const filtered = {};
        for (const [id, item] of Object.entries(presets)) {
            if (!item.clinic_id || item.clinic_id === clinicId || item.clinic_id === 'all') {
                filtered[id] = item;
            }
        }
        return res.status(200).json({ success: true, clinic: clinicId, count: Object.keys(filtered).length, presets: filtered });
    }

    if (method === 'POST') {
        let payload = body;
        if (typeof payload === 'string') {
            try { payload = JSON.parse(payload); } catch (e) {}
        }
        if (!payload || !payload.id || !payload.name) {
            return res.status(400).json({ success: false, error: 'Missing id or name in payload' });
        }

        presets[payload.id] = {
            id: payload.id,
            name: payload.name,
            clinic_id: payload.clinic_id || 'depry',
            data: payload.data || {},
            updated_at: new Date().toISOString()
        };

        writePresetsToFile(presets);
        return res.status(200).json({ success: true, message: 'Preset saved successfully', preset: presets[payload.id] });
    }

    if (method === 'DELETE') {
        const id = query.id || (body && body.id);
        if (!id) {
            return res.status(400).json({ success: false, error: 'Missing id parameter' });
        }
        if (presets[id]) {
            delete presets[id];
            writePresetsToFile(presets);
            return res.status(200).json({ success: true, message: `Preset ${id} deleted` });
        }
        return res.status(404).json({ success: false, error: 'Preset not found' });
    }

    return res.status(405).json({ error: 'Method not allowed' });
};
