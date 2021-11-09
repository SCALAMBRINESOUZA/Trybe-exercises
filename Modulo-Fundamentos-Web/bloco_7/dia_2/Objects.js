const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        margherita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {
  const deliveryPerson = order.order.delivery.deliveryPerson;
  const customer = order.name;
  const phone = order.phoneNumber;
  const street = order.address.street;
  const number = order.address.number;
  const apartment = order.address.apartment;
  console.log(`Olá ${deliveryPerson} entrega para ${customer} Telefone ${phone} R. ${street}, Nº: ${number}, AP: ${apartment}`)  
  
}
      
   customerInfo(order);
  
 

   const orderModifier = (order) => {
   const customer1 = order.name = 'Luiz Silva';   
   const pizza = order.order.pizza.pepperoni = 'muzzarella';
   const pizza1 = order.order.pizza.margherita = 'calabresa';
   const drink = order.order.drinks.coke.type;
   const payments = order.payment.total = '50';
  
   console.log(`Olá ${customer1} o total do seu pedido de ${pizza}, ${pizza1} e ${drink} é R$ ${payments},00`)
  
  }
  
  orderModifier(order);


