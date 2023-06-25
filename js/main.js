document.querySelector("#Login").addEventListener("click", function () {
  let username = document.querySelector("#username").value;
  let password = document.querySelector("#password").value;
  let Email = document.querySelector("#Email").value;
  fetch(`localhost:3000/api/Login/Email/${Email}/password/${password}`)
    .then((response) => response.json())
    .then((data) => {
      alert(data);
    });
});

document.querySelector("#Register").addEventListener("click", function () {
  console.log("Register");
  let username = document.querySelector("#username").value;
  let password = document.querySelector("#password").value;
  let Email = document.querySelector("#Email").value;
  fetch(
    `https://localhost:3000/api/login/Email/Jorrrrnnnn@gmail.com/UserName/sfsdfs/Password/sdfsdfaa`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
});
