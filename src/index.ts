let btnCalcular = document.getElementById("btnCalcular");

rotulo1.innerHTML = "Precio";
rotulo2.innerHTML = "Cantidad";
rotulo3.innerHTML = "Mes";

btnCalcular.addEventListener("click", () => {
  let precioUnitario: number = Number(datePrecio.value);
  let cantidad: number = Number(dateCantidad.value);
  let mes: string = dateMes.value;
  let montoConDescuento: number = 0;
  let precioTotal: number = precioUnitario * cantidad;

  if (mes === "octubre") {
    montoConDescuento = precioTotal * 0.85;
    console.log(
      "Por comprar en el mes de octubre Ud. tiene un 15 % de descuento."
    );
    console.log("Su monto a pagar es de $ " + montoConDescuento);
  } else {
    console.log("Ud. no tiene descuento.");
    console.log("Su monto a pagar es de $ " + precioTotal);
  }
});
