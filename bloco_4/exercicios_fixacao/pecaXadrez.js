let peca = "RAINHA";

if(peca == "PEAO"){
    console.log(peca.toLocaleLowerCase() + " movimente-se em frente");
}
else if (peca == "TORRE") {
    console.log(peca.toLocaleLowerCase() + " movimente-se em linha reta na vertical ou na horizontal");
}
 else if (peca == "CAVALO"){
     console.log(peca.toLocaleLowerCase() + " movimente-se duas casas na horizontal e uma na vertical, ou duas na vertical e uma na horizontal")
 }   
 else if(peca == "BISPOS"){
    console.log(peca.toLocaleLowerCase() + " movimente-se em diagonal")
     
 }   
else if (peca == "RAINHA" || peca == "REI"){
    console.log(peca.toLocaleLowerCase() + " movimento liberado")
 
}
    
