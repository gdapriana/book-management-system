const STORAGE_KEY = "bookshelf";
const books = [];

function isStorageExist() {
  return typeof Storage !== undefined;
}

function loadStorage() {
  const getBooks = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (getBooks !== null) {
    for (const book of getBooks) books.push(book);
  }
  document.dispatchEvent(new Event(RENDER_BOOK_EVENT));
}

function storageParse() {
  if (isStorageExist()) {
    const parsedBook = JSON.stringify(books);
    localStorage.setItem(STORAGE_KEY, parsedBook);
  }
}
