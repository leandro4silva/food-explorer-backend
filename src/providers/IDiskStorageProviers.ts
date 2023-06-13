export interface IDiskStorageProvider{
    saveFile(fileName: string): Promise<string>
    deleteFile(fileName: string): Promise<void>
}