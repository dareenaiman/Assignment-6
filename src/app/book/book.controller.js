const bookService = require('./book.service.js')

async function createBook(req, res, next) {
    try {
        const insertedBook=await bookService.createBook(req.body)
        res.status(201).json({message:'book created successfully',success:true,data:insertedBook})
    } catch (error) {
        next(error)
    }
};
async function createBookIndex(req, res, next) {
    try {
        const indexTitle=await bookService.createBookIndex()
        res.status(200).json(indexTitle,{success:true})
    } catch (error) {
        next(error)
    }
};
async function AddBook(req, res, next) {
    try {
        const result=await bookService.AddBook(req.body)
        res.status(201).json({acknowledged: result.acknowledged,
            insertedId: result.insertedId,success:true})
    } catch (error) {
        next(error)
    }
}
async function AddBooks(req, res, next) {
    try {
        const result=await bookService.AddBooks(req.body)
        res.status(201).json({acknowledged: result.acknowledged,
            insertedIds: result.insertedIds,success:true})
    } catch (error) {
        next(error)
    }
}

async function updateBookTitle(req,res,next) {
    try {
        const title=req.params.title
        const newYear= await bookService.updateBookTitle(title)

        res.status(200).json({acknowledged:true.acknowledged,matchedCount:newYear.matchedCount,modifiedCount:newYear.modifiedCount})

    } catch (error) {
        next(error)
    }
}

async function findBookByTitle(req,res,next) {
    try {
        const title=req.query.title
        const book=await bookService.findBookByTitle(title)

        res.status(200).json({success:true,data:book})

    } catch (error) {
        next(error)
    }
}

async function findBooksByYear(req,res,next) {
    try {
        const fromYear=Number(req.query.fromYear)
        const toYear=Number(req.query.toYear)

        const books=await bookService.findBooksByYear(fromYear,toYear)
        res.status(200).json({data:books,success:true})
    } catch (error) {
        next(error)
    }

}

async function findBooksByGenre(req,res,next) {
    try {
        const genreName=req.query.genreName
        const books=await bookService.findBooksByGenre(genreName)
        res.status(200).json({data:books,success:true})
    } catch (error) {
        next(error)
    }
}

async function getBooksSkipLimit(req,res,next) {
    try {
        const books=await bookService.getBooksSkipLimit()
        res.status(200).json({data:books,success:true})
    } catch (error) {
        next(error)
    }
}

async function findBooksByIntYear(req,res,next) {
    try {
        const books=await bookService.findBooksByIntYear()
        res.status(200).json({data:books,success:true})
    } catch (error) {
        next(error)
    }

}

async function findBooksExcludeGenres(req,res,next) {
    try {
        const books=await bookService.findBooksExcludeGenres()
        res.status(200).json({data:books,success:true})
    } catch (error) {
        next(error)
    }
}

async function deleteBooksByYear(req,res,next) {
    try {
        const year=Number(req.query.year)
        const result=await bookService.deleteBooksByYear(year)

        res.status(200).json({acknowledged:result.acknowledged,deletedCount:result.deletedCount})
    } catch (error) {
        next(error)
    }
}

async function sortBooksByYear(req,res,next) {
    try {
        const books=await bookService.sortBooksByYear()
        res.status(200).json({data:books,success:true})
    } catch (error) {
        next(error)
    }
}

async function getBooksByYearAfter(req,res,next) {
    try {
        const books=await bookService.getBooksByYearAfter()
        res.status(200).json({data:books,success:true})
    } catch (error) {
        next(error)
    }
}

async function findBooksTitleGenres(req,res,next) {
    try {
        const books=await bookService.findBooksTitleGenres()
        res.status(200).json({data:books,success:true})
    } catch (error) {
        next(error)
    }
}

async function booksWithLogs(req,res,next) {
    try {
        const result=await bookService.booksWithLogs()
        res.status(200).json({data:result,success:true})
    } catch (error) {
        next(error)
    }
}

module.exports={createBook,createBookIndex,AddBook,AddBooks,updateBookTitle,findBookByTitle,findBooksByYear,findBooksByGenre,getBooksSkipLimit,findBooksByIntYear,findBooksExcludeGenres,deleteBooksByYear,sortBooksByYear,getBooksByYearAfter,findBooksTitleGenres,booksWithLogs}