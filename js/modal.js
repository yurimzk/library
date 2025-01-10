import { myLibrary, displayBooks, saveLibrary } from './main.js';

document.addEventListener('DOMContentLoaded', () => {
  function toggleModal() {
    const modal = document.querySelector('.modal');
    if (modal.open) {
      modal.close();
    } else {
      modal.showModal();
    }
  }

  document.querySelector('.btn-modal').addEventListener('click', toggleModal);

  document.querySelector('#new-book-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const author = event.target.author.value;
    const year = event.target.year.value;
    const pages = event.target.pages.value;
    myLibrary.addBookToLibrary(title, author, year, pages);
    displayBooks();
    saveLibrary();
    toggleModal();
  });
});
