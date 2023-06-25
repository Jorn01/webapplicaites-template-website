let data;

const valuesOfSliders = {
  price: [0, 100],
  weight: [0, 1000],
  fat_ratio: [0, 100],
};

// round all values in object
function roundNumbers(obj) {
  for (let key in obj) {
    if (Array.isArray(obj[key])) {
      obj[key] = obj[key].map((value) => Math.round(value));
    }
  }
}

document.querySelector("#submit").addEventListener("click", () => {
  roundNumbers(valuesOfSliders);
  const String = `price/${valuesOfSliders.price[0]}-${valuesOfSliders.price[1]}/weight/${valuesOfSliders.weight[0]}-${valuesOfSliders[1]}/fat_ratio/${valuesOfSliders.fat_ratio[0]}-${valuesOfSliders.fat_ratio[1]}`;
  printData(String);
});

async function getData(inputValue) {
  try {
    const response = await fetch(
      `http://localhost:3000/api/item/${inputValue}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log("An error occurred:", error);
    throw error;
  }
}

async function printData(inputValue) {
  removeData();
  data = await getData(inputValue);
  data.forEach((element) => {
    const shopitem = new shop_item(element);
    document.querySelector("#shop").appendChild(shopitem);
  });
}

async function removeData() {
  const shop = document.querySelector("#shop");
  while (shop.firstChild) {
    shop.removeChild(shop.firstChild);
  }
}

printData("");
const PriceSlider = document.querySelector("#price");
const PriceSliderlabel = document.querySelector("#priceLabel");
noUiSlider.create(PriceSlider, {
  start: [0, 100],
  connect: true,
  range: {
    min: 0,
    max: 100,
  },
});

PriceSlider.noUiSlider.on("update", function (values, handle) {
  PriceSliderlabel.innerHTML = values[handle];
  valuesOfSliders.price = PriceSlider.noUiSlider.get();
});

// weight slider
const weightSlider = document.querySelector("#weight");
const weightSliderLabel = document.querySelector("#weightLabel");
noUiSlider.create(weightSlider, {
  start: [0, 1000],
  connect: true,
  range: {
    min: 0,
    max: 1000,
  },
});

weightSlider.noUiSlider.on("update", function (values, handle) {
  weightSliderLabel.innerHTML = values[handle];
  valuesOfSliders.weight = weightSlider.noUiSlider.get();
});

// fat ratio slider
const fatRatioSlider = document.querySelector("#fat_ratio");
const fatRatioSliderLabel = document.querySelector("#fatRatioLabel");
noUiSlider.create(fatRatioSlider, {
  start: [0, 100],
  connect: true,
  range: {
    min: 0,
    max: 100,
  },
});

fatRatioSlider.noUiSlider.on("update", function (values, handle) {
  fatRatioSliderLabel.innerHTML = values[handle];
  valuesOfSliders.fat_ratio = fatRatioSlider.noUiSlider.get();
});

// submit stuff
