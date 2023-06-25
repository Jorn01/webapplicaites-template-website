import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import loginController from "../controller/loginController.js";

const { getLogin, putLogin, postLogin, deleteLogin } = loginController;

const router = express.Router();
router.use(cors());
router.use(bodyParser.json());
let classes = {};

router.get("/Email/:email/Password/:password", getLogin);
router.put(
  "/Email/:email/UserName/:user_name/Password/:password/User_ID/:User_ID",
  putLogin
);
router.post("/", postLogin);
router.delete("/Email/:email/Password/:password", deleteLogin);

export default router;
