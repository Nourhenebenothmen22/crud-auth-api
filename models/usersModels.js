const mongoose=require('mongoose')
const userSchema=mongoose.Schema({
    email:{
        type:String,
        required:[true,'Email is required!'],
        trim:true,
        unique:[true,'Email must be unique!'],
        minLength:[5,'Email must have 5 characters!']
    },
    password:{
        type:String,
        required:[true,'Password is required!'],
        trim:true,
        Select:false,
    },
    verified:{
        type:Boolean,
        default:false,

    },
    verificationCode:{
        type:String,
        Select:false,
    },
    verificationCodeValidation:{
        type:Number,
        Select:false,
    },
    forgotPaswordCode:{
        type:String,
        Select:false,
    },
    forgotPaswordCodeValidation:{
        type:Number,
        Select:false,
    },

},{timestamps:true})
module.exports=mongoose.model('User',userSchema)