const express=require('express')
const items=require('./routes/items')
const app=express();
const connectDB=require('./db/connect')
require('dotenv').config()
app.use('/api/items',items)



const port=3002 || process.env.PORT;

const start=async ()=>{
    try {
        await connectDB(process.env.DATABASE_URL) 
        app.listen(port,()=>{
            console.log('server runningon port ..... ',port) 
        }) 

    } catch (error) {
        console.log(error)
    }
}
start()