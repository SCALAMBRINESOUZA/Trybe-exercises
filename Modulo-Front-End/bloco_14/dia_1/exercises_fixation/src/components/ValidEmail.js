import React from 'react'

    const verifyEmail = (email) => {
      const  emailRegex  = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
      return emailRegex.test(email)
    };

    
  
      const ValidEmail = (props) => {
        const { email } = props

      //   if(verifyEmail(email) === '' ) {
      //     return (
      //       <div>
      //         <h3>Valor:</h3>
      //       </div>  
      //     )          
      //   }

      //   if(verifyEmail(email) === 'henrique.joaovictor@hotmail.com' || email === 'henriqueetec1987@gmail.com') {
      //     return (
      //       <div>
      //         <h3 style={{marginTop: '40px'}}>{`Valor: ${ email }`}</h3>
      //         <h3 style={{color: 'green'}}>Email valido</h3>
      //       </div>  
      //     )          
      //   }
        
      //   if(verifyEmail(email) !== 'henrique.joaovictor@hotmail.com' || email !== 'henriqueetec1987@gmail.com') {
      //     return (
      //       <div>
      //         <h3 style={{marginTop: '40px'}} >{`Valor: ${ email }`}</h3>
      //         <h3 style={{color: 'red'}}>Email inválido</h3>
      //       </div>  
      //     )          
      //   }
        


            
    return (
      <div>
        <h3 data-testid="id-email-user">{`Valor: ${ email }`}</h3>
        <h3>{(verifyEmail(email) ?  'Email valido' : 'Email inválido')}</h3>
      </div>
    )
        
}
      
export default ValidEmail;