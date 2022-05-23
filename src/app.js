let bookCollection = [
    {
        title: "The Sulivan",
        author: "Mario Puzo"
    },
    {
        title:"The Poison Arrow Tree",
        author: "Shel Arensen"
    },
]

function addBook(book) {
    bookCollection.push(book);
}

function removeBook(index) {
   bookCollection.splice(index, 1);
}
