function cardComponent(book) {
  const title = document.createElement("h1")
  const subtitle = document.createElement("p")
  const action = document.createElement("div")
  const readBtn = document.createElement("button")
  const unreadBtn = document.createElement("button")
  const deleteBtn = document.createElement("button")
  const container = document.createElement("article")

  title.innerHTML = `${book.title}`
  subtitle.innerHTML = `Created by ${book.author} on ${book.year}`
  unreadBtn.innerHTML = "Mark Unread"
  readBtn.innerHTML = "Mark Read"
  deleteBtn.innerHTML = "Delete"
  book.isRead ? action.append(unreadBtn, deleteBtn) : action.append(readBtn, deleteBtn)
  container.append(title, subtitle, action)

  deleteBtn.addEventListener("click", function() {deleteBook(book.id)})
  readBtn.addEventListener("click", function( ) {markRead(book.id)})
  unreadBtn.addEventListener("click", function( ) {markUnread(book.id)})

  action.classList.add('button-group')
  container.setAttribute("id", `${book.id}`)

  return container
}