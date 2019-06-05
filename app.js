require('dotenv').config();

//Mongoose
const mongoose= require('mongoose');
mongoose.connect(process.env.DB_URI,{
    auth:{
        user: process.env.DB_USER,
        password: process.env.DB_PASS
    },
    useNewUrlParser: true
}).catch(err => console.error(`Error:${err}`));
//End Mongoose

const express= require('express');

const app = express();

//routes
const routes = require('./routes');
app.use ('/', routes);

//body parser
const bodyParser=require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));
//end body parser

// view configuration
const path=require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use('/css', express.static('assets/stylesheets'));
app.use('/js', express.static('assets/javascripts'));
app.use('/images', express.static('assets/images'));



const port=process.env.PORT || 4000;
app.listen(port, ()=> console.log(`Listening on port ${port}`));