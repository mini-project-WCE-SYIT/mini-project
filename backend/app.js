require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const connectDB = require('./db/connect')
const port = process.env.PORT || 5000;
const applicantRouter = require('./routes/applicantRoutes');
const userRouter = require('./routes/userRoutes');

app.use(cors());
app.use('/static', express.static("uploads"))
app.use(express.json());
app.use('/api/v1/applicants', applicantRouter);
app.use('/api/v1/user', userRouter);

app.all('*',(req,res)=>{
    res.send("404 not found")
})
const start = async(URL) => {
    try{
        await connectDB(URL)
        app.listen(port,()=> console.log(`app is listening at port ${port}`))
    }catch(err){
        console.log(err);
    }
}


start(process.env.MONGO_URI);