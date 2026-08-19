import fs from 'fs';

// A minimal valid 16x16 PNG icon
const png16 = Buffer.from(
  'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAWElEQVR42mNgGAWjYBSMAgQw' +
  'g5g1QJyNl4v7f2xszH82NkYmRlxc3P9nz575/+fPn/9AMUZGQoaDDEaBGEeAn58fy8yA' +
  'KAYi6mBsbGyMw02jYBQMbgAAbw1fF3/oE7MAAAAASUVORK5CYII=',
  'base64'
);

// Minimal standard ICO format wrapping PNG
const icoHeader = Buffer.alloc(6);
icoHeader.writeUInt16LE(0, 0); // reserved
icoHeader.writeUInt16LE(1, 2); // image type 1 = icon
icoHeader.writeUInt16LE(1, 4); // number of images = 1

const icoDirEntry = Buffer.alloc(16);
icoDirEntry.writeUInt8(16, 0); // width
icoDirEntry.writeUInt8(16, 1); // height
icoDirEntry.writeUInt8(0, 2);  // color palette
icoDirEntry.writeUInt8(0, 3);  // reserved
icoDirEntry.writeUInt16LE(1, 4); // color planes
icoDirEntry.writeUInt16LE(32, 6); // bits per pixel
icoDirEntry.writeUInt32LE(png16.length, 8); // image size
icoDirEntry.writeUInt32LE(22, 12); // image offset (6 + 16 = 22)

const icoBuffer = Buffer.concat([icoHeader, icoDirEntry, png16]);
fs.writeFileSync('public/favicon.ico', icoBuffer);
fs.writeFileSync('public/apple-touch-icon.png', png16);
console.log('Created public/favicon.ico and public/apple-touch-icon.png');


