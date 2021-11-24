localStorage.username = "Ash Ketchum";
localStorage.pin = "1234";
localStorage.balance = 500;
localStorage.account = 0987654321;



document.getElementById("usuario").innerHTML = "Hola, " + localStorage.username + ". Cuenta no. " + localStorage.account;
document.getElementById("saldo").innerHTML = localStorage.username + ", su saldo es de: $" + localStorage.balance;

//funcion que valida el pin
function validar() {
    var pin = document.getElementById("pin").value;
    if(pin == localStorage.pin){
        document.location='index.html';
    }else{
        swal("Pin incorrecto", "", "error");
        // document.location='splash.html';
    }
}
