

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require('body-parser');
const path=require('path')
const Recipe = require('./models/recipe');

const app = express();

app.use(cors());
app.use(bodyParser.json());

const mediaRoutes = require("./routes/media");

// Use the correct path without the dot
app.use("/api/v1/media", mediaRoutes);
app.use('/public',express.static(path.join(__dirname,'public')));


// Update the connection string to use the IPv4 loopback address
const mongodbUri = "mongodb://127.0.0.1:27017/uploadproject";


mongoose
  .connect(mongodbUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connection to MongoDB successful");
  })
  .catch((err) => console.error("Error connecting to MongoDB:", err));

//loginsignup
  app.get("/login",cors(),(req,res)=>{

    })
    
    app.post("/login",async(req,res)=>{
      console.log(req.body); 
      const{email,password}=req.body;
    
      try{
          const check=await collection.findOne({email:email})
    
          if(check){
            res.json("exist")
          }
          else{
            res.json("notexists")
          }
      }catch(e){
          res.json("not exists")
      }
    
    })
    
    app.post("/signup",async(req,res)=>{
      console.log(req.body); 
      const{email,password}=req.body;
    
      const data={
        email:email,
        password:password
      }
    
      try{
          const check=await collection.findOne({email:email})
    
          if(check){
            res.json("exist")
          }
          else{
            res.json("notexists")
            await collection.insertMany([data]);
          }
      }catch(e){
          res.json("notexist")
      }
    
    })


// server.js
app.get('/search', async (req, res) => {
  const { query } = req.query;

  try {
    const recipe = await Recipe.findOne({ name: { $regex: new RegExp(query, 'i') } });

    if (recipe) {
      res.json({ recipe, videoUrl: recipe.videoUrl });
    } else {
      res.json({ message: 'Recipe not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

    

app.listen(3000, () => {
  console.log("Server starts on port 3000");
});

module.exports = app;