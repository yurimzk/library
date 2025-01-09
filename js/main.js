import Library from './Library.js';

const myLibrary = new Library();
myLibrary.addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 1937, 310);
myLibrary.addBookToLibrary('The Fellowship of the Ring', 'J.R.R. Tolkien', 1954, 423);
myLibrary.addBookToLibrary('To Kill a Mockinbird', 'Harper Lee', 1960, 281);

function displayBooks() {
  const tableBody = document.querySelector('#library-table tbody');
  tableBody.innerHTML = '';

  myLibrary.books.forEach((book) => {
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

    tableBody.appendChild(row);
  });
}

displayBooks();
