function cardComponent(book) {
  const title = document.createElement("h5");
  const subtitle = document.createElement("p");
  const action = document.createElement("div");
  const readBtn = document.createElement("button");
  const unreadBtn = document.createElement("button");
  const deleteBtn = document.createElement("button");
  const cardBody = document.createElement("div")
  const container = document.createElement("article");

  title.classList.add("card-title")
  subtitle.classList.add("card-text")
  action.classList.add("ms-auto")
  unreadBtn.classList.add("btn", "btn-primary")
  readBtn.classList.add("btn", "btn-primary")
  deleteBtn.classList.add("btn", "btn-danger", "ms-2")
  cardBody.classList.add("card-body", "d-flex", "flex-column")
  container.classList.add("card")
  container.setAttribute("id", `${book.id}`);

  title.innerHTML = `${book.title}`;
  subtitle.innerHTML = `Created by ${book.author} on ${book.year}`;
  unreadBtn.innerHTML = "Mark Unread";
  readBtn.innerHTML = "Mark Read";
  deleteBtn.innerHTML = "Delete";
  book.isComplete
    ? action.append(unreadBtn, deleteBtn)
    : action.append(readBtn, deleteBtn);

  cardBody.append(title, subtitle, action)
  container.append(cardBody)

  deleteBtn.addEventListener("click", function () {
    deleteBook(book.id);
  });
  readBtn.addEventListener("click", function () {
    markRead(book.id);
  });
  unreadBtn.addEventListener("click", function () {
    markUnread(book.id);
  });

  return container;
}
