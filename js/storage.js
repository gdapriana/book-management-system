const STORAGE_KEY = "BOOKSHELF_APP";
const DELETED_EVENT = "deleted-book";
const books = [];

const isStorageExist = () => {
  return typeof Storage !== undefined;
};
const loadStorage = () => {
  const getBooks = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (getBooks !== null) {
    for (const book of getBooks) {
      books.push(book);
    }
  }
  document.dispatchEvent(new Event(RENDER_BOOK_EVENT));
};
const saveData = () => {
  if (isStorageExist()) {
    const parsed = JSON.stringify(books);
    localStorage.setItem(STORAGE_KEY, parsed);
  }
};
const moveData = () => {
  if (isStorageExist()) {
    const parsed = JSON.stringify(books);
    localStorage.setItem(STORAGE_KEY, parsed);
  }
};
const deleteBookFromStorage = () => {
  if (isStorageExist()) {
    const parsed = JSON.stringify(books);
    localStorage.setItem(STORAGE_KEY, parsed);
  }
};
