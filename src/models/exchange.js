import mongoose from "mongoose";
    const exchangeSchema = new mongoose.Schema({
    type:{
        type: String,
        required: true,
      
    },
    status:{
        type: String,
        default:"Approved",
      
    },
    from: {
        type: String,
        required: true,

    },
    to: {
        type: String,
        required: true,

    },
    amount1: {
        type: String,
        required: true,
    }, 
    amount2: {
        type: String,
        required: true,

    },
    createdAt: {
        type: String,
        required: true
    }

})
//let article = module.exports= mo.model('Article',artSchma);
const exchange = mongoose.model("Exchange", exchangeSchema);
export default exchange;