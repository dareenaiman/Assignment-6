const { Schema, model } = require("mongoose")

const authorSchema = new Schema({
    name: {type:String},
    nationality: {type:String},
},{timestamps:true
});

const Author=model('Author',authorSchema)

module.exports = Author