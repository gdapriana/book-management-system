const RENDER_BOOK_EVENT = "render-book";

document.addEventListener(RENDER_BOOK_EVENT, () => {
  const readSelf = document.getElementById("readCardWrapper");
  readSelf.innerHTML = "";
  const unreadSelf = document.getElementById("unreadCardWrapper");
  unreadSelf.innerHTML = "";

  console.log(books);

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
  let getId = null;
  for (const book of books) {
    if (book.id === id) getId = book.id;
  }
  books.splice(getId, 1);
  document.dispatchEvent(new Event(RENDER_BOOK_EVENT));
  deleteData();
};
const resetForm = () => {
  document.getElementById("bookTitle").value = "";
  document.getElementById("yearPublication").value = "";
  document.getElementById("author").value = "";
  document.getElementById("markRead").checked = false;
};
