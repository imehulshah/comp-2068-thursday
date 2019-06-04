const express= require('express');
const app= express();

//impor page routes
const pageRoutes=require('./routes/pages');

//register our page  routes
app.use('/', pageRoutes);

//export the changes
module.exports=app;