import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/user.interface";
import UserModel from "../models/user";
import { encrypt, verify } from "../utils/bcrypt.handle";
import { generateToken } from "../utils/jwt.handle";

const registerNewUser = async ({ email, password, name }: User) => {
  //search for an existing email
  const checkIs = await UserModel.findOne({ email });
  //verify if the email exists on DB
  if (checkIs) return "EMAIL_USER_ALREADY_EXISTS";

  //encrypts the password
  const passHash = await encrypt(password);

  //create new user register with encrypted password
  const registerNewUser = await UserModel.create({
    email,
    password: passHash,
    name,
  });

  return registerNewUser;
};

const loginUser = async ({ email, password }: Auth) => {
  const checkIs = await UserModel.findOne({ email });

  if (!checkIs) return "USER_NOT_FOUND";

  const passwordHash = checkIs.password; //encrypted password from DB
  const isCorrect = await verify(password, passwordHash);

  if (!isCorrect) return "PASSWORD_INCORRECT";

  const token = await generateToken(checkIs.email);

  const data = {
    token,
    user: checkIs,
  };
  return data;
};

export { registerNewUser, loginUser };
