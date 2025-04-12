
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
        
    }

})