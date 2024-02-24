const RENDER_BOOK_EVENT = "render-books";
document.addEventListener(RENDER_BOOK_EVENT, function () {
  const read = document.querySelector("#read-section");
  const unread = document.querySelector("#unread-section");

  read.innerHTML = "";
  unread.innerHTML = "";

  for (const book of books) {
    const component = cardComponent(book);
    book.isComplete ? read.append(component) : unread.append(component);
  }
});
function addBook() {
  const title = document.querySelector("#title").value;
  const year = Number(document.querySelector("#year").value);
  const author = document.querySelector("#author").value;
  const isComplete = document.querySelector("#isComplete").checked;


  books.push({
    id: new Date().valueOf(),
    title: title,
    year: year,
    author: author,
    isComplete: isComplete,
  });
  storageParse();
  document.dispatchEvent(new Event(RENDER_BOOK_EVENT));
}

function deleteBook(id) {
  const target = books.find((book) => book.id === id);
  const title = document.querySelector("#delete-item-title");
  const deleteModal = document.querySelector("#delete-modal");
  const yesDeleteBtn = document.querySelector("#yes-delete-button");
  const cancelDeleteBtn = document.querySelector("#cancel-delete-button");

  title.innerHTML = `Are you sure to delete ${target.title}?`;

  deleteModal.classList.remove("d-none");
  deleteModal.classList.add("d-flex");

  yesDeleteBtn.addEventListener("click", function () {
    for (let arrayPosition = 0; arrayPosition < books.length; arrayPosition++) {
      if (books[arrayPosition].id === id) {
        books.splice(arrayPosition, 1);
        break;
      }
    }
    document.dispatchEvent(new Event(RENDER_BOOK_EVENT));
    storageParse();
    deleteModal.classList.remove("d-flex");
    deleteModal.classList.add("d-none");
  });
  cancelDeleteBtn.addEventListener("click", function () {
    deleteModal.classList.remove("d-flex");
    deleteModal.classList.add("d-none");
  });
}
function markRead(id) {
  const target = books.find((book) => book.id === id);
  target.isComplete = true;
  storageParse();
  document.dispatchEvent(new Event(RENDER_BOOK_EVENT));
}
function markUnread(id) {
  const target = books.find((book) => book.id === id);
  target.isComplete = false;
  storageParse();
  document.dispatchEvent(new Event(RENDER_BOOK_EVENT));
}
document
  .querySelector("#search-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const query = document.querySelector("#search").value.toLowerCase();
    const search = document.querySelector("#search-section");
    search.innerHTML = "";
    let searchResults = []

    if (query === "") search.innerHTML = "Type anything...";
    else {
      for (const book of books) {
        if (
          book.title.toLowerCase().includes(query) ||
          String(book.year).toLowerCase().includes(query) ||
          book.author.toLowerCase().includes(query)
        ) {
          searchResults.push(book)
        }
      }
    }

    if (searchResults.length === 0) search.innerHTML = "Book not found"
    else {
      for (const searchResult of searchResults) {
        const component  = cardComponent(searchResult)
        search.append(component)
      }
    }
  });
