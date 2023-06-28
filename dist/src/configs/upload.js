"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const path_1 = __importDefault(require("path"));
const crypto_1 = __importDefault(require("crypto"));
const multer_1 = __importDefault(require("multer"));
const TMP_FOLDER = path_1.default.resolve(__dirname, '..', '..', '..', 'tmp');
const UPLOAD_FOLDER = path_1.default.resolve(TMP_FOLDER, 'uploads');
const MULTER = {
    storage: multer_1.default.diskStorage({
        destination: TMP_FOLDER,
        filename(request, file, callback) {
            const fileHash = crypto_1.default.randomBytes(10).toString("hex");
            const fileName = `${fileHash}-${file.originalname}`;
            return callback(null, fileName);
        }
    })
};
module.exports = {
    TMP_FOLDER,
    UPLOAD_FOLDER,
    MULTER
};
