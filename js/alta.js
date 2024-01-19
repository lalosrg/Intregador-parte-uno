document.addEventListener("DOMContentLoaded", function() {
    var altaForm = document.getElementById("altaForm");

    altaForm.addEventListener("submit", function(event) {
        event.preventDefault(); 
        var nombre = document.getElementById("nombre").value;
        var precio = document.getElementById("precio").value;
        var stock = document.getElementById("stock").value;
        var marca = document.getElementById("marca").value;
        var categoria = document.getElementById("categoria").value;
        var descripcionCorta = document.getElementById("descripcionCorta").value;
        var descripcionLarga = document.getElementById("descripcionLarga").value;
        var envioGratis = document.getElementById("envioGratis").checked;
        var edadDesde = document.getElementById("edadDesde").value;
        var edadHasta = document.getElementById("edadHasta").value;
        var foto = document.getElementById("foto").value;

        console.log("Datos del formulario:");
        console.log("Nombre:", nombre);
        console.log("Precio:", precio);
        console.log("Stock:", stock);
        console.log("Marca:", marca);
        console.log("Categoría:", categoria);
        console.log("Descripción Corta:", descripcionCorta);
        console.log("Descripción Larga:", descripcionLarga);
        console.log("Envío sin Cargo:", envioGratis);
        console.log("Edad Desde:", edadDesde);
        console.log("Edad Hasta:", edadHasta);
        console.log("Foto:", foto);
    });
});
