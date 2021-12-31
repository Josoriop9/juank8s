function operation3() {
  function brunch(American, Traditional) {
    this.American = American;
    this.Traditional = Traditional;
  }
  grabAmerican = $("#americano").val();
  grabTraditional = $("#tradicional").val();
  grabBrunch = new brunch(grabAmerican, grabTraditional);
  console.log(grabBrunch);

  captureA = parseInt($("#americano").val(), 0);
  captureT = parseInt($("#tradicional").val(), 0);
  $("#btncantidad7").html(function () {
    return captureA + captureT;
  });
  DinamicButton();
  newFunction();
}

dbBrunch = [];
function newFunction() {
  dbBrunch.push(grabBrunch);
  console.log(dbBrunch);

  let jsonString = JSON.stringify(grabBrunch);
  console.log(jsonString);

  a = parseInt($("#americano").val() * 2000);
  t = parseInt($("#tradicional").val() * 1000);
  let total = a + t;
  $("#totalcombos7").html(function () {
    return `Total ${total}`;
  }) 
}

function operation1() {
  function lunch(burguer, chips) {
    this.burguer = burguer;
    this.chips = chips;
  }
  captureH = document.getElementById("hamburguesa").value;
  captureP = document.getElementById("papas").value;
  objetosCapturados = new lunch(captureH, captureP);
  console.log(objetosCapturados);

  capturas1 = parseInt(document.getElementById("hamburguesa").value, 0);
  capturas2 = parseInt(document.getElementById("papas").value, 0);
  document.getElementById("btncantidad2").innerHTML = capturas1 + capturas2;

  sessionStorage.setItem("cantidad de hamburguesas",capturas1);

  DinamicButton();
  newFunction2();
}

baseDatosCompleto = [];
function newFunction2() {
  baseDatosCompleto.push(objetosCapturados);
  console.log(baseDatosCompleto);

  let jsonString = JSON.stringify(objetosCapturados);
  console.log(jsonString);

  h = parseInt(document.getElementById("hamburguesa").value) * 2000;
  p = parseInt(document.getElementById("papas").value) * 1000;
  let total = h + p;
  document.getElementById("demo6").innerHTML = `Total ${total}`;
}

function operacion2() {
  function lunch(combo1, combo2) {
    this.combo1 = combo1;
    this.combo2 = combo2;
  }

  capturarCombo1 = document.getElementById("combo1").value;
  capturarCombo2 = document.getElementById("combo2").value;

  combosCapturados = new lunch(capturarCombo1, capturarCombo2);
  console.log(combosCapturados);

  capturas3 = parseInt(document.getElementById("combo1").value, 0);
  capturas4 = parseInt(document.getElementById("combo2").value, 0);
  document.getElementById("btncantidad3").innerHTML = capturas3 + capturas4;

  DinamicButton();
  combos();
}

baseDatosLunch = [];
function combos() {
  baseDatosLunch.push(combosCapturados);
  console.log(baseDatosLunch);

  let jsonString = JSON.stringify(combosCapturados);
  console.log(jsonString);

  combo1 = parseInt(document.getElementById("combo1").value) * 2000;
  combo2 = parseInt(document.getElementById("combo2").value) * 1000;
  let totalCombos = combo1 + combo2;
  document.getElementById("totalcombos").innerHTML = `Total ${totalCombos}`;
}

function DinamicButton() {
  capturas1 = parseInt(document.getElementById("hamburguesa").value, 0);
  capturas2 = parseInt(document.getElementById("papas").value, 0);
  capturas3 = parseInt(document.getElementById("combo1").value, 0);
  capturas4 = parseInt(document.getElementById("combo2").value, 0);
  captureA = parseInt(document.getElementById("americano").value, 0);
  captureT = parseInt(document.getElementById("tradicional").value, 0);
  document.getElementById("btncantidad1").innerHTML =
    capturas1 + capturas2 + capturas3 + capturas4 + captureT + captureA;

  //dom del resumen de compra

  if (captureA || captureT > 0) {
    document.getElementById(
      "contenidocarrito"
    ).innerHTML = `Seleccionaste el paquete completo que contiene:
    ${captureA} americano y ${captureT} tradicional \n`;
  }  

  if (capturas1 || capturas2 > 0) {
    document.getElementById(
      "contenidocarrito1"
    ).innerHTML = `Seleccionaste el paquete completo que contiene:
    ${capturas1}🍔 y ${capturas2}🍟 \n`;
  }  
  
  if (capturas3 || capturas4 > 0) {
    document.getElementById(
      "contenidocarrito2"
    ).innerHTML = `Seleccionaste el paquete Lunch que contiene:
    ${capturas3} combo uno y ${capturas4} combo dos`;
  }

  if (capturas1 || capturas2 || capturas3 || capturas4 || captureA || captureT > 0)
    document.getElementById(
      "titulocarrito"
    ).innerHTML = `Tu carrito se va llenando 😀`;  

  // suma total de los productos

  h = parseInt(document.getElementById("hamburguesa").value) * 2000;
  p = parseInt(document.getElementById("papas").value) * 1000;
  combo1 = parseInt(document.getElementById("combo1").value) * 2000;
  combo2 = parseInt(document.getElementById("combo2").value) * 1000;
  americano = parseInt(document.getElementById("americano").value) * 2000;
  tradicional = parseInt(document.getElementById("tradicional").value) * 1000;
  document.getElementById("totalcarrito").innerHTML = `Tu total es: ${
  h + p + combo1 + combo2 + americano + tradicional
  }`;

}

function apiAjax () { 
  const $fetch = document.getElementById("fetch");
  $fragment = document.createDocumentFragment();

  fetch("https://fakestoreapi.com/users/1")
          .then((res) => {
              console.log(res);
              return res.json();
          })
          .then((el) => {
            console.log(el);
            $fetch.innerHTML = `Nombre: ${el.name.firstname} 
            <br> Apellido: ${el.name.lastname}
            <br> Email: ${el.email}
            <br> Cel: ${el.phone}
            <br> Ciudad: ${el.address.city}`;
          })
        }      

function btncarrito () {
 let botonCarrito =  document.getElementById("agregar1"); 
  console.log(botonCarrito);
}      









