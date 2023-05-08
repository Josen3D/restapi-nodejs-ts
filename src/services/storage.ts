import { Storage } from "../interfaces/storage";
import StorageModel from "../models/storage";

// register the filename, iduser and path on DB and return response
const registerUpload = async ({ fileName, idUser, path }: Storage) => {
  const responseItem = await StorageModel.create({ fileName, idUser, path });
  return responseItem;
};

export { registerUpload };
