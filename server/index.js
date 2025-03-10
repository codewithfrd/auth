const express = require('express')
const app = express();
require('dotenv').config();
require('../server/model/db')

const cors = require('cors')
const bodyParser = require('body-parser');
const authRouter = require('./routes/authRouter')
const productRouter = require('./routes/productRouter')

app.get('/',(req,res)=>{
    res.send('home page')
})

app.use(bodyParser.json())
app.use(cors())

app.use('/auth',authRouter)
app.use('/product',productRouter)


const PORT = process.env.PORT || 8080
app.listen(PORT, ()=>{
    console.log(`server is running on ${PORT}`);
})

