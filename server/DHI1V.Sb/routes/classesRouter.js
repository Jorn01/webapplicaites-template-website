import express from "express";
import classes from "../classesRepository.js";

const router = express.Router();

router.get("/", getClasses);
router.get("/:className", getSingleClass);
router.get("/price/:price", getPriceClass);

function getClasses(request, response) {
  console.log(classes);
  response.json(classes);
}

function getPriceClass(request, response) {
  console.log(classes);

  const price = request.params.price;
  console.log(price);
  const clazz = classes.items.find((clazz) => clazz.price === price);
  console.log(clazz);
  if (clazz) {
    response.json(clazz);
  } else {
    response.status(404);
    response.json();
  }
}

function getSingleClass(request, response) {
  const className = request.params.className;
  const clazz = classes.items.find((clazz) => clazz.name === className);

  if (clazz) {
    response.json(clazz);
  } else {
    response.status(404);
    response.json();
  }
}

export default router;
