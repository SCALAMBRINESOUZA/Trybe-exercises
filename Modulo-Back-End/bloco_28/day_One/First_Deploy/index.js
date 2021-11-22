const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Está vivo!!!')
})

app.listen(PORT, (`Disponivel na porta ${PORT}`))