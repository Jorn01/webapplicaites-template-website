const createQueries = {
  USER: "CREATE TABLE IF NOT EXISTS user (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT, password TEXT)",
  ORDER:
    "CREATE TABLE IF NOT EXISTS `order` (id INTEGER PRIMARY KEY AUTOINCREMENT, user_id INTEGER, FOREIGN KEY(user_id) REFERENCES user(id))",
  ORDERITEM:
    "CREATE TABLE IF NOT EXISTS order_item (id INTEGER PRIMARY KEY AUTOINCREMENT, order_id INTEGER, item_id INTEGER, FOREIGN KEY(order_id) REFERENCES `order`(id), FOREIGN KEY(item_id) REFERENCES item(id))",
  CATEGORY:
    "CREATE TABLE IF NOT EXISTS category (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)",
  ITEM: "CREATE TABLE IF NOT EXISTS item (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, price INTEGER, image_src TEXT, url TEXT, category_id INTEGER, FOREIGN KEY(category_id) REFERENCES category(id))",
};

const insertQueries = {
  USER: "INSERT INTO user (name, email, password) VALUES (?, ?, ?)",
  ORDER: "INSERT INTO `order` (user_id) VALUES (?)",
  ORDERITEM: "INSERT INTO order_item (order_id, item_id) VALUES (?, ?)",
  CATEGORY: "INSERT INTO category (name) VALUES (?)",
  ITEM: "INSERT INTO item (name, price, image_src, url, category_id) VALUES (?, ?, ?, ?, ?)",
};

const selectQueries = {
  USER: "SELECT * FROM user WHERE id = ?",
  ORDER: "SELECT * FROM `order` WHERE user_id = ?",
  ORDERITEM: "SELECT * FROM order_item WHERE order_id = ?",
  CATEGORY: "SELECT * FROM category WHERE id = ?",
  ITEM: "SELECT * FROM item WHERE category_id = ?",
  ITEM_ID: "SELECT * FROM item WHERE id = ?",
  ITEM_PRICE: "SELECT * FROM item WHERE price = ?",
};

const dropTables = {
  USER: "DROP TABLE IF EXISTS user",
  ORDER: "DROP TABLE IF EXISTS `order`",
  ORDERITEM: "DROP TABLE IF EXISTS order_item",
  CATEGORY: "DROP TABLE IF EXISTS category",
  ITEM: "DROP TABLE IF EXISTS item",
};

const Queries = {
  createQueries: createQueries,
  insertQueries: insertQueries,
  selectQueries: selectQueries,
  dropTables: dropTables,
};

export default Queries;
