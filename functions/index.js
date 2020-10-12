const functions = require('firebase-functions');
const express = require("express")
const cors = require("cors")
const stripe = require("stripe")("sk_test_51HZ91rD7gu8ZlEDEswlTvK1ld0MiZhDo9mjgepP54OxnCLFiBwbpIsvj81vwbq2O79VyrL47wWW8F8vatIqPFAi200cZj3HO5k")

//api

//app config

const app = express();

//middleware
app.use(cors({origin:true}))
app.use(express.json())


//apiroutes

app.get('/', (request,response)=>response.status(200).send("Hello world"));

app.post('/payments/create', async (request,response)=>{
    const total =request.query.total;

    console.log("payment recieved " , total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount : total,
        currency : "INR"
    })
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})


exports.api = functions.https.onRequest(app)

//http://localhost:5001/aapnidhukaan/us-central1/api