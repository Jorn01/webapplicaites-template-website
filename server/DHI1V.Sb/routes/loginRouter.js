import express from "express";
import cors from "cors";

import dataAcces from "../db/dataAcces.js";

const router = express.Router();
router.use(cors());
let classes = {};

router.get("/Email/:email/Password/:password", getLogin);
router.put(
  "/Email/:email/UserName/:user_name/Password/:password/User_ID/:User_ID",
  putLogin
);
router.post("/Email/:email/UserName/:user_name/Password/:password", postLogin);
router.delete("/Email/:email/Password/:password", deleteLogin);

function getLogin(request, response) {
  classes = dataAcces.selectQuery2Params(
    "USER",
    request.params.email,
    request.params.password
  );
  if (classes) {
    response.json(classes);
  } else {
    response.status(404);
    response.json();
  }
}

function putLogin(request, response) {
  console.log(request.params);
  classes = dataAcces.updateQuery6Params(
    "USER",
    request.params.user_name,
    request.params.email,
    request.params.password,
    request.params.User_ID
  );
  if (classes) {
    response.json(classes);
  } else {
    response.status(404);
    response.json();
  }
}

function postLogin(request, response) {
  console.log(request.params);
  classes = dataAcces.insertQuery3Params(
    "USER",
    request.params.user_name,
    request.params.email,
    request.params.password
  );
  if (classes) {
    response.json(classes);
  } else {
    response.status(404);
    response.json();
  }
}

function deleteLogin(request, response) {
  classes = dataAcces.DeleteQuery2Params(
    "USER",
    request.params.email,
    request.params.password
  );
  if (classes) {
    response.json(classes);
  } else {
    response.status(404);
    response.json();
  }
}

export default router;
