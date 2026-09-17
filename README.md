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
- ⭐ **ระบบจดจำพรีเซ็ตและย้ายข้อมูล (Preset Manager System)**:
  - บันทึกการตั้งค่าทั้งหมด (สัดส่วน, การจัดวาง, ข้อความ, วันที่, disclaimers, ขนาดตัวหนังสือ, โลโก้, แถบปิดตาทั้งสองฝั่ง) เป็น Preset ใหม่พร้อมตั้งชื่อได้อิสระ
  - บันทึกทับ (Update) และลบ (Delete) Preset เดิมที่เคยสร้างไว้
  - มี Built-in Presets ให้พร้อมใช้: **✨ de Pry Standard**, **🕶️ de Pry Privacy (ปิดตากว้าง 60% ดำสนิท)**, **🌿 คลีน มินิมอล**
  - **ส่งออก/ย้ายข้อมูล (Export Presets)**: คัดลอก JSON หรือดาวน์โหลดเป็นไฟล์ `.json` เพื่อส่งต่อหรือนำไปใช้บนคอมพิวเตอร์/เบราว์เซอร์เครื่องอื่นได้ทันที
  - **นำเข้าข้อมูล (Import Presets)**: วางรหัส JSON หรืออัปโหลดไฟล์ `.json` เพื่อโหลดการตั้งค่าและพรีเซ็ตเข้ามาใช้งานได้อัตโนมัติ
- 💾 Download high-resolution combined or diff images (มาตรฐาน 2000px คมชัดระดับโปรดักชัน)
- 📋 One-click copy image to clipboard
- ⛶ Fullscreen lightbox preview & result zoom
- 📱 Mobile-friendly with touch drag support
- 🚀 Runs 100% in browser, no server or installation required

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