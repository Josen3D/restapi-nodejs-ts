//import hash and compare from bcryptjs
import { hash, compare } from "bcryptjs";

//Encrypts the password to hash
const encrypt = async (passwordPlain: string) => {
  const passwordHash = await hash(passwordPlain, 8);
  return passwordHash;
};

//verify if passwordHash corresponds to passwordPlain
const verify = async (password: string, passwordHash: string) => {
  const isCorrect = await compare(password, passwordHash);
  return isCorrect;
};

export { encrypt, verify };
