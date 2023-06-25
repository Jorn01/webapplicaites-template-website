const createQueries = {
  USER: "CREATE TABLE IF NOT EXISTS user (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT, password TEXT)",
  ORDER:
    "CREATE TABLE IF NOT EXISTS 'order' (id INTEGER PRIMARY KEY AUTOINCREMENT, user_id INTEGER, FOREIGN KEY(user_id) REFERENCES user(id))",
  CATEGORY:
    "CREATE TABLE IF NOT EXISTS category (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)",
  ITEM: "CREATE TABLE IF NOT EXISTS item (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, price INTEGER, weight INTEGER, fat_ratio INTEGER , image_src TEXT, url TEXT, category_id INTEGER, FOREIGN KEY(category_id) REFERENCES category(id))",
  ORDER_ITEM:
    "CREATE TABLE IF NOT EXISTS order_item (id INTEGER PRIMARY KEY AUTOINCREMENT, order_id INTEGER, item_id INTEGER, FOREIGN KEY(order_id) REFERENCES `order`(id), FOREIGN KEY(item_id) REFERENCES item(id))",
};

const insertQueries = {
  USER: "INSERT INTO user (name, email, password) VALUES (?, ?, ?)",
  ORDER: "INSERT INTO 'order' (user_id) VALUES (?)",
  CATEGORY: "INSERT INTO category (name) VALUES (?)",
  ITEM: "INSERT INTO item (name, price,weight,fat_ratio, image_src, url, category_id) VALUES (?, ?, ?, ?, ?, ?, ?)",
  ORDER_ITEM: "INSERT INTO order_item (order_id, item_id) VALUES (?, ?)",
};

const selectQueries = {
  USER: "SELECT * FROM user WHERE email like ? AND password like ?",
  ORDER: "SELECT * FROM 'order' WHERE user_id = ?",
  ORDER_ITEM: "SELECT * FROM order_item WHERE order_id = ?",
  CATEGORY: "SELECT * FROM category WHERE id = ?",
  ITEMS: "SELECT * FROM item",
  ITEM: "SELECT * FROM item WHERE category_id = ?",
  ITEM_ID: "SELECT * FROM item WHERE id = ?",
  ITEM_PRICE: "SELECT * FROM item WHERE price = ?",
  ITEM_WEIGHT: "SELECT * FROM item WHERE weight = ?",
  ITEM_FAT_RATIO: "SELECT * FROM item WHERE fat_ratio = ?",
  ITEM_PRICE_WEIGHT: "SELECT * FROM item WHERE price = ? AND weight = ?",
  ITEM_PRICE_FAT_RATIO: "SELECT * FROM item WHERE price = ? AND fat_ratio = ?",
  ITEM_WEIGHT_FAT_RATIO:
    "SELECT * FROM item WHERE weight = ? AND fat_ratio = ?",
  ITEM_PRICE_WEIGHT_FAT_RATIO: `SELECT * FROM item
   WHERE price > ? AND price < ? 
   AND weight > ? AND weight < ? 
   AND fat_ratio > ? AND fat_ratio < ?`,
  ITEM_NAME: "SELECT * FROM item WHERE name LIKE ?",
};

const dropTables = {
  USER: "DROP TABLE IF EXISTS user",
  ORDER: "DROP TABLE IF EXISTS 'order'",
  ORDER_ITEM: "DROP TABLE IF EXISTS order_item",
  CATEGORY: "DROP TABLE IF EXISTS category",
  ITEM: "DROP TABLE IF EXISTS item",
};

const putQueries = {
  USER: "UPDATE `user` SET name = ?, email = ?, password = ? WHERE id = ?",
};

const deleteRowQueries = {
  USER: "DELETE FROM user WHERE email = ? AND password = ?",
};

const Queries = {
  createQueries: createQueries,
  insertQueries: insertQueries,
  selectQueries: selectQueries,
  dropTables: dropTables,
  putQueries: putQueries,
  deleteRowQueries: deleteRowQueries,
};

export default Queries;
