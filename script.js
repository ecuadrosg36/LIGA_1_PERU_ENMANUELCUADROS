// Espera a que el documento HTML esté completamente cargado antes de ejecutar el JavaScript
document.addEventListener("DOMContentLoaded", function () {
  // Obtén una lista de todos los elementos con la clase "team"
  const teams = document.querySelectorAll(".team");

  // Divide los equipos en dos columnas
  const column1 = document.createElement("div");
  const column2 = document.createElement("div");
  column1.className = "column";
  column2.className = "column";

  for (let i = 0; i < teams.length; i++) {
    if (i % 2 === 0) {
      // Agrega equipos pares a la primera columna
      column1.appendChild(teams[i]);
    } else {
      // Agrega equipos impares a la segunda columna
      column2.appendChild(teams[i]);
    }
  }

  // Encuentra el elemento con la clase "team-container"
  const teamContainer = document.querySelector(".team-container");

  // Agrega las dos columnas al contenedor de equipos
  teamContainer.appendChild(column1);
  teamContainer.appendChild(column2);

  // Agrega eventos de clic a los botones para redirigir a los hipervínculos
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      const url = button.getAttribute("href");
      window.location.href = url; // Redirige a la URL del botón
    });
  });
});
