 /*
 function comparar(a, b, nombreA, nombreB) {
  const tbody = document.querySelector("#results tbody");
  const matrixBody = document.querySelector("#matrix");

  // Crear fila para tabla de resultados
  let row = document.createElement("tr");
  let par = document.createElement("td");
  par.textContent = `${nombreA} y ${nombreB}`;
  let comparacion = document.createElement("td");
  comparacion.textContent = `${a} (${typeof a}) vs ${b} (${typeof b})`;
  let mensaje = document.createElement("td");

  if (a == b && a === b) {
   mensaje.textContent = "Ambos son iguales en == y ===";
  } else if (a == b && a !== b) {
    mensaje.textContent = "Son iguales con == pero no con === (coerción)cvdgdfgdf";
  } else {
    mensaje.textContent = "No son iguales en ninguna comparación ";
  }


  row.appendChild(par);
  row.appendChild(comparacion);
  row.appendChild(mensaje);
  tbody.appendChild(row);

  // Crear filas para la matriz de detalles
  let expresiones = [
    { expr: nombreA, valor: a, tipo: typeof a, eq: a == b, strict: a === b },
    { expr: nombreB, valor: b, tipo: typeof b, eq: b == a, strict: b === a },
  ];

  expresiones.forEach(e => {
    let r = document.createElement("tr");
    r.innerHTML = `
      <td>${e.expr}</td>
      <td>${e.valor}</td>
      <td>${e.tipo}</td>
      <td>${e.eq}</td>
      <td>${e.strict}</td>
    `;
    matrixBody.appendChild(r);
  });
}
  */

function comparar(a, b, nameA, nameB) {
  const resultsBody = document.querySelector("#results tbody");
  const row = document.createElement("tr");

  const par = document.createElement("td");
  par.textContent = `${nameA} vs ${nameB}`;

  const comparacion = document.createElement("td");
  comparacion.textContent = `${a} (${typeof a}) vs ${b} (${typeof b})`;

  const mensaje = document.createElement("td");

  if (a == b && a === b) {
    mensaje.textContent = `Las variables ${nameA} (${a}, tipo: ${typeof a}) y ${nameB} (${b}, tipo: ${typeof b}) tienen el mismo valor y el mismo tipo.`;
  } else if (a == b && a !== b) {
    mensaje.textContent = `Las variables ${nameA} (${a}, tipo: ${typeof a}) y ${nameB} (${b}, tipo: ${typeof b}) tienen el mismo valor pero distinto tipo.`;
  } else {
    mensaje.textContent = `Las variables ${nameA} (${a}, tipo: ${typeof a}) y ${nameB} (${b}, tipo: ${typeof b}) no son iguales ni en valor ni en tipo.`;
  }

  row.appendChild(par);
  row.appendChild(comparacion);
  row.appendChild(mensaje);
  resultsBody.appendChild(row);

  // --- Rellenar tabla de "Detalles de cada comparación" ---
  const matrixBody = document.querySelector("#matrix");
  const mRow = document.createElement("tr");

  mRow.innerHTML = `
    <td>${nameA} (${a}) vs ${nameB} (${b})</td>
    <td>${a} y ${b}</td>
    <td>${typeof a} / ${typeof b}</td>
    <td>${a == b}</td>
    <td>${a === b}</td>
  `;

  matrixBody.appendChild(mRow);
}

 
// Botones
document.getElementById("run").addEventListener("click", () => {
  document.querySelector("#results tbody").innerHTML = "";
  document.querySelector("#matrix").innerHTML = "";

  let numeroUn = 1, stringUn = "1";
  let numeroTreinta = 310, stringTreinta = "30";
  let numeroDiez = 10, stringDiez = "10";

  comparar(numeroUn, stringUn, "numeroUn", "stringUn");
  comparar(numeroTreinta, stringTreinta, "numeroTreinta", "stringTreinta");
  comparar(numeroDiez, stringDiez, "numeroDiez", "stringDiez");
});

document.getElementById("clear").addEventListener("click", () => {
  document.querySelector("#results tbody").innerHTML = "";
  document.querySelector("#matrix").innerHTML = "";
});
