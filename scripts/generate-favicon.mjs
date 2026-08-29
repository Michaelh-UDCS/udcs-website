/**
 * Generates brand favicon.ico (48x48) and apple-touch-icon.png (180x180).
 * Gold hexagon mark on charcoal — no external deps.
 */
import fs from 'fs';
import zlib from 'zlib';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '..', 'public');

const CHARCOAL = [0x0a, 0x0a, 0x0a, 0xff];
const GOLD = [0xc5, 0xa5, 0x72, 0xff];

function crc32(buf) {
  let c = ~0;
  for (let i = 0; i < buf.length; i++) {
    c ^= buf[i];
    for (let k = 0; k < 8; k++) c = (c >>> 1) ^ (0xedb88320 & -(c & 1));
  }
  return ~c >>> 0;
}

function chunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length, 0);
  const typeBuf = Buffer.from(type, 'ascii');
  const crcBuf = Buffer.alloc(4);
  crcBuf.writeUInt32BE(crc32(Buffer.concat([typeBuf, data])), 0);
  return Buffer.concat([len, typeBuf, data, crcBuf]);
}

function pointInHexagon(x, y, cx, cy, r) {
  // Flat-top hexagon
  const dx = Math.abs(x - cx) / r;
  const dy = Math.abs(y - cy) / r;
  return dy <= 0.8660254 && dx + dy * 0.5773503 <= 1;
}

function nearHexEdge(x, y, cx, cy, rOuter, thickness) {
  const inOuter = pointInHexagon(x, y, cx, cy, rOuter);
  const inInner = pointInHexagon(x, y, cx, cy, rOuter - thickness);
  return inOuter && !inInner;
}

function nearUMark(x, y, cx, cy, size) {
  // Approximate U stroke as two verticals + bottom arc box
  const left = cx - size * 0.28;
  const right = cx + size * 0.28;
  const top = cy - size * 0.22;
  const bottom = cy + size * 0.28;
  const t = size * 0.08;
  const onLeft = x >= left - t && x <= left + t && y >= top && y <= bottom - size * 0.05;
  const onRight = x >= right - t && x <= right + t && y >= top && y <= bottom - size * 0.05;
  const onBottom =
    y >= bottom - t * 1.4 &&
    y <= bottom + t * 0.4 &&
    x >= left &&
    x <= right;
  return onLeft || onRight || onBottom;
}

function renderRgba(size) {
  const rgba = Buffer.alloc(size * size * 4);
  const cx = (size - 1) / 2;
  const cy = (size - 1) / 2;
  const r = size * 0.38;
  const thickness = Math.max(2, size * 0.055);

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const i = (y * size + x) * 4;
      let color = CHARCOAL;
      if (nearHexEdge(x, y, cx, cy, r, thickness) || nearUMark(x, y, cx, cy, size)) {
        color = GOLD;
      }
      rgba[i] = color[0];
      rgba[i + 1] = color[1];
      rgba[i + 2] = color[2];
      rgba[i + 3] = color[3];
    }
  }
  return rgba;
}

function encodePng(size, rgba) {
  const raw = Buffer.alloc((size * 4 + 1) * size);
  for (let y = 0; y < size; y++) {
    raw[y * (size * 4 + 1)] = 0;
    rgba.copy(raw, y * (size * 4 + 1) + 1, y * size * 4, (y + 1) * size * 4);
  }
  const compressed = zlib.deflateSync(raw, { level: 9 });
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(size, 0);
  ihdr.writeUInt32BE(size, 4);
  ihdr[8] = 8;
  ihdr[9] = 6;
  ihdr[10] = 0;
  ihdr[11] = 0;
  ihdr[12] = 0;
  return Buffer.concat([
    Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]),
    chunk('IHDR', ihdr),
    chunk('IDAT', compressed),
    chunk('IEND', Buffer.alloc(0)),
  ]);
}

function encodeIco(pngBuffer, size) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(1, 4);
  const entry = Buffer.alloc(16);
  entry.writeUInt8(size >= 256 ? 0 : size, 0);
  entry.writeUInt8(size >= 256 ? 0 : size, 1);
  entry.writeUInt8(0, 2);
  entry.writeUInt8(0, 3);
  entry.writeUInt16LE(1, 4);
  entry.writeUInt16LE(32, 6);
  entry.writeUInt32LE(pngBuffer.length, 8);
  entry.writeUInt32LE(22, 12);
  return Buffer.concat([header, entry, pngBuffer]);
}

const png180 = encodePng(180, renderRgba(180));
const png48 = encodePng(48, renderRgba(48));
const ico = encodeIco(png48, 48);

fs.writeFileSync(path.join(publicDir, 'apple-touch-icon.png'), png180);
fs.writeFileSync(path.join(publicDir, 'favicon.ico'), ico);

console.log(
  `Wrote apple-touch-icon.png (${png180.length} B) and favicon.ico (${ico.length} B)`,
);
