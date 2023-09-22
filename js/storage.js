const RENDER_BOOK = "render-book";
const STORAGE_KEY = "BOOKSHELF_APP";
const books = [];

const isStorageExist = () => {
  return typeof Storage !== "undefined";
};
const loadStorage = () => {
  const getBooks = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (getBooks != null) {
    for (const book of books) {
      books.push(book);
    }
  }
  document.dispatchEvent(new Event(RENDER_BOOK));
};
