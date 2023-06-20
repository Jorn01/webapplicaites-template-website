import Database from "better-sqlite3";
import Queries from "./Queries.js";
import Data from "./dummyData.js";

const { createQueries, insertQueries, selectQueries, dropTables } = Queries;
const createQueriesNames = Object.keys(createQueries);
const insertQueriesNames = Object.keys(insertQueries);
const selectQueriesNames = Object.keys(selectQueries);
const dropTablesNames = Object.keys(dropTables);

const { Categorys: CategorysDummyData, Items: ItemsDummyData } = Data;

function initializeDatabase(fileName) {
  // initialize database
  dataAcces.db = new Database("Database.sqlite");
  CreateInitialData();
}
//delete all tables
function DeleteAllData() {
  dropTablesNames.forEach((queryName) => {
    const query = dropTables[queryName];
    const stmt = Query(query);
    stmt.run();
  });
}
// create tables
function CreateInitialData() {
  let dataPresent;
  try {
    console.log(dataAcces.db.prepare("SELECT COUNT(*) FROM item"));
    dataPresent = true;
  } catch (error) {
    dataPresent = false;
  }
  if (dataPresent) {
    return;
  }

  createQueriesNames.forEach((queryName) => {
    const query = createQueries[queryName];
    const stmt = Query(query);
    stmt.run();
  });

  insertQueriesNames.forEach((queryName) => {
    const query = insertQueries[queryName];
    const stmt = Query(query);
    switch (queryName) {
      case "CATEGORY":
        let categoryPresent;
        try {
          Query("SELECT COUNT(*) FROM category");
          categoryPresent = true;
        } catch (error) {
          console.error(error);
          categoryPresent = false;
        }
        if (categoryPresent) {
          break;
        } else {
          CategorysDummyData.forEach((category) => {
            stmt.run(category.name);
          });
        }
        break;
      case "ITEM":
        let itemPresent;
        try {
          Query("SELECT COUNT(*) FROM item");
          itemPresent = true;
        } catch (error) {
          console.error(error);
          itemPresent = false;
        }
        if (itemPresent) {
          break;
        } else {
          ItemsDummyData.forEach((item) => {
            stmt.run(
              item.name,
              item.price,
              item.image_src,
              item.url,
              item.category_id
            );
          });
        }
        break;
      default:
        break;
    }
  });
}

// write queries to make the tables
function Query(query) {
  return dataAcces.db.prepare(query);
}

const selectQuery = (queryName, param) => {
  console.log(queryName);
  const query = selectQueries[queryName];
  console.log(query);
  const stmt = Query(query);
  console.log(stmt);
  const result = stmt.all(param);
  console.log(result);
  return result;
};
const dataAcces = {
  initializeDatabase: initializeDatabase,
  db: null,
  selectQuery: selectQuery,
};
export default dataAcces;
