const express=require('express')
const items=require('./Routes/items')
const brand=require('./Routes/brand')
const supplier=require('./Routes/supplier')
const app=express();
const connectDB=require('./db/connect')
const path=require('path')
const helmet = require('helmet');
const xss = require('xss-clean');


app.use(express.json());
app.use(helmet())

app.use(xss())

require('dotenv').config()

app.use('/api/brands',brand)
app.use('/api/supplier',supplier)




const port=3002 || process.env.PORT;

const start=async ()=>{
    try {
        await connectDB(process.env.DATABASE_URL) 
        app.listen(port,()=>{
            console.log('server running on port ..... ',port) 
        }) 

    } catch (error) {
        console.log(error)
    }
}
start()