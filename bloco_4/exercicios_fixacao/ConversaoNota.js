let note = 10;

if(note < 0 || note > 100){
    console.log("Nota invalida programa encerrado");
}
else if(note >= 90){
    note = 'A';
    console.log("Conceito => " + note);
}

else if(note >= 80){
    note = 'B';
    console.log("Conceito => " + note);
}

else if(note >= 70){
    note = 'C';
    console.log("Conceito => " + note);
}

else if(note >= 60){
    note = 'D';
    console.log("Conceito => " + note);
}

else if(note >= 50){
    note = 'E';
    console.log("Conceito => " + note);
}

else if(note < 50){
    note = 'F';
    console.log("Conceito => " + note);
}
