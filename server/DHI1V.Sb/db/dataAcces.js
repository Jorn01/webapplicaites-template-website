import Database from "better-sqlite3";
import Queries from "./Queries.js";
import Data from "./dummyData.js";

const {
  createQueries,
  insertQueries,
  selectQueries,
  dropTables,
  putQueries,
  deleteRowQueries,
} = Queries;
const createQueriesNames = Object.keys(createQueries);
const insertQueriesNames = Object.keys(insertQueries);
const selectQueriesNames = Object.keys(selectQueries);
const dropTablesNames = Object.keys(dropTables);
const putQueriesNames = Object.keys(putQueries);
const deleteRowQueriesNames = Object.keys(deleteRowQueries);

const {
  Categorys: CategorysDummyData,
  Items: ItemsDummyData,
  USER: UserDummyData,
  ORDER: OrderDummyData,
  ORDERITEM: OrderItemDummyData,
} = Data;

function initializeDatabase(fileName) {
  try {
    // initialize database
    dataAcces.db = new Database("./db/Database.sqlite");

    CreateInitialData();
  } catch (error) {
    console.error("An error occurred while initializing the database:", error);
  }
}

function insertQuery3Params(queryName, param1, param2, param3) {
  try {
    const query = insertQueries[queryName];
    const stmt = Query(query);
    stmt.run(param1, param2, param3);
  } catch (error) {
    console.error("An error occurred while executing the insert query:", error);
  }
}
function updateQuery6Params(
  queryName,
  newName,
  newEmail,
  newPassword,
  User_ID
) {
  try {
    const query = putQueries[queryName];
    const stmt = Query(query);
    const result = stmt.run(newName, newEmail, newPassword, User_ID);
  } catch (error) {
    console.error("An error occurred while executing the update query:", error);
  }
}
//delete all tables
function DeleteAllData() {
  try {
    dropTablesNames.forEach((queryName) => {
      const query = dropTables[queryName];
      console.log(query);
      const stmt = Query(query);
      stmt.run();
    });
  } catch (error) {
    console.error("An error occurred while deleting all data:", error);
  }
}

//! only returns true or false;
const checkForData = (queryName) => {
  let queryResult;
  try {
    queryResult = Query(`SELECT COUNT(*) FROM '${queryName}'`).all();
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
  try {
    return dataAcces.db.prepare(query);
  } catch (error) {
    console.log(query);
  }
}

const selectQuery1Param = (queryName, param) => {
  try {
    const query = selectQueries[queryName];
    const stmt = Query(query);
    const result = stmt.all(param);
    return result;
  } catch (error) {
    console.error("An error occurred while executing the select query:", error);
    return null;
  }
};

const selectQuery0Params = (queryName) => {
  try {
    const query = selectQueries[queryName];
    const stmt = Query(query);
    const result = stmt.all();
    return result;
  } catch (error) {
    console.error("An error occurred while executing the select query:", error);
    return null;
  }
};

const selectQuery2Params = (queryName, param1, param2) => {
  try {
    const query = selectQueries[queryName];
    const stmt = Query(query);
    const result = stmt.all(param1, param2);
    return result;
  } catch (error) {
    console.error("An error occurred while executing the select query:", error);
    return null;
  }
};

const selectQuery3Params = (queryName, param1, param2, param3) => {
  try {
    const query = selectQueries[queryName];
    const stmt = Query(query);
    const result = stmt.all(param1, param2, param3);
    return result;
  } catch (error) {
    console.error("An error occurred while executing the select query:", error);
    return null;
  }
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
  try {
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
  } catch (error) {
    console.error("An error occurred while executing the select query:", error);
  }
};

function DeleteQuery2Params(queryName, param1, param2) {
  try {
    const query = deleteRowQueries[queryName];
    const stmt = Query(query);
    stmt.run(param1, param2);
    return true;
  } catch (error) {
    console.error("An error occurred while executing the delete query:", error);
  }
}

const dataAcces = {
  initializeDatabase: initializeDatabase,
  db: null,
  selectQuery0Params: selectQuery0Params,
  selectQuery1Param: selectQuery1Param,
  selectQuery2Params: selectQuery2Params,
  selectQuery3Params: selectQuery3Params,
  selectQuery6Params: selectQuery6Params,
  updateQuery6Params: updateQuery6Params,
  insertQuery3Params: insertQuery3Params,
  DeleteQuery2Params: DeleteQuery2Params,
};

export default dataAcces;
