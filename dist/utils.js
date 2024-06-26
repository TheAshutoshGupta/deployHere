"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generate = void 0;
const MAX_LEN = 5;
function generate() {
    let ans = "";
    const subset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    for (let i = 0; i < MAX_LEN; i++) {
        ans += subset[Math.floor(Math.random() * subset.length)];
    }
    return ans;
}
exports.generate = generate;
