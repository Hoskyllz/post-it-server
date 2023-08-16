const mongoose = require('mongoose')


const storySchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "story title is required"]
    },
    description: {
        type: String,
        required : [true, 'story description required']
    },
    tag: {
        type: String,
        enum: ["nature", "lifestyle", "sport", "technology", "others"],
        required: [true, "story tag required"]
    },
    image: {
        type:String
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: [true, "please provoide user"]
    },
    createdAt: {
        type: Date,
        default:Date.now(),
    }
})

module.exports = mongoose.model("story", storySchema)