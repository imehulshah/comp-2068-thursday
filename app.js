const express=require('express');

const app = express();

//routes
const routes = require('./routes');
app.use ('/', routes);


// view configuration
const path=require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


const port=process.env.PORT || 4000;
app.listen(port, ()=> console.log(`Listening on port ${port}`));