import React from 'react';

export const SecondElement1 = (textJSX) => {
  textJSX = <h1>Hello, JSX Febre du rato</h1>;
    return (
      <div 
      className="hello">{textJSX}      
      </div>
    )  
}

const SecondElement = (texto, aux) => {
  aux = texto
  
  return (
    <div> 
    {aux = <h1>{'Hello, JSX'}</h1>}     
    </div>
  )
}
export default SecondElement;
