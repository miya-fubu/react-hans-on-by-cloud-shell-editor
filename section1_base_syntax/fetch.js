import fetch from "node-fetch";

fetch('http://localhost:3000')
  .then(response => response.text())
  .then(data => console.log(data));
