import "./style.css";

fetch ("http://localhost:3000/alumno")
  .then(response => response.json())
  .then(data => console.log(data));