import Book from "../models/books.model.js";


//Add a book
export async function addBook(req, res) {
    try {
        let book = await Book.create(req.body);
        if (book) {
            res.status(200).json({
                success: true,
                message: 'Book created successfully',
                data: book
            })
        } else {
            res.status(200).json({
                success: true,
                message: 'Book could not be created at this time'
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}

//View a book
export async function viewBook(req, res) {
    try {
        let allbooks = await Book.findAll({where: {member_id: req.params.id}});
        if (allbooks) {
            res.json({
                success: true,
                message: 'Book records retrieved successfully',
                data: allbooks
            })
        } else {
            res.json({
                success: true,
                message: 'No Book records found.',
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}

//View all Books
export async function viewAllBooks(req, res) {
    try {
        let allbooks = await Book.findAll();
        if (allbooks) {
            res.json({
                success: true,
                message: 'Book records retrieved successfully',
                data: allmembers
            })
        } else {
            res.json({
                success: true,
                message: 'No Member records found.',
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}

//Update book record
export async function updateBook(req, res) {
    
    try {
        let allbooks = await Book.update({where: {book_id: req.params.id,
            book_title: req.body.book_title,
            book_author: req.body.book_author,
            publish_date: req.body.publish_date,
            isbn: req.body.isbn,
            no_of_copies: req.body.no_of_copies,
            genre: req.body.genre,
        }});
        if (allbooks) {
            res.status(200).json({
                success: true,
                message: 'Member updated successfully',
                data: book
            })
        } else {
            res.status(200).json({
                success: true,
                message: 'Member could not be updated at this time'
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
    
}

//Delete a book
export async function deleteBook(req, res) {
    try {
        let allbooks = await Book.delete({where: {member_id: req.params.id}});
        if (allbooks) {
            res.status(200).json({
                success: true,
                message: 'Book deleted successfully',
                data: book
            })
        } else {
            res.status(200).json({
                success: true,
                message: 'Book could not be deleted at this time'
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
    
}