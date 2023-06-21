import Database from "better-sqlite3";
import Queries from "./Queries.js";
import Data from "./dummyData.js";

const { createQueries, insertQueries, selectQueries, dropTables } = Queries;
const createQueriesNames = Object.keys(createQueries);
const insertQueriesNames = Object.keys(insertQueries);
const selectQueriesNames = Object.keys(selectQueries);
const dropTablesNames = Object.keys(dropTables);

const {
  Categorys: CategorysDummyData,
  Items: ItemsDummyData,
  USER: UserDummyData,
  ORDER: OrderDummyData,
  ORDERITEM: OrderItemDummyData,
} = Data;

function initializeDatabase(fileName) {
  // initialize database
  dataAcces.db = new Database("./db/Database.sqlite");

  CreateInitialData();
}
//delete all tables
function DeleteAllData() {
  dropTablesNames.forEach((queryName) => {
    const query = dropTables[queryName];
    console.log(query);
    const stmt = Query(query);
    stmt.run();
  });
}

//! only returns true or false;
const checkForData = (queryName) => {
  let queryResult;
  try {
    queryResult = Query(`SELECT COUNT(*) FROM ${queryName}`).all();
  } catch (error) {
    console.error(error);
  }

  if (queryResult === undefined) {
    return false;
  }
  return queryResult[0]["COUNT(*)"] > 0 ? true : false;
};
function CreateInitialData() {
  //! create tables
  createQueriesNames.forEach((queryName) => {
    const query = createQueries[queryName];
    const stmt = Query(query);
    stmt.run();
  });

  //! insert dummy data
  // loop over the insert queries names
  // names : USER, ORDER, ORDERITEM, CATEGORY, ITEM
  insertQueriesNames.forEach((queryName) => {
    // get the query from the insertQueries object
    console.log(queryName);
    const query = insertQueries[queryName];
    // make the statement
    const stmt = Query(query);
    // switch over the queryName
    switch (queryName) {
      case "CATEGORY":
        // check for the presence of data  } else {  --> insert dummy data
        if (checkForData(queryName)) {
          break;
        } else {
          // loop over the dummy data
          // insert the dummy data
          CategorysDummyData.forEach((category) => {
            stmt.run(category.name);
          });
        }
        break;
      case "ITEM":
        if (checkForData(queryName)) {
          break;
        } else {
          ItemsDummyData.forEach((item) => {
            stmt.run(
              item.name,
              item.price,
              item.weight,
              item.fat_ratio,
              item.image_src,
              item.url,
              item.category_id
            );
          });
        }
        break;

      case "USER":
        if (checkForData(queryName)) {
          break;
        } else {
          UserDummyData.forEach((user) => {
            stmt.run(user.name, user.email, user.password);
          });
        }
        break;

      case "ORDER":
        queryName = `ORDER`;
        if (checkForData(queryName)) {
          break;
        } else {
          OrderDummyData.forEach((order) => {
            stmt.run(order.user_id);
          });
        }
        break;

      case "ORDER_ITEM":
        if (checkForData(queryName)) {
          break;
        } else {
          OrderItemDummyData.forEach((orderItem) => {
            stmt.run(orderItem.order_id, orderItem.item_id);
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

const selectQuery1Param = (queryName, param) => {
  const query = selectQueries[queryName];
  const stmt = Query(query);
  const result = stmt.all(param);
  return result;
};

const selectQuery0Params = (queryName) => {
  const query = selectQueries[queryName];
  const stmt = Query(query);
  const result = stmt.all();
  return result;
};

const selectQuery2Params = (queryName, param1, param2) => {
  const query = selectQueries[queryName];
  const stmt = Query(query);
  const result = stmt.all(param1, param2);
  return result;
};

const selectQuery6Params = (
  queryName,
  price_LowerBound,
  price_UpperBound,
  weight_LowerBound,
  weight_UpperBound,
  fat_ratio_LowerBound,
  fat_ratio_UpperBound
) => {
  const query = selectQueries[queryName];
  const stmt = Query(query);
  const result = stmt.all(
    price_LowerBound,
    price_UpperBound,
    weight_LowerBound,
    weight_UpperBound,
    fat_ratio_LowerBound,
    fat_ratio_UpperBound
  );
  return result;
};

const dataAcces = {
  initializeDatabase: initializeDatabase,
  db: null,
  selectQuery0Params: selectQuery0Params,
  selectQuery1Param: selectQuery1Param,
  selectQuery2Params: selectQuery2Params,
  selectQuery6Params: selectQuery6Params,
};

export default dataAcces;
