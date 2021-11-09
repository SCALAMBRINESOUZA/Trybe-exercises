const fetchMyPromisse = () => {
    const promisse = new Promise((resolve, reject) => {
      const myArray = Array.from(
        { length: 10 },
        () => Math.floor(Math.random() * 50) + 1 
      );  
      
      const sum = myArray.map((number) => number * number)
        .reduce((sum, number) => sum + number);
  
          (sum < 8000 ? resolve() : reject());
  });
  
    promisse
      .then(() => console.log('Promisse resolvida'))
      .catch(() => console.log('Promisse rejeitada'))
  }
  fetchMyPromisse()