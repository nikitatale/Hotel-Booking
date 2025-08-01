import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import connectDB from './config/db.js';
import { clerkMiddleware } from '@clerk/express'


connectDB();

const app = express();

app.use(cors());   //enable cross origin resource sharing 

//Middlware
app.use(express.json());
app.use(clerkMiddleware());

//api to listen to clerk webhooks
app.use('/', (req, res) => res.send('API is working'));


app.get('/', (req, res) => {
    res.send("API is working")
});

const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});