/* eslint-disable no-plusplus */
/* eslint-disable radix */

const booksList = document.querySelector('.books-list');
const bookUniqueId = 'bookStorage';

function renderBook(book) {
  const bookItem = document.createElement('div');
  bookItem.id = book.id;
  bookItem.className = 'bookItem';
  bookItem.innerHTML = `
    <h2>${book.title}</h2>
    <p>${book.author}</p>
    <button class="btn" type="button" name="button" value="remove">Remove</button>
  `;

  return bookItem;
}

function remove(e) {
  if (e.target.classList.contains('btn')) {
    const bookItem = e.target.parentElement;
    bookItem.style.display = 'none';
    console.log(bookItem);

    const books = JSON.parse(localStorage.getItem(bookUniqueId));
    const reducedBooks = books.filter((book) => book.id !== parseInt(bookItem.id));
    localStorage.setItem(bookUniqueId, JSON.stringify(reducedBooks));
  }
}

function add(event) {
  event.preventDefault();

  let idCounter = parseInt(localStorage.getItem('idCounter')) || 0;
  const newBook = {
    id: ++idCounter,
    title: this.elements.title.value,
    author: this.elements.author.value,
  };
  booksList.appendChild(renderBook(newBook));

  let books = localStorage.getItem(bookUniqueId);
  if (books === null) books = [];
  else books = JSON.parse(books);

  books.push(newBook);
  localStorage.setItem(bookUniqueId, JSON.stringify(books));
  localStorage.setItem('idCounter', idCounter);
}

document.forms[0].addEventListener('submit', add);
document.body.addEventListener('click', remove);

window.onload = () => {
  const books = JSON.parse(localStorage.getItem(bookUniqueId));

  if (books && books.length) {
    books.forEach((book) => {
      booksList.appendChild(renderBook(book));
    });
  }
};
