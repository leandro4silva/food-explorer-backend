"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiskStorage = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const upload_1 = __importDefault(require("../../configs/upload"));
class DiskStorage {
    async saveFile(fileName) {
        await fs_1.default.promises.rename(path_1.default.resolve(upload_1.default.TMP_FOLDER, fileName), path_1.default.resolve(upload_1.default.UPLOAD_FOLDER, fileName));
        return fileName;
    }
    async deleteFile(fileName) {
        const filePath = path_1.default.resolve(upload_1.default.UPLOAD_FOLDER, fileName);
        try {
            await fs_1.default.promises.stat(filePath);
        }
        catch {
            return;
        }
        await fs_1.default.promises.unlink(filePath);
    }
}
exports.DiskStorage = DiskStorage;
