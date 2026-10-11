const {Router} = require('express')
const bookController = require('./book.controller.js')

const bookRouter = Router()

bookRouter.post('/', bookController.createBook);

bookRouter.post('/index',bookController.createBookIndex)

bookRouter.post('/add-book',bookController.AddBook)

bookRouter.post('/add-books',bookController.AddBooks)

bookRouter.patch('/:title',bookController.updateBookTitle)

bookRouter.get('/title',bookController.findBookByTitle)

bookRouter.get('/year',bookController.findBooksByYear)

bookRouter.get('/genre',bookController.findBooksByGenre)

bookRouter.get('/skip-limit',bookController.getBooksSkipLimit)

bookRouter.get('/year-integer',bookController.findBooksByIntYear)

bookRouter.get('/exclude-genres',bookController.findBooksExcludeGenres)

bookRouter.delete('/before-year',bookController.deleteBooksByYear)

bookRouter.get('/aggregate1',bookController.sortBooksByYear)

bookRouter.get('/aggregate2',bookController.getBooksByYearAfter)
bookRouter.get('/aggregate3',bookController.findBooksTitleGenres)
bookRouter.get('/aggregate4',bookController.booksWithLogs)

module.exports = bookRouter;