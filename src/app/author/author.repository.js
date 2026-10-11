const Author = require('./author.model.js')

async function createAuthor(authorData){
    return await Author.create(authorData) 
}






module.exports={createAuthor}