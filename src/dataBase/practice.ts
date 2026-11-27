// Task 1
// In a new file called src/practice.ts, 
// connect to your learning.db database and create a new table called books with these 
// columns: book_id as a whole number that's the unique id (filled automatically), 
// title as text, author as text, and year as a whole number.
import learning_db from "./SqliteDB.js"

learning_db.exec(`CREATE TABLE IF NOT EXISTS books (
    book_id INTEGER PRIMARY KEY,
    title TEXT,
    author TEXT,
    year INTEGER
    )`)


// Task 2
// In your practice.ts file, insert 3 books into the books table.
// Rules: give each book a title, author, and year; use ? slots for the values; and use one prepared command for all three books.
// Bonus: print the id of each new book after inserting it.

// const insert = learning_db.prepare("INSERT INTO books (title,author,year) VALUES (?,?,?)")
// const r1 = insert.run("sqlite3","myself","2022")
// console.log("book id :>> ", r1.lastInsertRowid);
// const r2 = insert.run("js","other","2026")
// console.log("book id :>> ", r2.lastInsertRowid);
// const r3 = insert.run("ts","myself","2023")
// console.log("book id :>> ", r3.lastInsertRowid);



// Task 3
// Read data from the books table in two ways:
// Get all books and print them.
// Get one book by its book_id and print it.
// Think about which method to use for each: .all() or .get(). Send your code when ready. 👍

// const getAllBooks = learning_db.prepare("SELECT * FROM books")
// console.log('getAllBooks.all() :>> ', getAllBooks.all());
// const getOneBook = learning_db.prepare("SELECT * FROM books where book_id=?")
// console.log('getOneBook.get("10") :>> ', getOneBook.get("10"));



// Task 4
// Update one book in the books table:
// Change the title of one book, chosen by its book_id.
// Print how many rows were changed, to confirm it worked.

// const updateOnebook = learning_db.prepare("UPDATE books SET author = ? WHERE book_id = ?")
// const chngeTitle = learning_db.prepare("UPDATE books SET title = ? WHERE book_id = ?")
// const run_updateOnebook = updateOnebook.run("testt",2)
// const run_chngeTitle = chngeTitle.run("python",3)
// console.log('rrun_updateOnebook :>> ', run_updateOnebook);
// console.log('run_chngeTitle :>> ',run_chngeTitle );


// Task 5 
// Delete one book from the books table:
// Delete it by its book_id.
// Print how many rows were deleted.
// Then print all books again to confirm it's gone.

// const deleteOneBook = learning_db.prepare("DELETE FROM books where book_id = ?")
// console.log('deleteOneBook.run(5) :>> ', deleteOneBook.run(5).changes);
// const getAllBooks = learning_db.prepare("SELECT * FROM books")
// console.log('getAllBooks :>> ', getAllBooks.all());


// Show all books sorted by title, A to Z.
const orderBy = learning_db.prepare("SELECT * FROM books ORDER BY title")
const getOrderBy = orderBy.all()
console.log('getOrderBy :>> ', getOrderBy);

// Show all books by one author, newest year first.
const getAuthor = learning_db.prepare("SELECT * FROM books WHERE author = ? ORDER BY year DESC ")
console.log(' :>> ', getAuthor.all("other"));

// Show only the 2 oldest books.
const oldestBook = learning_db.prepare("SELECT * FROM books ORDER BY year DESC LIMIT 2")
console.log('oldestBook.all() :>> ', oldestBook.all());

// Show all books sorted by book_id, but skip the first book.
const sortbook =  learning_db.prepare("SELECT * FROM books WHERE  book_id != ? ORDER BY book_id  ")
console.log('sortbook.all(1) :>> ', sortbook.all(1));

// Show all books published after 2024.
const showAfter2024 = learning_db.prepare("SELECT * FROM books WHERE year >= 2024")
console.log('showAfter2024.all() :>> ', showAfter2024.all());

// Show all books that were not written by "myself".
const notWritten = learning_db.prepare("SELECT * FROM books WHERE author != ?")
console.log('notWritten.all() :>> ', notWritten.all("myself"));

// Show books written by "myself" that were also published in 2025 or later.\
const publish = learning_db.prepare("SELECT * FROM books WHERE author == ? AND year >= 2025")
console.log('publish.all("myself") :>> ', publish.all("myself"));

// Show all books written by either "myself" or "other".
const book = learning_db.prepare("SELECT * FROM books WHERE author == ? OR author == ?")
console.log('book.all("","myself") :>> ', book.all("myself","other"));

// Show all books whose title contains the letter "s".
const serchBook = learning_db.prepare("SELECT * FROM books WHERE title LIKE ?")
console.log('serchBook.all("%s%") :>> ', serchBook.all("%s%"));

// Show the title and year of the 3 newest books whose title starts with "t".
const searchtitle = learning_db.prepare("SELECT title, year FROM books WHERE title LIKE ? ORDER BY year DESC LIMIT 3")
console.log('searchtitle.all("t%") :>> ', searchtitle.all("t%"));