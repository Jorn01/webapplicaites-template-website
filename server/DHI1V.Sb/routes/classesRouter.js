import express from "express";

import dataAcces from "../db/dataAcces.js";

const router = express.Router();
let classes = {};

router.get("/", getClasses);
router.get("/:className", getSingleClass);
router.get("/price/:price", getPriceClass);

function getClasses(request, response) {
  classes = dataAcces.selectQuery("ITEMS");
  response.json(classes);
}

function getPriceClass(request, response) {
  classes = dataAcces.selectQuery("ITEM_PRICE", request.params.price);
  console.log(classes);
  if (classes) {
    response.json(classes);
  } else {
    response.status(404);
    response.json();
  }
}

function getSingleClass(request, response) {
  const className = request.params.className;
  if (clazz) {
    response.json(clazz);
  } else {
    response.status(404);
    response.json();
  }
}

export default router;
