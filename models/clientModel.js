import mongoose from "mongoose";
const clientSchema = new mongoose.Schema({
Name:{
    type: String,
    trim : true,
},
email:{
    type:String,
    unique:true,
},
DOB:{
    type:String,
},
Phone:{type:String},
City:{type:String},
option:{type:String},
FamilyStatus:{type:String},
Diseases:{type:String},
Insurance_Type:{type:String},
Smoking:{type:String},
Loan_Type:{type:String},

value:{type:Number},
photo: {
    data: Buffer,
    contentType: String,
  }




},{timestamps:true})
export default mongoose.model('clients',clientSchema)