import mongoose from "mongoose";
    const liveSchema = new mongoose.Schema({
    exchange:{
        type: String,
        required: true,
      
    },
    createdAt: {
        type: String,
        // required: true
    }

})
//let article = module.exports= mo.model('Article',artSchma);
const live = mongoose.model("live", liveSchema);
export default live;