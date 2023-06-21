const Categorys = [
  {
    name: "lamb",
  },
  {
    name: "beef",
  },
  {
    name: "pork",
  },
  {
    name: "chicken",
  },
];
// get the photos from a working cdn
// get from a differnt source then woolworths
// the photo : rib-eye-steak
const Items = [
  {
    name: "lamb leg",
    price: 10,
    weight: 300,
    fat_ratio: 60,
    image_src: "lambleg.webp",
    url: "lambleg.html",
    category_id: 1,
  },
  {
    name: "lamb cutlet",
    price: 20,
    weight: 400,
    fat_ratio: 50,
    image_src: "lambcutlet.webp",
    url: "lambcutlet.html",
    category_id: 1,
  },
  {
    name: "lamb rack",
    price: 25,
    weight: 500,
    fat_ratio: 90,
    image_src: "organic-lamb-rack-frenched.webp",
    url: "organic-lamb-rack-frenched.html",
    category_id: 1,
  },
  {
    name: "lamb shoulder",
    price: 30,
    weight: 600,
    fat_ratio: 80,
    image_src: "organic-lamb-shoulder-bone-in.webp",
    url: "organic-lamb-shoulder-bone-in.html",
    category_id: 1,
  },
  {
    name: "beef rib eye",
    price: 40,
    weight: 700,
    fat_ratio: 70,
    image_src: "rib-eye-steak.webp",
    url: "rib-eye-steak.html",
    category_id: 2,
  },
  {
    name: "beef rump",
    price: 50,
    weight: 800,
    fat_ratio: 60,
    image_src: "rump-steak.webp",
    url: "rump-steak.html",
    category_id: 2,
  },
  {
    name: "beef scotch fillet",
    price: 25,
    weight: 900,
    fat_ratio: 50,
    image_src: "scotch-fillet-steak.webp",
    url: "scotch-fillet-steak.html",
    category_id: 2,
  },
  {
    name: "beef sirloin",
    price: 30,
    weight: 1000,
    fat_ratio: 40,
    image_src: "sirloin-steak.webp",
    url: "sirloin-steak.html",
    category_id: 2,
  },
  {
    name: "pork belly",
    price: 90,
    weight: 200,
    fat_ratio: 30,
    image_src: "belly-roast.webp",
    url: "belly-roast.html",
    category_id: 3,
  },
  {
    name: "pork cutlet",
    price: 100,
    weight: 300,
    fat_ratio: 20,
    image_src: "cutlet.webp",
    url: "cutlet.html",
    category_id: 3,
  },
  {
    name: "pork loin",
    price: 200,
    weight: 400,
    fat_ratio: 10,
    image_src: "loin-roast-boneless.webp",
    url: "loin-roast-boneless.html",
    category_id: 3,
  },
  {
    name: "pork shoulder",
    price: 50,
    weight: 500,
    fat_ratio: 5,
    image_src: "shoulder-roast-boneless.webp",
    url: "shoulder-roast-boneless.html",
    category_id: 3,
  },
  {
    name: "chicken breast",
    price: 12,
    weight: 100,
    fat_ratio: 100,
    image_src: "breast-fillets.webp",
    url: "breast-fillets.html",
    category_id: 4,
  },
  {
    name: "chicken drumstick",
    price: 13,
    weight: 200,
    fat_ratio: 90,
    image_src: "drumsticks.webp",
    url: "drumsticks.html",
    category_id: 4,
  },
  {
    name: "chicken thigh",
    price: 10,
    weight: 300,
    fat_ratio: 80,
    image_src: "thigh-fillets.webp",
    url: "thigh-fillets.html",
    category_id: 4,
  },
  {
    name: "chicken wing",
    price: 20,
    weight: 400,
    fat_ratio: 70,
    image_src: "wings.webp",
    url: "wings.html",
    category_id: 4,
  },
];

const USER = [
  {
    name: "admin",
    password: "admin",
    email: "admin@admin.nl",
  },
  {
    name: "user",
    password: "user",
    email: "user@user.nl",
  },
];

const ORDER = [
  {
    user_id: 1,
    date: "2021-01-01",
    total_price: 100,
  },
  {
    user_id: 2,
    date: "2021-01-02",
    total_price: 200,
  },
];

const ORDERITEM = [
  {
    order_id: 1,
    item_id: 1,
  },
  {
    order_id: 1,
    item_id: 2,
  },
  {
    order_id: 2,
    item_id: 3,
  },
  {
    order_id: 2,
    item_id: 4,
  },
];

const Data = {
  Categorys: Categorys,
  Items: Items,
  USER: USER,
  ORDER: ORDER,
  ORDERITEM: ORDERITEM,
};
export default Data;
