/* eslint-disable no-plusplus */
/* eslint-disable radix */

let myLibrary = [];
let storage = [];
let count = 0;

const booksTable = document.querySelector('.books-list');
const title = document.querySelector('.title');
const author = document.querySelector('.author');
const addBtn = document.querySelector('.add');

storage = JSON.parse(localStorage.getItem('books')) || [];

function addBook(book, title, author) {
  count += 1;
  book.title = title;
  book.author = author;

  const bookLabel = document.createElement('article');
  const bookText = document.createElement('h4');
  const deleteButton = document.createElement('button');

  bookLabel.classList.add('bookLabel');
  bookText.classList.add('bookText');
  deleteButton.classList.add('btn');
  deleteButton.classList.add('delete');

  booksTable.appendChild(bookLabel);
  bookLabel.appendChild(bookText);
  bookLabel.appendChild(deleteButton);

  bookText.textContent = `"${title}" by ${author}`;
  deleteButton.textContent = 'Delete';

  const l = bookLabel.style;
  l.display = 'flex';
  l.alignItems = 'center';
  l.width = '100%';

  if (count % 2 !== 0) {
    l.background = 'rgba(94, 87, 87, 0.671)';
  }

  deleteButton.style.margin = '0 5px';
  deleteButton.style.flex = '1';
  bookText.style.flex = '7';
  deleteButton.style.transform = 'translateX(0)';
  deleteButton.style.height = '45px';

  deleteButton.addEventListener('click', (event) => {
    event.target.parentNode.remove();
    book.remove();
  });
}