const express = require('express');

const cookieParser = require('cookie-parser');

const app = express();

const expressLayouts = require('express-ejs-layouts');

const db = require('./config/mongoose');

app.use(express.urlencoded());

app.use(cookieParser());

app.use(expressLayouts);

app.use('/',require('./routes/index'))


// set up the view engine
app.set('view engine','ejs');
app.set('views','./views')


app.listen(3000,(err)=>{
    if(err){
        console.log('error')
    }else{
        console.log('server is up and running in port 3000')
    }
})