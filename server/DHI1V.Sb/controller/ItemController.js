import dataAcces from "../db/dataAcces.js";

function getNameItems(request, response) {
  classes = dataAcces.selectQuery1Param("ITEM_NAME", request.params.name);
  if (classes) {
    response.json(classes);
  } else {
    response.status(404);
    response.json();
  }
}

function getClasses(request, response) {
  classes = dataAcces.selectQuery0Params("ITEMS");
  if (classes) {
    response.json(classes);
  } else {
    response.status(404);
    response.json(classes);
  }
}

function getPriceItems(request, response) {
  classes = dataAcces.selectQuery1Param("ITEM_PRICE", request.params.price);
  if (classes) {
    response.json(classes);
  } else {
    response.status(404);
    response.json();
  }
}

function getIdItems(request, response) {
  classes = dataAcces.selectQuery1Param("ITEM_ID", request.params.item_id);
  if (classes) {
    response.json(classes);
  } else {
    response.status(404);
    response.json();
  }
}

function getCategoryItems(request, response) {
  classes = dataAcces.selectQuery1Param("ITEM", request.params.category_id);
  if (classes) {
    response.json(classes);
  } else {
    response.status(404);
    response.json();
  }
}

function getOrderItems(request, response) {
  classes = dataAcces.selectQuery1Param("ORDER_ITEM", request.params.order_id);
  if (classes) {
    response.json(classes);
  } else {
    response.status(404);
    response.json();
  }
}

function getUserOrders(request, response) {
  classes = dataAcces.selectQuery1Param("ORDER", request.params.user_id);
  if (classes) {
    response.json(classes);
  } else {
    response.status(404);
    response.json();
  }
}

function getSingleClass(request, response) {
  classes = dataAcces.selectQuery1Param("CATEGORY", request.params.className);
  if (classes) {
    response.json(classes);
  } else {
    response.status(404);
    response.json();
  }
}

function getPriceWeightItems(request, response) {
  classes = dataAcces.selectQuery2Params(
    "ITEM_PRICE_WEIGHT",
    request.params.price,
    request.params.weight
  );
  if (classes) {
    response.json(classes);
  } else {
    response.status(404);
    response.json();
  }
}

function getPriceFatRatioItems(request, response) {
  classes = dataAcces.selectQuery2Params(
    "ITEM_PRICE_FAT_RATIO",
    request.params.price,
    request.params.fat_ratio
  );
  if (classes) {
    response.json(classes);
  } else {
    response.status(404);
    response.json();
  }
}

function getWeightFatRatioItems(request, response) {
  classes = dataAcces.selectQuery2Params(
    "ITEM_WEIGHT_FAT_RATIO",
    request.params.weight,
    request.params.fat_ratio
  );
  if (classes) {
    response.json(classes);
  } else {
    response.status(404);
    response.json();
  }
}

function getPriceWeightFatRatioItems(request, response) {
  let param = [];
  const price_LowerBound = request.params.price.split("-")[0];
  const price_UpperBound = request.params.price.split("-")[1];
  const weight_LowerBound = request.params.weight.split("-")[0];
  const weight_UpperBound = request.params.weight.split("-")[1];
  const fat_ratio_LowerBound = request.params.fat_ratio.split("-")[0];
  const fat_ratio_UpperBound = request.params.fat_ratio.split("-")[1];

  param.push(price_LowerBound);
  param.push(price_UpperBound);
  param.push(weight_LowerBound);
  param.push(weight_UpperBound);
  param.push(fat_ratio_LowerBound);
  param.push(fat_ratio_UpperBound);
  console.log(param);

  classes = dataAcces.selectQuery6Params(
    "ITEM_PRICE_WEIGHT_FAT_RATIO",
    ...param
  );
  if (classes) {
    response.json(classes);
  } else {
    response.status(404);
    response.json();
  }
}

function getWeightItems(request, response) {
  classes = dataAcces.selectQuery1Param("ITEM_WEIGHT", request.params.weight);
  if (classes) {
    response.json(classes);
  } else {
    response.status(404);
    response.json();
  }
}

function getFatRatioItems(request, response) {
  classes = dataAcces.selectQuery1Param(
    "ITEM_FAT_RATIO",
    request.params.fat_ratio
  );
  if (classes) {
    response.json(classes);
  } else {
    response.status(404);
    response.json();
  }
}

const itemController = {
  getNameItems: getNameItems,
  getClasses: getClasses,
  getPriceItems: getPriceItems,
  getIdItems: getIdItems,
  getCategoryItems: getCategoryItems,
  getOrderItems: getOrderItems,
  getUserOrders: getUserOrders,
  getSingleClass: getSingleClass,
  getPriceWeightItems: getPriceWeightItems,
  getPriceFatRatioItems: getPriceFatRatioItems,
  getWeightFatRatioItems: getWeightFatRatioItems,
  getPriceWeightFatRatioItems: getPriceWeightFatRatioItems,
  getWeightItems: getWeightItems,
  getFatRatioItems: getFatRatioItems,
};

console.log(itemController);

export default itemController;