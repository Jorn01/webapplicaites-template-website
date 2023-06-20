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
    image_src: "lambleg.webp",
    url: "lambleg.html",
    category_id: 1,
  },
  {
    name: "lamb cutlet",
    price: 20,
    image_src: "lambcutlet.webp",
    url: "lambcutlet.html",
    category_id: 1,
  },
  {
    name: "lamb rack",
    price: 25,
    image_src: "organic-lamb-rack-frenched.webp",
    url: "organic-lamb-rack-frenched.html",
    category_id: 1,
  },
  {
    name: "lamb shoulder",
    price: 30,
    image_src: "organic-lamb-shoulder-bone-in.webp",
    url: "organic-lamb-shoulder-bone-in.html",
    category_id: 1,
  },
  {
    name: "beef rib eye",
    price: 40,
    image_src: "rib-eye-steak.webp",
    url: "rib-eye-steak.html",
    category_id: 2,
  },
  {
    name: "beef rump",
    price: 50,
    image_src: "rump-steak.webp",
    url: "rump-steak.html",
    category_id: 2,
  },
  {
    name: "beef scotch fillet",
    price: 25,
    image_src: "scotch-fillet-steak.webp",
    url: "scotch-fillet-steak.html",
    category_id: 2,
  },
  {
    name: "beef sirloin",
    price: 30,
    image_src: "sirloin-steak.webp",
    url: "sirloin-steak.html",
    category_id: 2,
  },
  {
    name: "pork belly",
    price: 90,
    image_src: "belly-roast.webp",
    url: "belly-roast.html",
    category_id: 3,
  },
  {
    name: "pork cutlet",
    price: 100,
    image_src: "cutlet.webp",
    url: "cutlet.html",
    category_id: 3,
  },
  {
    name: "pork loin",
    price: 200,
    image_src: "loin-roast-boneless.webp",
    url: "loin-roast-boneless.html",
    category_id: 3,
  },
  {
    name: "pork shoulder",
    price: 50,
    image_src: "shoulder-roast-boneless.webp",
    url: "shoulder-roast-boneless.html",
    category_id: 3,
  },
  {
    name: "chicken breast",
    price: 12,
    image_src: "breast-fillets.webp",
    url: "breast-fillets.html",
    category_id: 4,
  },
  {
    name: "chicken drumstick",
    price: 13,
    image_src: "drumsticks.webp",
    url: "drumsticks.html",
    category_id: 4,
  },
  {
    name: "chicken thigh",
    price: 10,
    image_src: "thigh-fillets.webp",
    url: "thigh-fillets.html",
    category_id: 4,
  },
  {
    name: "chicken wing",
    price: 20,
    image_src: "wings.webp",
    url: "wings.html",
    category_id: 4,
  },
];
const classes = {
  items: [
    {
      name: "chicken",
      price: 10,
      imagaSRC: "chicken.webp",
      URL: "chicken.html",
    },
    {
      name: "pork",
      price: 15,
      imagaSRC: "pig.webp",
      URL: "pork.html",
    },
    {
      name: "beef",
      price: 20,
      imagaSRC: "cow.webp",
      URL: "beef.html",
    },
    {
      name: "lamb",
      price: 25,
      imagaSRC: "lamb.webp",
      URL: "lamb.html",
    },
    {
      name: "doner",
      price: 30,
      imagaSRC: "doner.webp",
      URL: "doner.html",
    },
    {
      name: "shoarma",
      price: 35,
      imagaSRC: "shoarma.webp",
      URL: "shoarma.html",
    },
    {
      name: "spareribs",
      price: 40,
      imagaSRC: "Spareribs.webp",
      URL: "spareRibs.html",
    },
  ],
};

const Data = { Categorys: Categorys, Items: Items };
export default Data;
