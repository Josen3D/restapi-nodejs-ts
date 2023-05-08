import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { RequestExt } from "../interfaces/req-ext";

const getItems = (req: RequestExt, res: Response) => {
  try {
    res.send({
      data: "esto solo lo ven las personas con sesion / JWT",
      user: req.user,
    });
  } catch (error) {
    handleHttp(res, "ERROR_GET_ITEMS");
  }
};

export { getItems };
