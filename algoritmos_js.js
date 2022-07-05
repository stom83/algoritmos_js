// Comprar pan en una tienda
console.log("Minimarket");
let budget = 20; // Customer budget
let bread_1 = 1; // Economic bread
let bread_2 =2; // Expensive bread
let number_bread_1 = 2; // Total pieces of bread
let number_bread_2 = 4; // Total pieces of bread
let open = true; 
let available_bread = 6; // Avalible bread items
order_1 = number_bread_1 * bread_1;
order_2 = number_bread_2 * bread_2;
global_order = order_1 + order_2;
sum_avaliable_bread = number_bread_1 + number_bread_2;

if (open == true) { // Local abierto
  console.log("Local abierto puedes ingresar a comprar");
  if ( sum_avaliable_bread <= available_bread ) { // Disponibilidad de producto
    console.log("Si existe disponibilidad de Producto");
      if (global_order >= available_bread) { //Orden de productos
        console.log("El total de su orden es : ", global_order,"$");
        console.log("Retirar su pedido en caja");
      } else {
        console.log("El total de su orden es : ", global_order, "$");
        console.log("su presupuesto es ", budget,"$ inferior a su orden");
      }
  } else { 
    console.log("Cambie su orden, no existe disponibilidad del producto")
  }
} else {
  console.log("Local cerrado, vuelve más tarde");
}


