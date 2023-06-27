import { IDiskStorageProvider } from "../IDiskStorageProviers";
import path from 'path';
import fs from 'fs';
import uploadConfig from '../../configs/upload';

export class DiskStorage implements IDiskStorageProvider {
    async saveFile(fileName: string): Promise<string>{
        await fs.promises.rename(
            path.resolve(uploadConfig.TMP_FOLDER, fileName),
            path.resolve(uploadConfig.UPLOAD_FOLDER, fileName),
        )
        
        return fileName;
    }

    async deleteFile(fileName: string): Promise<void> {
        const filePath = path.resolve(uploadConfig.UPLOAD_FOLDER, fileName);

        try{
            await fs.promises.stat(filePath)
        }catch{
            return
        }

        await fs.promises.unlink(filePath)
    }
}