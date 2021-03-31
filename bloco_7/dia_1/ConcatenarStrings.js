// const skills = ['Desenvolvimento', 'Proefiencia', 'Colaborativo', 'Persistencia', 'Ativo']
// const changeString = (string) => {
//   let phrase = []
//   let ph, res, newString = ''
//   for(let index = 0; index < string.length; index += 1) {
//      phrase = string
//        phrase.includes('x') 
//          ph = string
//           res = `Tryber ${ph} aqui`  
//   }
          
// }
//          // return res;
//         // console.log(res);
//          const func2 = (changeString) => {
//            stringConc = res;
//           newString = `${stringConc} ${skills.sort()}`
//           return newString;
           
         
//   }

  

//  // console.log(changeString('Carlos'))
//   console.log(func2('Carlos'))


const array = ["Android", "iOS", "Architecture", "Teach", "Run"]

function buildSkillsPhrase (paramOne) {
    const fun1 = paramInner => (
      `Tryber ${paramInner} aqui!

      Tudo bem?`
    )

    let result = `${fun1(paramOne)}

    Minhas cinco principais habilidades são:`

    array.forEach((skill, index) =>
    result = `${result}

    - ${skill}`)

    result = `
{result}

    #goTrybe
    `

    return result
}

console.log(buildSkillsPhrase("Carlos"))














