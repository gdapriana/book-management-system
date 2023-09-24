const bookCardComponent = (book) => {
  const titleElement = document.createElement("h1");
  titleElement.innerHTML = `${book.title}`;

  const subtitleElement = document.createElement("p");
  subtitleElement.innerHTML = `Written by <b>${book.author}</b> in <b>${book.year}</b>`;

  const readIcon = document.createElement("img");
  readIcon.src = "./assets/eye.png";
  const unreadIcon = document.createElement("img");
  unreadIcon.src = "./assets/invisible.svg";
  const trashIcon = document.createElement("img");
  trashIcon.src = "./assets/delete.svg";

  const actionWrapper = document.createElement("div");
  actionWrapper.classList.add("iconAction");

  !book.isRead
    ? actionWrapper.append(readIcon, trashIcon)
    : actionWrapper.append(unreadIcon, trashIcon);

  trashIcon.addEventListener("click", () => deleteBook(book.id));

  const container = document.createElement("article");
  container.classList.add("card");

  container.append(titleElement, subtitleElement, actionWrapper);
  container.setAttribute("id", `book-${book.id}`);

  return container;
};
