
alert("Bienvenido al restaurante. Esta es su cuenta");
var entrada = parseInt(prompt("Ingrese el precio de su entrada" ));
var segundo = parseInt(prompt("Ingrese el precio de su segundo" ));
var postre = parseInt(prompt("Ingrese el precio de su postre" ));
alert("Presione F12 para ver su cuenta");

console.log("El costo de la entrada es: "+entrada);
console.log("El costo del segundo es: "+segundo);
console.log("El costo del postre es: "+postre);

// SUMA
suma = entrada + segundo + postre;
console.log("El costo total es: "+suma);

//IGV
var IGV = suma * 0.18
console.log("El IGV es: " +IGV)

//total
var total= IGV + suma
console.log("El costo total con IGV: "+total);
