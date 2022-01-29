'use strict';
const documentReady = () => {
  const contenedorElementos = document.getElementById('elementos');
  const cantidadMascotas = parseInt(prompt('¿Cuántas mascotas desea registrar?'));

  let i = 0;
  let mascotas = [];
  let listadoMascotas = '';

  while (i < cantidadMascotas) {
    alert('Datos de la mascota: ' + (i + 1));
    const id = (i + 1);
    const nombre = prompt('Ingrese el nombre');
    const raza = prompt('Ingrese la raza');
    const sexo = prompt('Ingrese el sexo');
    const fechaNacimiento = prompt('Ingrese la fecha de nacimiento');
    const familia = prompt('Ingrese el nombre de la familia');
    mascotas.push([id, nombre, raza, sexo, fechaNacimiento, familia]);
    i++;
  }

  i = 0;
  while (i < mascotas.length) {
    listadoMascotas += `
    <tr>
      <td scope="col">${mascotas[i][0]}</td>
      <td scope="col">${mascotas[i][1]}</td>
      <td scope="col">${mascotas[i][2]}</td>
      <td scope="col">${mascotas[i][3]}</td>
      <td scope="col">${mascotas[i][4]}</td>
      <td scope="col">${mascotas[i][5]}</td>
    </tr>
  `
    i++;
  }

  contenedorElementos.innerHTML = `
  <table class="table table-dark table-striped table-hover table-borderless table-sm">
    <thead>
      <tr>
        <th scope="col">Id</th>
        <th scope="col">Nombre</th>
        <th scope="col">Raza</th>
        <th scope="col">Sexo</th>
        <th scope="col">F. Nacimiento</th>
        <th scope="col">Familia</th>
      </tr>
    </thead>
    <tbody>
      ${listadoMascotas}
    </tbody>
  </table>
  `;
};

document.addEventListener('DOMContentLoaded', documentReady);