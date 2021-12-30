function operacion3() {
  function brunch(Amerciano, Tradicional) {
    this.Amerciano = Amerciano;
    this.Tradicional = Tradicional;
  }
  capturarAmericano = $("#americano").val();
  capturarTradicional = $("#tradicional").val();
  objetosCapturadosB = new brunch(capturarAmericano, capturarTradicional);
  console.log(objetosCapturadosB);

  capturasA = parseInt($("#americano").val(), 0);
  capturasT = parseInt($("#tradicional").val(), 0);
  $("#btncantidad7").html(function () {
    return capturasA + capturasT;
  });
  botonDinamico();
  nueva1();
}

baseDatosBrunch = [];
function nueva1() {
  baseDatosBrunch.push(objetosCapturadosB);
  console.log(baseDatosBrunch);

  let jsonString = JSON.stringify(objetosCapturadosB);
  console.log(jsonString);

  a = parseInt($("#americano").val() * 2000);
  t = parseInt($("#tradicional").val() * 1000);
  let total = a + t;
  $("#totalcombos7").html(function () {
    return `Total ${total}`;
  }) 
}

function operacion1() {
  function comida(hamburguesa, papas) {
    this.hamburguesa = hamburguesa;
    this.papas = papas;
  }
  capturarH = document.getElementById("hamburguesa").value;
  capturarP = document.getElementById("papas").value;
  objetosCapturados = new comida(capturarH, capturarP);
  console.log(objetosCapturados);

  capturas1 = parseInt(document.getElementById("hamburguesa").value, 0);
  capturas2 = parseInt(document.getElementById("papas").value, 0);
  document.getElementById("btncantidad2").innerHTML = capturas1 + capturas2;

  sessionStorage.setItem("cantidad de hamburguesas",capturas1);


  botonDinamico();
  nueva();
}

baseDatosCompleto = [];
function nueva() {
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

  botonDinamico();
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



function botonDinamico() {
  capturas1 = parseInt(document.getElementById("hamburguesa").value, 0);
  capturas2 = parseInt(document.getElementById("papas").value, 0);
  capturas3 = parseInt(document.getElementById("combo1").value, 0);
  capturas4 = parseInt(document.getElementById("combo2").value, 0);
  capturasA = parseInt(document.getElementById("americano").value, 0);
  capturasT = parseInt(document.getElementById("tradicional").value, 0);
  document.getElementById("btncantidad1").innerHTML =
    capturas1 + capturas2 + capturas3 + capturas4 + capturasT + capturasA;

  //dom del resumen de compra

  if (capturasA || capturasT > 0) {
    document.getElementById(
      "contenidocarrito"
    ).innerHTML = `Seleccionaste el paquete completo que contiene:
    ${capturasA} americano y ${capturasT} tradicional \n`;
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

  if (capturas1 || capturas2 || capturas3 || capturas4 || capturasA || capturasT > 0)
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

  fetch("https://fakestoreapi.com/users")
          .then((res) => {
              console.log(res);
              return res.json();
          })
          .then((json) => {
              console.log(json);
              json.forEach((el) => {
              const $li = document.createElement("li");
              $li.innerHTML = `${el.email}`
              $fragment.appendChild($li);
          });
              $fetch.appendChild($fragment)        
          });
      }

function btncarrito () {
 let botonCarrito =  document.getElementById("agregar1"); 
  console.log(botonCarrito);
}      

//function resultado () {
//let resultado = document.getElementById("button7").value;
//alert("hola");
//};








