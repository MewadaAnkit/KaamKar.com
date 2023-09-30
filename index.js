const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const app = express();
const Port = process.env.PORT || 8000
const cookieParser = require('cookie-parser')
const cors = require('cors')

const corsOptions = {
  origin: ["http://localhost:5173", "https://kaamkar.netlify.app/"],
  credentials: true
};
//Middlewares
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cookieParser());
app.use(cors(corsOptions));
app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
  
    return res.status(errorStatus).send(errorMessage);
  });
  
const model = require('./Model/connection')
app.use(require('./Routes/user.route'))
app.use(require('./Routes/auth.route'))
app.use(require('./Routes/gig.route'))
app.use(require('./Routes/review.route'))
app.use(require('./Routes/order.route'))
app.use(require('./Routes/conversation.route'))
app.use(require('./Routes/message.route'))
app.listen(Port,()=>{
    console.log(`Server Started Successfully at ${Port}`)
})