# BeforeAfter

A browser-based tool for comparing and combining before/after images. No server needed, runs entirely in your browser.

![BeforeAfter Screenshot](screenshot.png)

## Features

- 📸 Combine before/after images side by side or vertically
- 📐 **Multiple Aspect Ratios**:
  - `Auto` (Original dimensions)
  - `1:1` (Square - Instagram / Facebook feed)
  - `4:5` (Portrait - Instagram post)
  - `5:4` (Landscape 5:4)
  - `16:9` (Widescreen - YouTube / Presentation)
  - `9:16` (Story / Reels / TikTok / Shorts)
- 🔍 **Interactive Zoom & Pan**:
  - Zoom in & out independently or with linked sync (`20%` - `500%`)
  - Mouse wheel zoom (cursor-centered)
  - Click & drag to pan/reposition images for precise framing
  - 🔗 **Sync Zoom & Pan**: Synchronize scaling and position between Before & After
  - Fit Modes: `Cover` (fill & crop) and `Contain` (fit full image)
- 🔎 **Visual Diff Tool** to highlight changes between images
- 📋 Paste images directly from clipboard (`Ctrl+V` / `⌘+V`)
- 📥 Drag and drop support & file browsing
- 🎨 Customizable:
  - Background color
  - Custom label text ("Before" / "After" or custom)
  - Label size, color, and position (Top / Bottom / Hidden)
  - Gap between images
  - Export format (`PNG`, `JPEG`, `WEBP`) and quality
- 🏷️ **de Pry Clinic Logo Stamp**:
  - ตัวเลือกโลโก้: **ป้ายคลินิก (Badge ขาว)**, **สีชมพู (Pink)** และ **สีขาว (White)**
  - เลือกตำแหน่งจัดวาง: บนขวา (Top-Right), บนซ้าย, ล่างขวา, ล่างซ้าย, บนกลาง
  - ปรับขนาดโลโก้ได้ตั้งแต่ 5% ถึง 22%
- 📝 **Case Information & Text Overlays**:
  - ชื่อโปรแกรมด้านบน (Treatment Headline Pill แคปซูลขาวโค้งมน)
  - วันที่ Before/After พร้อม Drop shadow
  - 📅 **ปฏิทินเลือกวันที่ (Calendar Picker)**: จิ้มไอคอน 📅 เพื่อเปิดปฏิทินเลือกวันได้ทันที พร้อมตัวเลือกลงรูปแบบอัตโนมัติ (Eng สากล, ไทย ย่อ, ตัวเลข ฯลฯ) หรือพิมพ์ข้อความเองได้อิสระ
  - ข้อความกำกับทางกฎหมายด้านล่าง (Thai Legal Disclaimers)
  - ลายน้ำทแยงมุม `de Pry clinic` (Watermark พร้อมตัวปรับความจาง)
  - 📏 **ตัวปรับขนาดตัวหนังสือด้านล่าง (Default: กะทัดรัด ไม่บังรูปเคส)**: ย่อขนาดให้อยู่ชิดขอบล่าง ประหยัดพื้นที่รูปเคส 1:1 พร้อมปุ่มลัด (กะทัดรัด / ปานกลาง / ใหญ่) และฟังก์ชัน auto-shrink ป้องกันข้อความล้น
- 🕶️ **แถบปิดตาคนไข้เพื่อความเป็นส่วนตัว (Eye Privacy Censor Bar)**:
  - สี่เหลี่ยมขอบโค้งมนสีดำ (Black Rounded Box) ตรงระดับสายตาคนไข้ (Default 36.5% กึ่งกลางใบหน้า)
  - **รองรับแยกปรับซ้าย-ขวาอิสระ (Independent Left & Right Controls)**: สำหรับเคสที่ระดับใบหน้าคนไข้ก่อน-หลังทำเอียงหรือสูงต่ำไม่เท่ากัน พร้อมปุ่มก๊อปปี้ค่าข้ามฝั่ง (ซ้าย ➡️ ขวา หรือ ขวา ⬅️ ซ้าย) ได้ในคลิกเดียว
  - **รองรับขยายขนาดได้กว้างขึ้น**: ปรับความกว้างได้ถึง 95%, ความสูงได้ถึง 30%, ช่วงปรับระดับ Y 5%–85%, X 10%–90%
  - ค่าเริ่มต้นตามสเปกคลินิก: สีดำ `#000000`, ทั้ง 2 ฝั่ง, Y: `36.5%`, X: `49.5%`, ความกว้าง: `60%`, ความสูง: `7%`, ขอบโค้งมน: `14px`
  - ปุ่มลัดขยับตำแหน่ง ⬆️ ⬇️ ⬅️ ➡️ ➕ ➖ และปุ่มรีเซ็ตค่าเริ่มต้น de Pry
  - เลือกปิดตาได้ทั้ง 2 ฝั่ง หรือเฉพาะฝั่งซ้าย/ขวา และเลือกสีแถบได้ (ดำ, ขาว, กรมท่า, เทา)
- 🗄️ **ฐานข้อมูล SQLite จริง (Real SQLite 3 Database via WebAssembly `sql.js`)**:
  - บันทึกและดึงข้อมูลพรีเซ็ตผ่านเอนจิน SQLite 3 WebAssembly จริง (`presets.db`)
  - จัดเก็บข้อมูลไบนารีลง IndexedDB ปลอดภัย ไม่สูญหาย ใช้งานได้ 100% ทั้งแบบออนไลน์และออฟไลน์
  - หน้าต่างจัดการฐานข้อมูล (**SQLite Database Manager Modal**): ดูตารางข้อมูล SQL records สด, ดาวน์โหลดไฟล์ฐานข้อมูลไบนารี `.sqlite`, นำเข้าไฟล์ `.sqlite`, และ Export เป็นสคริปต์ `.sql`
  - Vercel Serverless API (`/api/presets`) รองรับการเชื่อมต่อและจัดเก็บข้อมูลแบบ Serverless
- 🏥 **ระบบรองรับหลายคลินิก (Multi-Clinic Branding System)**:
  - **🌸 de Pry Clinic**: คลินิกความงามพร้อมโลโก้เวกเตอร์ (Badge, Pink, White) และพรีเซ็ตเฉพาะทาง
  - **🦷 The Dental Haus**: คลินิกทันตกรรมเพื่อความงามพร้อมโลโก้เวกเตอร์ (Luxury Gold Badge, Dental Teal, White) และพรีเซ็ตเฉพาะทางทันตกรรม (Smile Design / วีเนียร์, จัดฟันใส Clear Aligner)
  - **📤 ระบบอัปโหลดโลโก้จริง (Custom Logo Upload)**: อัปโหลดไฟล์โลโก้ทางการ (PNG โปร่งใส, SVG, WebP) และบันทึกลง SQLite `clinic_settings` ใช้งานได้ทันที
- 🌐 **ระบบสลับภาษา (Bilingual Thai 🇹🇭 / English 🇺🇸)**:
  - สลับภาษาการแสดงผลของเมนูและส่วนควบคุมได้ทันที
  - เทมเพลตข้อความด่วน (BEFORE/AFTER, ก่อนทำ/หลังทำ, Day 1/Day 14, 1 เดือน) และข้อความกำกับกฎหมายทั้งภาษาไทย ภาษาอังกฤษ และทันตกรรม
- 🕶️ **แถบปิดตาคนไข้เพื่อความเป็นส่วนตัว (Interactive Censor Bar)**:
  - **คลิกลากปรับตำแหน่งและขนาดด้วยเมาส์บนหน้าภาพได้โดยตรง (Interactive Mouse Drag & Resize Handles)**
  - **รองรับแยกปรับซ้าย-ขวาอิสระ (Independent Left & Right Controls)** สำหรับเคสที่ระดับสายตาเอียงหรือไม่เท่ากัน
- 💧 **ลายน้ำอยู่เลเยอร์บนสุด (Topmost Watermark Layer)**:
  - ลายน้ำทแยงมุม 45 องศา จะถูกวาดทับอยู่ชั้นบนสุดของทุกองค์ประกอบเพื่อป้องกันการคัดลอกภาพ
- 📱 **Mobile UI & Responsive Design**:
  - แถบนำทางหมวดหมู่บนมือถือ (Category Scroll Tabs) และพื้นที่ภาพด้านบนสุด
  - ปุ่ม Action Sticky ด้านล่างสุด สะดวกสำหรับการใช้งานด้วยนิ้วโป้งบนสมาร์ทโฟน
- 💾 Download high-resolution combined or diff images (มาตรฐาน 2000px Ultra HD คมชัดระดับป้ายโฆษณา)
- 📋 One-click copy image to clipboard
- ⛶ Fullscreen lightbox preview & result zoom
- 🚀 Runs 100% in browser on Vercel or local static files, no database server configuration required

## Usage

1. Open `index.html` in any web browser
2. Add images using:
   - Paste from clipboard (`Ctrl+V` / `⌘+V`)
   - Drag and drop
   - File browser ("Browse Image")
3. Choose your desired **Aspect Ratio** (`1:1`, `16:9`, `9:16`, `4:5`, `5:4`, or `Auto`)
4. **Zoom & Pan** each image using mouse wheel or sliders to frame the subject perfectly
5. Customize layout, gap, background color, and labels
6. Download the result or copy it directly to your clipboard!

## Keyboard Shortcuts

- `Ctrl+V` / `⌘+V` - Paste image
- `Ctrl+Enter` / `⌘+Enter` - Combine images
- `Delete` / `Backspace` - Clear selected area
- `Mouse Wheel` - Zoom in / out over image viewport
- `Click & Drag` - Pan image inside slot

## License

[MIT](LICENSE)