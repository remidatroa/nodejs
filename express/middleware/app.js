const express = require('express')
const app = express();

app.get('/',(req, res) =>{
  res.send('Hi bruhhhh')
})

app.listen(3000,() => {
  console.log('list on 3000')
})
