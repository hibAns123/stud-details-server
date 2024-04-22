require('dotenv').config();
const express = require('express');
const cors = require('cors');
const registrationRoutes = require('./routes/registrationRoutes');
require('./DB/db');
const userModel=require('./models/Registration')

const app = express();
const PORT = 5001 || process.env.PORT

app.use(cors());
app.use(express.json());



// Routes
app.use("/",registrationRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
app.post('/', (req, res) => {
    res.status(200).send(`POST REQUEST`)
})
app.get('/getUsers',(req,res)=>{
    userModel.find().then(users=>res.json(users)).catch(err=>res.json(err))
})