const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');

const path = require('path')
const app = express()
const port = 3000


app.use(express.static(path.join(__dirname, 'public')))
// Set up Handlebars as the view engine
app.engine('hbs', engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');

//handlebars
app.set('views', './views');
app.set('views', path.join(__dirname, 'resource/views'))
//morgan->log request
app.use(morgan('combined'))
//main
app.get('/', (req, res) => {
  res.render('home');
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})