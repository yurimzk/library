import Library from './Library.js';
import './modal.js';

const myLibrary = new Library();

function saveLibrary() {
  localStorage.setItem('library', JSON.stringify(myLibrary.books));
}

function loadLibrary() {
  const libraryData = localStorage.getItem('library');
  if (libraryData) {
    const books = JSON.parse(libraryData);
    books.forEach((book) => {
      myLibrary.addBookToLibrary(book.title, book.author, book.year, book.pages);
    })
  }
}

function displayBooks() {
  const tableBody = document.querySelector('#library-table tbody');
  tableBody.innerHTML = '';

  myLibrary.books.forEach((book, index) => {
    const row = document.createElement('tr');

    const titleCell = document.createElement('td');
    titleCell.textContent = book.title;
    row.appendChild(titleCell);

    const authorCell = document.createElement('td');
    authorCell.textContent = book.author;
    row.appendChild(authorCell);

    const yearCell = document.createElement('td');
    yearCell.textContent = book.year;
    row.appendChild(yearCell);

    const pagesCell = document.createElement('td');
    pagesCell.textContent = book.pages;
    row.appendChild(pagesCell);

    const readCell = document.createElement('td');
    const readButton = document.createElement('button');
    readButton.textContext = book.read ? 'Read' : 'TBR';
    readButton.classList.add('toggle-read');
    readButton.addEventListener('click', () => {
      book.read = !book.read;
      saveLibrary();
      displayBooks();
    });
    readCell.appendChild(readButton);
    row.appendChild(readCell);

    const removeCell = document.createElement('td');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'x';
    deleteButton.classList.add('delete-book');
    deleteButton.addEventListener('click', () => {
      if (confirm('Ar you sure you want to delete this book?')) {
        myLibrary.books.splice(index, 1);
        saveLibrary();
        displayBooks();
      }
    });
    removeCell.appendChild(deleteButton);
    row.appendChild(removeCell);

    tableBody.appendChild(row);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  loadLibrary();
  displayBooks();
});

export { myLibrary, displayBooks, saveLibrary };
