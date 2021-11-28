//variables globales
document.getElementById("usuario").innerHTML = "Hola, " + localStorage.username + ". Cuenta no. " + localStorage.getItem("account");
if (!pagoselected > 0){
    pagoselected = 0;
}

function iniciar(){
    localStorage.pin = "1234";

    localStorage.setItem("username", "Ash Ketchum");
    localStorage.setItem("balance", 500);
    localStorage.setItem("account", 0987654321);
}

function consultarusuario(){
    document.getElementById("saldo").innerHTML = localStorage.getItem("username") + ", su saldo es de: $" + localStorage.getItem("balance");
}

//funcion que valida el pin
function validar() {
    var pin = document.getElementById("pin").value;
    if(pin == localStorage.pin){
        document.location='index.html';
        iniciar();
    }else{
        swal("Pin incorrecto", "", "error");
        // document.location='splash.html';
    }
}

//funcion que nos lleva al splash screen
function salir(){
    document.location='splash.html';
}

function cancelar(){
    document.location='index.html';
}

//funcion para depositar efectivo
function deposito(){
    var cantidad = document.getElementById("cantidad").value;
    var balance = localStorage.getItem("balance");
    var nuevobalance = parseFloat(cantidad) + parseFloat(balance);
    localStorage.setItem("balance", nuevobalance);
    console.log(localStorage.getItem("balance"));
    document.location='index.html';
}

//funcion para borrar texto
function borrar(elemento){
    elemento.value="";
}

//funcion para retirar efectivo o pagar recibos
function retiro(cantidad){
    var balance = localStorage.getItem("balance");
    if (parseFloat(balance) -  parseFloat(cantidad) < 0){
        swal("Fondos insuficientes" , "Por favor intente de nuevo","error");
    } else{
        var nuevobalance = parseFloat(balance) - parseFloat(cantidad);
        localStorage.setItem("balance", nuevobalance);
        console.log(localStorage.getItem("balance"));
        document.location='resultadoretiro.html';

    }   
}

function pagoServicio(pago){
    var tipodeservicio;
    switch(pago){
        case 1:
            pagoselected = 1;
            tipodeservicio="Energía Eléctrica";
            break;
        case 2:
            pagoselected = 2;
            tipodeservicio="Telefonía";
            break;
        case 3:
            pagoselected = 3;
            tipodeservicio="Aguapotable";
            break;
        case 4:
            pagoselected = 4;
            tipodeservicio="Internet";
            break;
    }
    document.location="cobroservicio.html";

}

function procesarpago(){
    var monto = document.getElementById("montorecibo").value;
    retiro(monto);
    console.log(monto);
}


function inicializarpago(){
    pagoselected = 0;
}