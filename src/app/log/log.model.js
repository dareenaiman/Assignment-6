const {Schema,model} = require('mongoose')

const logSchema = new Schema({
    message: {type:String},
    book_id: {type:String},
    action: {type:String},
}, {
    capped: { size: '1MB' }, 
    autoCreate: false 
});

const Log=model("Log",logSchema)
module.exports = Log