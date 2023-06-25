import dataAcces from "../db/dataAcces.js";
let classes = {};

// Get items by name
function getNameItems(request, response) {
  // Retrieve items from the database based on the provided item name
  classes = dataAcces.selectQuery1Param("ITEM_NAME", request.params.name);
  if (classes) {
    response.status(200);
    response.json(classes);
  } else {
    response.status(404);
    response.json();
  }
}

// Get all items
function getClasses(request, response) {
  // Retrieve all items from the database
  classes = dataAcces.selectQuery0Params("ITEMS");
  if (classes) {
    response.status(200);
    response.json(classes);
  } else {
    response.status(404);
    response.json(classes);
  }
}

// Get items by price
function getPriceItems(request, response) {
  // Retrieve items from the database based on the provided price
  classes = dataAcces.selectQuery1Param("ITEM_PRICE", request.params.price);
  if (classes) {
    response.status(200);
    response.json(classes);
  } else {
    response.status(404);
    response.json();
  }
}

// Get items by ID
function getIdItems(request, response) {
  // Retrieve items from the database based on the provided item ID
  classes = dataAcces.selectQuery1Param("ITEM_ID", request.params.item_id);
  if (classes) {
    response.status(200);
    response.json(classes);
  } else {
    response.status(404);
    response.json();
  }
}

// Get items by category
function getCategoryItems(request, response) {
  // Retrieve items from the database based on the provided category ID
  classes = dataAcces.selectQuery1Param("ITEM", request.params.category_id);
  if (classes) {
    response.status(200);
    response.json(classes);
  } else {
    response.status(404);
    response.json();
  }
}

// Get items by order
function getOrderItems(request, response) {
  // Retrieve items from the database based on the provided order ID
  classes = dataAcces.selectQuery1Param("ORDER_ITEM", request.params.order_id);
  if (classes) {
    response.status(200);
    response.json(classes);
  } else {
    response.status(404);
    response.json();
  }
}

// Get user orders
function getUserOrders(request, response) {
  // Retrieve orders from the database based on the provided user ID
  classes = dataAcces.selectQuery1Param("ORDER", request.params.user_id);
  if (classes) {
    response.status(200);
    response.json(classes);
  } else {
    response.status(404);
    response.json();
  }
}

// Get a single category
function getSingleClass(request, response) {
  // Retrieve a category from the database based on the provided category name
  classes = dataAcces.selectQuery1Param("CATEGORY", request.params.className);
  if (classes) {
    response.status(200);
    response.json(classes);
  } else {
    response.status(404);
    response.json();
  }
}

// Get items by price and weight
function getPriceWeightItems(request, response) {
  // Retrieve items from the database based on the provided price and weight
  classes = dataAcces.selectQuery2Params(
    "ITEM_PRICE_WEIGHT",
    request.params.price,
    request.params.weight
  );
  if (classes) {
    response.status(200);
    response.json(classes);
  } else {
    response.status(404);
    response.json();
  }
}

// Get items by price and fat ratio
function getPriceFatRatioItems(request, response) {
  // Retrieve items from the database based on the provided price and fat ratio
  classes = dataAcces.selectQuery2Params(
    "ITEM_PRICE_FAT_RATIO",
    request.params.price,
    request.params.fat_ratio
  );
  if (classes) {
    response.status(200);
    response.json(classes);
  } else {
    response.status(404);
    response.json();
  }
}

// Get items by weight and fat ratio
function getWeightFatRatioItems(request, response) {
  // Retrieve items from the database based on the provided weight and fat ratio
  classes = dataAcces.selectQuery2Params(
    "ITEM_WEIGHT_FAT_RATIO",
    request.params.weight,
    request.params.fat_ratio
  );
  if (classes) {
    response.status(200);
    response.json(classes);
  } else {
    response.status(404);
    response.json();
  }
}

// Get items by price, weight, and fat ratio
function getPriceWeightFatRatioItems(request, response) {
  // Retrieve items from the database based on the provided price, weight, and fat ratio
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

  classes = dataAcces.selectQuery6Params(
    "ITEM_PRICE_WEIGHT_FAT_RATIO",
    ...param
  );
  if (classes) {
    response.status(200);
    response.json(classes);
  } else {
    response.status(404);
    response.json();
  }
}

// Get items by weight
function getWeightItems(request, response) {
  // Retrieve items from the database based on the provided weight
  classes = dataAcces.selectQuery1Param("ITEM_WEIGHT", request.params.weight);
  if (classes) {
    response.status(200);
    response.json(classes);
  } else {
    response.status(404);
    response.json();
  }
}

// Get items by fat ratio
function getFatRatioItems(request, response) {
  // Retrieve items from the database based on the provided fat ratio
  classes = dataAcces.selectQuery1Param(
    "ITEM_FAT_RATIO",
    request.params.fat_ratio
  );
  if (classes) {
    response.status(200);
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
export default itemController;
