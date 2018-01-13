const express = require('express');
const app = express();
const path = require('path');

const logger = require('morgan');
app.use(logger('dev'));
app.use(express.static('public'));

app.get('/',(req, res) =>{
  res.send('Hi bruhhhh')
});
app.get('/html', (req, res) => {
  res.sendFile(path.join(__dirname,'index.html'))
});
app.listen(3000,() => {
  console.log('list on 3000')
});
