// require 'swal'
// Swal is the class defined by Sweet Alert
import Swal from "sweetalert2";
import Typed from "typed.js";

// console.log("Hello from JavaScript!");

// 1. Select any elements
const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
const form = document.querySelector("#form");

const logIn = async () => {
  const url = "https://dummyjson.com/user/login";
  // by default, it sends a "GET" request, manually send a POST with headers and body
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: usernameInput.value,
      password: passwordInput.value,
    }),
  });
  const data = await response.json();
  console.log(data);
  if (response.ok) {
    Swal.fire({
      title: "Logged In!",
      text: "You clicked the button!",
      icon: "success",
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
    });
  }
};

// 2. Add event
form.addEventListener("submit", (event) => {
  event.preventDefault();
  logIn();
});

// const loadData = async () => {
//   const url = "https://api.github.com/users/Jon-Cactus";
//   // Sync
//   const response = await fetch(url);
//   const data = await response.json();
//   console.log("sync data", data);
//   console.log("after sync");

//   // Async
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log("async data", data);
//     });
//   console.log("after async");
// };

// loadData();
