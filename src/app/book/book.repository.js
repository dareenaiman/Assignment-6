const Book = require('./book.model.js')
const Log=require('../log/log.model.js')

async function createBook(bookData)  {
    
    return await Book.create(bookData)
};

async function createBookIndex() {
    return await Book.collection.createIndex({title:1})
}

async function AddBook(bookData) {
    return await Book.collection.insertOne(bookData)
}

async function AddBooks(books) {
    return await Book.collection.insertMany(books)
}

async function updateBookTitle(title,newYear) {
    return await Book.collection.updateOne({title:title},{$set:{year:newYear}})
}

async function findBookByTitle(title){
    return await Book.findOne({title:title})
}
async function findBooksByYear(fromYear,toYear){
    return await Book.find({year:{$gte:fromYear,$lte:toYear}})
}

async function findBooksByGenre(genreName) {
    return await Book.find({genres:genreName})
}

async function getBooksSkipLimit() {
    return await Book.find().sort({year:-1}).skip(2).limit(3)
}

async function findBooksByIntYear() {
    return await Book.find({year:{$type:16}})
}

async function findBooksExcludeGenres(excludeGenres) {
    return await Book.find({genres:{$nin:excludeGenres}})
}

async function deleteBooksByYear(year) {
    return await Book.collection.deleteMany({year:{$lt:year}})
}

async function sortBooksByYear(year) {
    return await Book.aggregate([
        {$match:{year:{$gt:year}}},
        {$sort:{year:-1}}
    ])
}

async function getBooksByYearAfter() {
    return await Book.aggregate([
        {$match:{year:{$gt:2000}}},
        {$project:{_id:0,title:1,author:1,year:1}}
    ])
}


async function findBooksTitleGenres(){
    return await Book.aggregate([
        {$unwind:'$genres'},
        {$project:{_id:0,title:1,genres:1}}
    ])

}

async function booksWithLogs(){
    return await Log.aggregate([
    {
            $lookup: {
                from: "books", 
                let: { searchId: "$book_id" }, 
                                pipeline: [
                    { $match: { $expr: { $eq: [{ $toString: "$_id" }, "$$searchId"] } } },
                    { $project: { _id: 0, title: 1, author: 1, year: 1 } }
                ],
                as: "book_details"
            }
        },
        {
            $project: { _id: 0, action: 1, book_details: 1 }
        }
    ]);
}

module.exports = {createBook,createBookIndex,AddBook,AddBooks,updateBookTitle,findBookByTitle,findBooksByYear,findBooksByGenre,getBooksSkipLimit,findBooksByIntYear,findBooksExcludeGenres,deleteBooksByYear,sortBooksByYear,getBooksByYearAfter,findBooksTitleGenres,booksWithLogs}


