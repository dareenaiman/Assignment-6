const bookRepository = require('./book.repository.js')
const {ObjectId}=require('mongodb')

async function createBook(bookData) {

    bookData.title=bookData.title.trim()
    bookData.createdAt=new Date()
    bookData.updatedAt=new Date()
    bookData.bookId=new ObjectId(bookData.bookId)

    const insertedBook=await bookRepository.createBook(bookData)

    if(!insertedBook) throw new Error('fail to create book')

    return insertedBook
}

async function createBookIndex() {
    return await bookRepository.createBookIndex()
}
async function AddBook(bookData) {
    return await bookRepository.AddBook(bookData)
}
async function AddBooks(books) {
    return await bookRepository.AddBooks(books)
}

async function updateBookTitle(title){
    return await bookRepository.updateBookTitle(title,2022)
}

async function findBookByTitle(title){
    return await bookRepository.findBookByTitle(title)
}

async function findBooksByYear(fromYear,toYear){
    return await bookRepository.findBooksByYear(fromYear,toYear)
}

async function findBooksByGenre(genreName) {
    return await bookRepository.findBooksByGenre(genreName)
}

async function getBooksSkipLimit() {
    return await bookRepository.getBooksSkipLimit()
}

async function findBooksByIntYear() {
    return await bookRepository.findBooksByIntYear()
}

async function findBooksExcludeGenres() {
    return await bookRepository.findBooksExcludeGenres(["Horror","Science Fiction"])
}

async function deleteBooksByYear(year) {
    return await bookRepository.deleteBooksByYear(year)
}

async function sortBooksByYear() {
    return await bookRepository.sortBooksByYear(2000)
}

async function getBooksByYearAfter() {
    return await bookRepository.getBooksByYearAfter()
}

async function findBooksTitleGenres() {
    return await bookRepository.findBooksTitleGenres()
}

async function booksWithLogs() {
    return await bookRepository.booksWithLogs()
}

module.exports={createBook,createBookIndex,AddBook,AddBooks,updateBookTitle,findBookByTitle,findBooksByYear,findBooksByGenre,getBooksSkipLimit,findBooksByIntYear,findBooksExcludeGenres,deleteBooksByYear,sortBooksByYear,getBooksByYearAfter,findBooksTitleGenres,booksWithLogs}