const port=4000;
const mongoose = require('mongoose');
const express= require('express');

const cors=require('cors');
const jwt=require('jsonwebtoken');
const fs = require('fs');
const multer=require('multer');
const path = require('path');
const {type}=require('os');
const {nanoid} = require('nanoid');
const app=express();
app.use(express.json());


app.use(cors());

mongoose.connect("mongodb+srv://SartajParveen:Ab1%40learner@cluster0.vnldehb.mongodb.net/shortify")
.then(()=>{
    console.log("mongo is connected");
})
.catch((err)=>{
    console.log("An error occurred")
})

const urls=mongoose.model('urls',{


    originalUrl:{
        type:String,
        required:true
    },
    shortUrl:{
        type:String,
        required:true,
        unique:true
    }


})


//API to generate short URL

app.post('/shorten',async(req,res)=>{
    const {originalUrl} =req.body;
    
    const shortCode=nanoid(7);
    
    const newUrl = new urls({
        originalUrl,
        shortUrl:shortCode
    });

try{
    await newUrl.save();
    res.status(201).json({shortUrl:`http://localhost:4000/${shortCode}`})
}
   catch(err){
        console.error(err);
        res.status(500).json({error:'Server Error'});
    }


});

app.get('/:shortUrl',async(req,res)=>{
    const {shortUrl}= req.params;

    try{
        const urlDoc = await urls.findOne({shortUrl});
        if(urlDoc){
            return res.redirect(urlDoc.originalUrl);
        }
        else{
            return res.status(404).json({error:'Short Url not found'})
        }
    }
    catch(err){
        console.error(err);
        return res.status(500).json({error:'Server Error'});
    }
})


app.listen(port, ()=>{
    console.log("Server running on port " +port);
})





