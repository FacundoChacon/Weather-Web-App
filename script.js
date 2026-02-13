let helados = [
    { nombre: "Banana Split", precio: 4500 },
    { nombre: "Tiramisu", precio: 6250 },
    { nombre: "Granizado", precio: 4700 },
    { nombre: "Frutilla a la Crema", precio: 6000 },
    { nombre: "Limon", precio: 5000 },
    { nombre: "Menta Granizada", precio: 5200 }
];

let precioUsuario = prompt("Ingrese el monto que usted tiene disponible para gastar en helados:");
try {
    precio = parseFloat(precioUsuario);
    if (isNaN(precioUsuario)) {
        throw new Error("El valor ingresado no es un número válido.");
    } else if (precioUsuario < 0) {
        throw new Error("El valor ingresado no puede ser negativo.");
    } else {
        for (let i = 0; i < helados.length; i++) {
            if (precioUsuario >= helados[i].precio) {
                alert(`Puedes comprar el helado ${helados[i].nombre} que cuesta $${helados[i].precio} pesos. Te sobrarían $${precioUsuario - helados[i].precio}`);
            }
        }
    }
} catch (error) {
    alert(error.message);
}