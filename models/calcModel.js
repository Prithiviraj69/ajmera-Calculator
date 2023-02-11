const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const calcSchema = new Schema ({
equation:{type:String, required:true},
result:{type:Number, required:true}

})

const Calculator = mongoose.model("Calculator", calcSchema)

module.exports= Calculator;