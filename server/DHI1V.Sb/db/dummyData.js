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
    image_src:
      "https://assets.epicurious.com/photos/58d2960d0008d94d75fb8600/4:3/w_1159,h_869,c_limit/Leg-of-Lamb-With-Garlic-and-Rosemary-22032017.jpg",
    url: "lambleg.html",
    category_id: 1,
  },
  {
    name: "lamb cutlet",
    price: 20,
    weight: 400,
    fat_ratio: 50,
    image_src:
      "https://media-cdn2.greatbritishchefs.com/media/b4rjmycw/img26989.jpg",
    url: "lambcutlet.html",
    category_id: 1,
  },
  {
    name: "lamb rack",
    price: 25,
    weight: 500,
    fat_ratio: 90,
    image_src:
      "https://images.immediate.co.uk/production/volatile/sites/30/2011/02/roast-rack-of-lamb-bb2419b.jpg",
    url: "organic-lamb-rack-frenched.html",
    category_id: 1,
  },
  {
    name: "lamb shoulder",
    price: 30,
    weight: 600,
    fat_ratio: 80,
    image_src:
      "https://www.thespruceeats.com/thmb/VAWdTM2Sq9-deafQp3KetIdhgu8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/traditional-lamb-roast-recipe-256302-hero-01-2d61427d8c264d9e8f2c12a771e75414.jpg",
    url: "organic-lamb-shoulder-bone-in.html",
    category_id: 1,
  },
  {
    name: "beef rib eye",
    price: 40,
    weight: 700,
    fat_ratio: 70,
    image_src:
      "https://hips.hearstapps.com/hmg-prod/images/ribeye-steak-horizontal-1675097147.jpg?crop=0.671xw:1.00xh;0.0798xw,0&resize=1200:*",
    url: "beef-rib-eye.html",
    category_id: 2,
  },
  {
    name: "beef tenderloin",
    price: 45,
    weight: 800,
    fat_ratio: 65,
    image_src:
      "https://www.seriouseats.com/thmb/OSVFIswS4c6HfYHDxMZEiJRB0rw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2014__12__20141217-tenderloin-roast-recipe-food-lab-primary-ae4180060f6740f986048902f4a6ab75.jpg",
    url: "beef-tenderloin.html",
    category_id: 2,
  },
  {
    name: "beef striploin",
    price: 35,
    weight: 600,
    fat_ratio: 75,
    image_src:
      "https://embed.widencdn.net/img/beef/uerwtoubqu/800x600px/Strip%20Loin.psd?keep=c&u=7fueml",
    url: "beef-striploin.html",
    category_id: 2,
  },
  {
    name: "beef brisket",
    price: 30,
    weight: 700,
    fat_ratio: 80,
    image_src:
      "https://hips.hearstapps.com/hmg-prod/images/delish-beef-brisket-1542063856.jpg?crop=0.8886666666666666xw:1xh;center,top&resize=1200:*",
    url: "beef-brisket.html",
    category_id: 2,
  },
  {
    name: "pork shoulder",
    price: 25,
    weight: 600,
    fat_ratio: 70,
    image_src:
      "https://themom100.com/wp-content/uploads/2018/02/fall-apart-roasted-pork-shoulder-319.jpg",
    url: "pork-shoulder.html",
    category_id: 3,
  },
  {
    name: "pork tenderloin",
    price: 30,
    weight: 500,
    fat_ratio: 60,
    image_src:
      "https://tastefullygrace.com/wp-content/uploads/2022/09/Grilled-Pork-Tenderloin-Recipe-1-scaled.jpg",
    url: "pork-tenderloin.html",
    category_id: 3,
  },
  {
    name: "pork ribs",
    price: 20,
    weight: 400,
    fat_ratio: 55,
    image_src:
      "https://www.onceuponachef.com/images/2022/06/baby-back-ribs-18.jpg",
    url: "pork-ribs.html",
    category_id: 3,
  },
  {
    name: "chicken breast",
    price: 15,
    weight: 300,
    fat_ratio: 30,
    image_src:
      "https://www.savorynothings.com/wp-content/uploads/2022/01/grilled-chicken-breast-recipe-image-sq.jpg",
    url: "chicken-breast.html",
    category_id: 4,
  },
  {
    name: "chicken thigh",
    price: 12,
    weight: 250,
    fat_ratio: 40,
    image_src:
      "https://www.eatingwell.com/thmb/RfDVd2sUtqPk-FnB-ZSLvA0ppeo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/raw-chicken-thigh-2e6801cc8a894814b59f33afdd05cc02.jpg",
    url: "chicken-thigh.html",
    category_id: 4,
  },
  {
    name: "whole chicken",
    price: 18,
    weight: 800,
    fat_ratio: 50,
    image_src:
      "https://kristineskitchenblog.com/wp-content/uploads/2021/04/crockpot-whole-chicken-1200-square-89.jpg",
    url: "whole-chicken.html",
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
