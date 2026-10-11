const authorService = require('./author.service.js')

async function createAuthor(req, res, next) {
    try {
        const insertedId = await authorService.createAuthor(req.body);
        

        res.status(201).json({message:'author created successfully',"acknowledged":true,"insertedId":insertedId.id})


        
    } catch (error) {
        next(error);
    }
}

module.exports={createAuthor}