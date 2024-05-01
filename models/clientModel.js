import mongoose from "mongoose";
const clientSchema = new mongoose.Schema({
name:{
    type: String,
    trim : true,
},
email:{
    type:String,
    unique:true,
},
dob:{
    type:String,
},
phone:{type:Number},
city:{type:String},
familyStatus:{type:String},
diseases:{type:String},
insuranceType:{type:String},
smoking:{type:String},
loanType:{type:String},
option:{type:String},
value:{type:Number},
photo: {
    buffer: {
        type: Buffer,
    },
    contentType: {
        type: String,
    },

}




},{timestamps:true})
export default mongoose.model('clients',clientSchema)