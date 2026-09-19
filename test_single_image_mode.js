const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");

const html = fs.readFileSync("index.html", "utf8");
const start = html.indexOf("function calculateGeometry()");
const end = html.indexOf("\n        function renderImageToSlot", start);
assert.ok(start >= 0 && end > start, "calculateGeometry must exist");

const context = {
    beforeImage: { naturalWidth: 1200, naturalHeight: 800 },
    afterImage: null,
    currentRatio: "1:1",
    currentLayout: "single",
    gapControl: { value: "12" }
};
vm.createContext(context);
vm.runInContext(`${html.slice(start, end)}; this.calculateGeometry = calculateGeometry;`, context);

let geometry = context.calculateGeometry();
assert.deepEqual(
    JSON.parse(JSON.stringify(geometry)),
    {
        canvasWidth: 2000,
        canvasHeight: 2000,
        isHorizontal: true,
        slotBefore: { x: 0, y: 0, w: 2000, h: 2000 },
        slotAfter: { x: 0, y: 0, w: 0, h: 0 },
        gap: 0
    }
);

context.beforeImage = null;
context.afterImage = { naturalWidth: 900, naturalHeight: 1600 };
context.currentRatio = "auto";
geometry = context.calculateGeometry();
assert.equal(geometry.canvasWidth, 900);
assert.equal(geometry.canvasHeight, 1600);
assert.deepEqual(JSON.parse(JSON.stringify(geometry.slotAfter)), { x: 0, y: 0, w: 900, h: 1600 });

console.log("single-image geometry: ok");
