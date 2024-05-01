import clientModel from "../models/clientModel.js";
import fs from "fs";
export const registerController = async(req,res) =>{
try {
    
       
   
    // Now, create a new client with all data, including image
    //const client = new clientModel(req.body);
    const { photo } = req.files;
    const client = new clientModel(req.fields);
    if (photo) {
        client.photo.contentType = photo.type;
        client.photo.buffer = fs.readFileSync(photo.path);
    }
    
    await client.save();
    res.status(201).send({
        success:true,
        message:"Client Data Saved",
        client
    })
} catch (error) {
    console.log(error)
    res.status(500).send({
        success:false,
        message:"Error in registration",
        error
    })
}
}



