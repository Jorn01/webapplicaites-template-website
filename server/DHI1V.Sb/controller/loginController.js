import dataAcces from "../db/dataAcces.js";

let classes = {};

function getLogin(request, response) {
  classes = dataAcces.selectQuery2Params(
    "USER",
    request.params.email,
    request.params.password
  );
  console.log(classes);
  if (classes && classes.length > 0) {
    response.status(200);
    response.json("Ingelogd");
  } else {
    response.json("U heeft iets verkeerd ingevuld");

    response.status(404);
  }
}

function putLogin(request, response) {
  console.log(request.params);
  classes = dataAcces.updateQuery6Params(
    "USER",
    request.params.user_name,
    request.params.email,
    request.params.password,
    request.params.User_ID
  );
  if (classes) {
    response.status(200);
    response.json(classes);
  } else {
    response.status(404);
    response.json();
  }
}

function postLogin(request, response) {
  console.log(request.body);
  const user_name = request.body.user_name;
  const email = request.body.email;
  const password = request.body.password;
  classes = dataAcces.insertQuery3Params("USER", user_name, email, password);
  if (classes) {
    response.status(200);
    response.json(classes);
  } else {
    response.status(404);
    response.json({ message: "AT LEAST SOMETHING HAPPEND" });
  }
}

function deleteLogin(request, response) {
  classes = dataAcces.DeleteQuery2Params(
    "USER",
    request.params.email,
    request.params.password
  );
  if (classes) {
    response.status(200);
    response.json(classes);
  } else {
    response.status(404);
    response.json();
  }
}

const functions = {
  getLogin: getLogin,
  putLogin: putLogin,
  postLogin: postLogin,
  deleteLogin: deleteLogin,
};

export default functions;
