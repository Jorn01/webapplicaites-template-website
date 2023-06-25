document.querySelector("#Login").addEventListener("click", function (event) {
  event.preventDefault();
  let username = document.querySelector("#username").value;
  let password = document.querySelector("#password").value;
  let Email = document.querySelector("#email").value;
  fetch(`http://localhost:3000/api/Login/Email/${Email}/password/${password}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Login request failed");
      }
      return response.json();
    })
    .then((data) => {
      document.querySelector("#status").innerHTML = data;
    })
    .catch((error) => {
      console.log("An error occurred:", error);
    });
});

document.querySelector("#Register").addEventListener("click", (event) => {
  event.preventDefault();
  console.log("Register");
  let username = document.querySelector("#username").value;
  let password = document.querySelector("#password").value;
  let Email = document.querySelector("#email").value;
  fetch(`http://localhost:3000/api/login/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user_name: username,
      email: Email,
      password: password,
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Registration request failed");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log("An error occurred:", error);
    });
});

document.querySelector("#Delete").addEventListener("click", (event) => {
  event.preventDefault();
  let password = document.querySelector("#password").value;
  let Email = document.querySelector("#email").value;
  fetch(`http://localhost:3000/api/login/Email/${Email}/password/${password}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Deletion request failed");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log("An error occurred:", error);
    });
});

document.querySelector("#Update").addEventListener("click", (event) => {
  event.preventDefault();
  let username = document.querySelector("#username").value;
  let password = document.querySelector("#password").value;
  let Email = document.querySelector("#email").value;
  let User_ID = document.querySelector("#User_ID").value;
  fetch(
    `http://localhost:3000/api/login/Email/${Email}/UserName/${username}/Password/${password}/User_ID/${User_ID}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Update request failed");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log("An error occurred:", error);
    });
});
