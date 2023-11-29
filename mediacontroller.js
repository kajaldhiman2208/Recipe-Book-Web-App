const Media = require("../models/Media");

exports.getAll=async(req,res)=>{
    try{
        const media=await Media.find();

        res.json(media);
    }catch(error){
        consoloe.log(error);
        res.status(400).json(error);
    }
};


exports.create=async(req,res) => {
    const {name}=req.body;
    let videosPaths=[];

    if(Array.isArray(req.files.videos) && req.files.videos.length>0){
        for(let video of req.files.videos){
            videosPaths.push('/'+ video.path);
        }
    }

    try{
        const createdMedia=await Media.create({
            name,
            videos:videosPaths
        })
        res.json({messge:'Media created successfuly',createdMedia})
    }catch(error){
        console.log(error);
        res.status(400).json(error);
    }
};