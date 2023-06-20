import Database from "better-sqlite3";

const dataAcces = {
  initializeDatabase: initializeDatabase,
  db: null,
};

function initializeDatabase(fileName) {
  // initialize database
  dataAcces.db = new Database("Database.sqlite");

  CreateInitialData();
}

function CreateInitialData() {
  let dataPresent;
  try {
    const q = dataAcces.db.prepare("SELECT COUNT(*) FROM items");
    dataPresent = true;
  } catch (error) {
    dataPresent = false;
  }

  if (dataPresent) {
    return;
  }

  // create table like the json;
  dataAcces.db
    .prepare(
      `CREATE TABLE items (
        name TEXT, 
        price INTEGER, 
        imagaSRC TEXT, 
        URL TEXT)`
    )
    .run();
}

// write queries to make the tables
const User =
  "CREATE TABLE user (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT, password TEXT)";
const Order =
  "CREATE TABLE order (id INTEGER PRIMARY KEY AUTOINCREMENT, user_id INTEGER, FOREIGN KEY(user_id) REFERENCES user(id))";
const OrderItem =
  "CREATE TABLE order_item (id INTEGER PRIMARY KEY AUTOINCREMENT, order_id INTEGER, item_id INTEGER, FOREIGN KEY(order_id) REFERENCES order(id), FOREIGN KEY(item_id) REFERENCES item(id))";
const Item =
  "CREATE TABLE item (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, price INTEGER, image_src TEXT, url TEXT)";
function Query(query) {
  dataAcces.db.prepare(query);
}

export default dataAcces;
