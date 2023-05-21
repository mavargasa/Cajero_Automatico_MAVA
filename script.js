var cuentas = [
    { nombre: "Persona 1", saldo: 200 },
    { nombre: "Persona 2", saldo: 290 },
    { nombre: "Persona 3", saldo: 67 }
];

var cuentaSeleccionada = null;

function ingresarCuenta() {
    var seleccionCuentaSelect = document.getElementById("seleccionCuentaSelect");
    var indiceSeleccionado = seleccionCuentaSelect.selectedIndex;

    if (indiceSeleccionado === -1) {
        return;
    }

    cuentaSeleccionada = cuentas[indiceSeleccionado];
    document.getElementById("seleccionCuenta").style.display = "none";
    document.getElementById("password").style.display = "block";
}

function verificarPassword() {
    var passwordInput = document.getElementById("passwordInput").value;

    if (passwordInput === "1234") {
        document.getElementById("password").style.display = "none";
        document.getElementById("opciones").style.display = "block";
    } else {
        document.getElementById("error").textContent = "Password incorrecto. Intenta nuevamente.";
    }
}

function consultarSaldo() {
    document.getElementById("opciones").style.display = "none";
    document.getElementById("saldo").style.display = "block";
    document.getElementById("saldoMonto").textContent = "Saldo actual: $" + cuentaSeleccionada.saldo;
}

function ingresarMonto() {
    document.getElementById("opciones").style.display = "none";
    document.getElementById("ingreso").style.display = "block";
}

function confirmarIngreso() {
    var montoIngreso = parseInt(document.getElementById("ingresoMonto").value);

    if (montoIngreso <= 0) {
        document.getElementById("errorIngreso").textContent = "Ingresa un monto válido.";
        return;
    }

    var nuevoSaldo = cuentaSeleccionada.saldo + montoIngreso;

    if (nuevoSaldo > 990) {
        alert("El saldo máximo permitido es de $990. No es posible depositar esta cantidad.");
        return;
    }

    cuentaSeleccionada.saldo = nuevoSaldo;
    document.getElementById("ingresoMonto").value = "";
    document.getElementById("errorIngreso").textContent = "";

    document.getElementById("ingreso").style.display = "none";
    document.getElementById("saldo").style.display = "block";
    document.getElementById("saldoMonto").textContent = "Monto ingresado: $" + montoIngreso + "\nSaldo total: $" + cuentaSeleccionada.saldo;
}

function retirarMonto() {
    document.getElementById("opciones").style.display = "none";
    document.getElementById("retiro").style.display = "block";
}

function confirmarRetiro() {
    var montoRetiro = parseInt(document.getElementById("retiroMonto").value);

    if (montoRetiro <= 0) {
        document.getElementById("errorRetiro").textContent = "Ingresa un monto válido.";
        return;
    }

    if (montoRetiro > cuentaSeleccionada.saldo) {
        document.getElementById("errorRetiro").textContent = "Saldo insuficiente.";
        return;
    }

    var nuevoSaldo = cuentaSeleccionada.saldo - montoRetiro;

    if (nuevoSaldo < 10) {
        alert("El saldo mínimo permitido es de $10. No es posible retirar este monto.");
        return;
    }

    cuentaSeleccionada.saldo = nuevoSaldo;
    document.getElementById("retiroMonto").value = "";
    document.getElementById("errorRetiro").textContent = "";

    document.getElementById("retiro").style.display = "none";
    document.getElementById("saldo").style.display = "block";
    document.getElementById("saldoMonto").textContent = "Monto retirado: $" + montoRetiro + "\nSaldo total: $" + cuentaSeleccionada.saldo;
}

function cancelarOperacion() {
    document.getElementById("ingresoMonto").value = "";
    document.getElementById("retiroMonto").value = "";
    document.getElementById("error").textContent = "";
    document.getElementById("errorRetiro").textContent = "";
    document.getElementById("errorIngreso").textContent = "";
    document.getElementById("ingreso").style.display = "none";
    document.getElementById("retiro").style.display = "none";
    document.getElementById("opciones").style.display = "block";
}

function cancelarPassword() {
    document.getElementById("error").textContent = "";
    document.getElementById("password").style.display = "none";
    document.getElementById("seleccionCuenta").style.display = "block";
}

function cerrarSesion() {
    cuentaSeleccionada = null;
    document.getElementById("opciones").style.display = "none";
    document.getElementById("saldo").style.display = "none";
    document.getElementById("ingreso").style.display = "none";
    document.getElementById("retiro").style.display = "none";
    document.getElementById("password").style.display = "none";
    document.getElementById("seleccionCuenta").style.display = "block";
}

function volver() {
    document.getElementById("saldo").style.display = "none";
    document.getElementById("opciones").style.display = "block";
}
