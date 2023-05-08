// import Router from express
import { Request, Response, Router } from "express";
import { registerCtrl, loginCtrl } from "../controllers/auth";

// create the router
const router = Router();

/**
 * http://localhost:3002/auth/register [POST]
 */
router.post("/register", registerCtrl);
/**
 * http://localhost:3002/auth/login [POST]
 */
router.post("/login", loginCtrl);

export { router };
