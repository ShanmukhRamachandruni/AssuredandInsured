import express from 'express'
import colors from 'colors'
import dotenv from 'dotenv'
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoute.js'
import customerRoutes from './routes/customerRoutes.js'
import cors from 'cors';
import path from 'path';
import Customer from './models/clientModel.js';

import { fileURLToPath } from 'url';
dotenv.config();

//database
connectDB();
const __filename = fileURLToPath(import.meta.url)
const __dirname = path. dirname(__filename)
const app = express();

//middlware
app.use(cors());
app.use(express.json())
app.use(morgan('dev'))

//routes
app.use('/api/v1/auth',authRoutes)
app.use('/api/v1/customer', customerRoutes);
app.use(express.static(path.join(__dirname,'./client/build')))
app.use('*',function(req,res){
   res.sendFile(path.join(__dirname,'./client/build/index.html'))
}
)


app.get('/',(req,res)=>{
res.send("<h1>Welcome</h1>")})
app.get('/customers', async (req, res) => {
   try {
     const customers = await Customer.find({});
     res.json(customers);
   } catch (err) {
     console.error(err);
     res.status(500).send('Server Error');
   }
 });

const PORT= process.env.PORT || 8080;
 app.listen(PORT,()=>{
    console.log(`Sever Running on ${PORT}`.bgCyan.white);
 })
 
// Define API endpoint to fetch a specific customer
app.get('/customers/:customerId/', async (req, res) => {
   const customerId = req.params.customerId;
 
   try {
     const customer = await Customer.findOne({ customer_id: customerId });
     if (customer) {
       res.json(customer);
     } else {
       res.status(404).json({ error: 'Customer not found' });
     }
   } catch (err) {
     console.error('Error fetching customer:', err);
     res.status(500).json({ error: 'Internal server error' });
   }
 });

