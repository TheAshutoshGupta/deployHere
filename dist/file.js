"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFilePath = void 0;
const fs_1 = __importDefault(require("fs"));
const getFilePath = (folderName) => {
    const allFilesAndFolders = fs_1.default.readdirSync(folderName);
    allFilesAndFolders.forEach((fileOrFolder) => {
        console.log(fileOrFolder);
    });
};
exports.getFilePath = getFilePath;
