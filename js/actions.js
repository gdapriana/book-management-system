const STORAGE_KEY = "BOOKSHELF_APP";
const DELETED_EVENT = "deleted-book";
const RENDER_BOOK_EVENT = "render-book";

document.addEventListener(RENDER_BOOK_EVENT, () => {
  const readSelf = document.getElementById("readCardWrapper");
  readSelf.innerHTML = "";
  const unreadSelf = document.getElementById("unreadCardWrapper");
  unreadSelf.innerHTML = "";

  for (const book of books) {
    const component = bookCardComponent(book);
    book.isRead ? readSelf.append(component) : unreadSelf.append(component);
  }
});

const addBook = () => {
  const title = document.getElementById("bookTitle").value;
  const year = document.getElementById("yearPublication").value;
  const author = document.getElementById("author").value;
  const isRead = document.getElementById("markRead");
  let isReadStatus;

  isRead.checked ? (isReadStatus = true) : (isReadStatus = false);

  if (title === "" || year === "" || author === "")
    alert("Field type wrong or empty!");
  else {
    books.push({
      id: new Date().valueOf(),
      title: title,
      year: year,
      author: author,
      isRead: isReadStatus,
    });
    document.dispatchEvent(new Event(RENDER_BOOK_EVENT));
    saveData();
    resetForm();
  }
};

const deleteBook = (id) => {
  console.log(id);
  const bookTarget = findBookIndex(id);
  if (bookTarget === -1) return;

  if (validationForm("Are you sure to delete this book?")) {
    books.splice(bookTarget, 1);
    document.dispatchEvent(new Event(RENDER_BOOK_EVENT));
    deleteBookFromStorage();
  }
};

const moveBookToReadSelf = (id) => {
  const bookTarget = findBookIndex(id);
  if (bookTarget === null) return;
  if (validationForm("Are you sure to move to read self this book?")) {
    bookTarget.isRead = true;
    document.dispatchEvent(new Event(RENDER_BOOK_EVENT));
  }
};

const moveBookToUnreadSelf = (id) => {
  const bookTarget = findBookIndex(id);
  if (bookTarget === null) return;
  if (validationForm("Are you sure to move to unread self this book?")) {
    bookTarget.isRead = false;
    document.dispatchEvent(new Event(RENDER_BOOK_EVENT));
  }
};

const resetForm = () => {
  document.getElementById("bookTitle").value = "";
  document.getElementById("yearPublication").value = "";
  document.getElementById("author").value = "";
  document.getElementById("markRead").checked = false;
};

const findBookIndex = (id) => {
  for (const book of books) {
    if (book.id === id) {
      return book;
    }
  }
  return null;
};

const validationForm = (msg) => {
  return confirm(msg);
};
