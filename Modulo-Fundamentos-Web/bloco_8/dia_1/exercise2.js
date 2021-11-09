const numberAleatory = (aposta, funct) => {
    const number = Math.floor(Math.random() * 5 + 1);
    console.log(number)
    funct = verify(aposta, number);
    return funct
}

const verify = (number, other) => {
    if(number == other) {
        console.log('Parabéns você ganhou');
    } else {
        console.log('Tente novamante')
    }
}

numberAleatory(4,verify);