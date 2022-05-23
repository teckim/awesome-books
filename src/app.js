const bookCollection = [
  {
    title: 'The Sulivan',
    author: 'Mario Puzo',
  },
  {
    title: 'The Poison Arrow Tree',
    author: 'Shel Arensen',
  },
];

function addBook(book) {
  bookCollection.push(book);
}

function removeBook(index) {
  bookCollection.splice(index, 1);
}

function displayBooks(books) {
  const booksContainer = document.querySelector('#book-collection');

  const booksHtml = books.map(
    ({ title, author }) => `
            <div>
                <h2>${title}</h2>
                <p>${author}</p>
                <button>Remove</button>
                <hr />
            <div>
        `,
  );

  booksContainer.innerHTML = booksHtml.join('');
}

window.onload = () => displayBooks(bookCollection);
