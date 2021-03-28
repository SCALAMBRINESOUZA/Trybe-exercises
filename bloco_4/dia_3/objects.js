
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  info.recorrente = 'Sim'
  
let info2 = {
   personagem: 'Tio Patinhas',
   origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
   nota: 'O último MacPatinhas',
 };

  info2.recorrente = 'Sim'


  for (let valores in info2){
      if (info.recorrente === info2.recorrente) {
       info.recorrente = "";
       info2.recorrente = "Ambos recorrentes"
      }
        console.log(`${info[valores]} e ${info2[valores]}`)
    }
    

