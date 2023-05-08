import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/jwt.handle";
import { RequestExt } from "../interfaces/req-ext";

//verifies if JWT is correct
const checkJwt = async (req: RequestExt, res: Response, next: NextFunction) => {
  try {
    const jwtByUser = req.headers.authorization || null;
    const jwt = jwtByUser?.split(" ").pop();
    const isUser = (await verifyToken(`${jwt}`)) as { id: string };

    if (!isUser) {
      res.status(401);
      res.send("NOT_JWT_VALID");
    } else {
      req.user = isUser;
      next();
    }
  } catch (error) {
    res.status(402);
    res.send("SESSION_INVALID");
  }
};

export { checkJwt };
