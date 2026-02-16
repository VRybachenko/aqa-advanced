import Book from './Book.js';
import EBook from './EBook.js';

//===========№1===========//
//Create few books
const book1 = new Book("Harry Potter and the Philosopher's Stone", 'J. K. Rowling', 1997);
const book2 = new Book('Harry Potter and the Chamber of Secrets', 'J. K. Rowling', 1998);
//Call printInfo for Book
book1.printInfo();
book2.printInfo();

//===========№2===========//
//Create EBook
const ebook1 = new EBook('Harry Potter and the Prisoner of Azkaban', 'J. K. Rowling', 1999, 'ePub');
//Call printInfo for EBook
ebook1.printInfo();

//===========№3===========//
//Checks getter and setters
book2.year = 2009;
ebook1.fileFormat = 'ePub';
console.log('Updated year:', book2.year);
console.log('Updated format:', ebook1.fileFormat);
ebook1.printInfo();

//===========№4===========//
//Array of books (Book + EBook)
const library = [
  new Book("Harry Potter and the Philosopher's Stone", 'J. K. Rowling', 1997),
  new Book('Harry Potter and the Chamber of Secrets', 'J. K. Rowling', 1998),
  new EBook('Harry Potter and the Prisoner of Azkaban', 'J. K. Rowling', 1999, 'epub'),
  new Book('Harry Potter and the Goblet of Fire', 'J. K. Rowling', 2000),
  new EBook('Harry Potter and the Order of the Phoenix', 'J. K. Rowling', 2003, 'pdf'),
  new Book('Harry Potter and the Half-Blood Prince', 'J. K. Rowling', 2005),
  new EBook('Harry Potter and the Deathly Hallows', 'J. K. Rowling', 2007, 'mobi'),
];
const oldestBook = Book.findOldestBook(library);
console.log('\nOldest book in library:');
oldestBook.printInfo();

//===========№5===========//
const ebookFromBook = EBook.fromBook(book2, 'mobi');
console.log('\nEBook created from Book:');
ebookFromBook.printInfo();
