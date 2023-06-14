require('dotenv').config()

const express = require('express');
const app = express();

const errorMiddleware = require('./middleware/error-handler');
const notfoundMiddleware = require('./middleware/not-found');
const connectDB = require('./db/connect');

app.use(express.json());

app.get('/',(req,res)=>{
    res.send('<h1>store API</h1><a href="/api/v1/products">products route</a>');
});

app.use(errorMiddleware);
app.use(notfoundMiddleware);

const port = process.env.PORT || 3000

const start = async ()=>{
    try {
        //connect DB
        await connectDB(process.env.MONGO_URI);
        app.listen(port,console.log(`Server is listen at http://localhost:${port}`));
    } catch (error) {
        console.log(error);
    }
}

start()