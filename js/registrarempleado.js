const registrarEmpleado = () => {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let cargo = document.getElementById("cargo").value;
    let placa = document.getElementById("placa").value;
    let fecha = document.getElementById("fecha").value;
    let telefono = document.getElementById("telefono").value;

    if (nombre === "" || apellido === "" || cargo === "" || placa === "" || fecha === "" || telefono === "") {
        Swal.fire({
            icon: "error",
            title: "ERROR",
            text: "Todos los campos son obligatorios"
        });
    } else {
        let tabla = document.getElementById("tablaEmpleados").getElementsByTagName("tbody")[0];
        let nuevaFila = document.createElement("tr");

        nuevaFila.innerHTML = 
            "<td>" + nombre + "</td>" +
            "<td>" + apellido + "</td>" +
            "<td>" + cargo + "</td>" +
            "<td>" + placa + "</td>" +
            "<td>" + fecha + "</td>" +
            "<td>" + telefono + "</td>";

        tabla.appendChild(nuevaFila);

        document.getElementById("nombre").value = "";
        document.getElementById("apellido").value = "";
        document.getElementById("cargo").value = "";
        document.getElementById("placa").value = "";
        document.getElementById("fecha").value = "";
        document.getElementById("telefono").value = "";
    }
}

const registrarUsuario = () => {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let usuario = document.getElementById("usuario").value;
    let contraseña = document.getElementById("contraseña").value;
    let telefono = document.getElementById("telefono").value;

    if (nombre === "" || apellido === "" || usuario === "" || contraseña === "" || telefono === "") {
        Swal.fire({
            icon: "error",
            title: "ERROR",
            text: "Todos los campos son obligatorios"
        });
    } else {
        let tabla = document.getElementById("tablaUsuarios").getElementsByTagName("tbody")[0];
        let nuevaFila = document.createElement("tr");

        nuevaFila.innerHTML = 
            "<td>" + nombre + "</td>" +
            "<td>" + apellido + "</td>" +
            "<td>" + usuario + "</td>" +
            "<td>" + telefono + "</td>";

        tabla.appendChild(nuevaFila);

        document.getElementById("nombre").value = "";
        document.getElementById("apellido").value = "";
        document.getElementById("usuario").value = "";
        document.getElementById("contraseña").value = "";
        document.getElementById("telefono").value = "";
    }
}