
    var username = {
        name : "Ash Ketchum",
        pin : 1234,
        balance : (500).toPrecision(2),
        account : 0987654321
    };

document.getElementById("usuario").innerHTML = "Hola, " + username.name + ". Cuenta no. " + username.account;