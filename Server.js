const express= require('express');
const connectDB = require('./config/db')
const app = express();
const PORT = process.env.PORT || 5000;
connectDB()
app.get('/',(req,res)=>res.send('API Running'))
app.use('/api/users',require('./routes/api/users'))
app.use('/api/profile',require('./routes/api/profile'))
app.use('/api/auth',require('./routes/api/auth'))
app.use('/api/posts',require('./routes/api/posts'))
app.use(express.json({extended: false}));

app.listen(PORT,()=>console.log(`Welcome To Mihir's Server your Server is  RUNING on ${PORT}`))