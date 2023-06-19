document.querySelector("#scrollTOP").addEventListener("click", () => {
  window.scrollTo(0, 0);
});

const element = document.getElementById("scrollTOP");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 0) {
    element.classList.add("scrolled");
    element.classList.remove("unscrolled");
  } else {
    element.classList.remove("scrolled");
    element.classList.add("unscrolled");
  }
});

async function fetchItem(value) {
  try {
    if (value == undefined || value == "") {
      let response = await fetch(`http://localhost:3000/api/classes/`);
      let jsonData = await response.json();
      data = jsonData;
    } else {
      let response = await fetch(`http://localhost:3000/api/classes/${value}`);
      let jsonData = await response.json();
      data = jsonData;
    }
  } catch (error) {
    console.error(error);
  }
}

async function printData() {
  //check if data is an array
  if (Array.isArray(data.items)) {
    for (let i = 0; i < data.items.length; i++) {
      let elementToPrintToThingus = new shop_item();
      let main = document.querySelector("main");
      main.appendChild(elementToPrintToThingus);
    }
  } else if (data.items == "") {
    console.log("Nothing to print");
  } else {
    let elementToPrintToThingus = new shop_item();
    let main = document.querySelector("main");
    main.appendChild(elementToPrintToThingus);
  }
}
let v = "";
fetchItem().then(() => printData());

function onSubmitClick() {
  removeData();
  v = document.querySelector("#formrrrmm").value;
  fetchItem(v).then(() => printData());
}

function removeData() {
  let arrList = document.getElementsByTagName("shop-item");
  let arr = Array.from(arrList);
  arr.forEach((element) => {
    element.remove();
  });
}

function PriceSort() {
  let arrList = document.getElementsByTagName("shop-item");
  let arr = Array.from(arrList);
  let value = document.getElementById("Price").value;
  fetchPrice(value).then(printData);
}

async function fetchPrice(v) {
  if (v == undefined || v == "") {
    let response = await fetch(`http://localhost:3000/api/classes/`);
    let jsonData = await response.json();
    data = jsonData;
  } else {
    let response = await fetch(`http://localhost:3000/api/classes/${v}`);
    let jsonData = await response.json();
    data = jsonData;
  }
}
