import Book from './Book.js';

class Library {
  constructor() {
    this.books = [];
  }

  addBookToLibrary(title, author, year, pages) {
    const book = new Book(title, author, year, pages);
    this.books.push(book);
  }

  displayBooks() {
    console.log(this.books);
  }
}

export default Library;
