let side_a = 60;
let side_b = 60;
let side_c = -60;
let triangle = (side_a + side_b) + side_c;


if(triangle == 180){
    triangle = true;
    console.log(triangle);
}else if(triangle != 180){
    triangle = false;
    console.log(triangle);
}
if(side_a < 0 || side_b < 0 || side_c < 0){
  console.log("Erro um dos lados do triangulo é negativo")
}
