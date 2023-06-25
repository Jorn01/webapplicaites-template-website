import express from "express";
import itemController from "../controller/ItemController.js";

const { getSingleClass, getClasses, getNameItems } = itemController;
const { getPriceItems, getIdItems, getCategoryItems, getOrderItems } =
  itemController;
const { getUserOrders, getWeightItems, getFatRatioItems } = itemController;
const { getPriceWeightItems, getPriceFatRatioItems, getWeightFatRatioItems } =
  itemController;
const { getPriceWeightFatRatioItems } = itemController;

const router = express.Router();
let classes = {};

router.get("/", getClasses);
router.get("/:className", getSingleClass);
router.get("/name/:name", getNameItems);
router.get("/price/:price", getPriceItems);
router.get("/item_id/:item_id", getIdItems);
router.get("/category/:category_id", getCategoryItems);
router.get("/order/:order_id", getOrderItems);
router.get("/user/:user_id", getUserOrders);
router.get("/weight/:weight", getWeightItems);
router.get("/fat_ratio/:fat_ratio", getFatRatioItems);
router.get("/price/:price/weight/:weight", getPriceWeightItems);
router.get("/price/:price/fat_ratio/:fat_ratio", getPriceFatRatioItems);
router.get("/weight/:weight/fat_ratio/:fat_ratio", getWeightFatRatioItems);
router.get(
  "/price/:price/weight/:weight/fat_ratio/:fat_ratio",
  getPriceWeightFatRatioItems
);

export default router;
