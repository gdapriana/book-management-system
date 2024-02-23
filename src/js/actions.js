const RENDER_BOOK_EVENT = "render-books"

document.addEventListener(RENDER_BOOK_EVENT, function() {
  const read = document.querySelector("#read-section")
  const unread = document.querySelector("#unread-section")

  read.innerHTML = ""
  unread.innerHTML = ""

  for (const book of books) {
    const component = cardComponent(book)
    book.isRead ? read.append(component) : unread.append(component)
  }
})

function addBook() {
  const title = document.querySelector('#title').value
  const year = document.querySelector('#year').value
  const author = document.querySelector('#author').value
  const isRead = document.querySelector('#status').checked

  books.push({
    id: new Date().valueOf(),
    title: title,
    year: year,
    author: author,
    isRead: isRead
  })
  storageParse()
  document.dispatchEvent(new Event(RENDER_BOOK_EVENT))
}

function deleteBook(id) {
  const target = books.find((book) => book.id === id)
  const title = document.querySelector('#delete-item-title')
  const deleteModal = document.querySelector('#delete-modal')
  const yesDeleteBtn = document.querySelector('#yes-delete-button')
  const cancelDeleteBtn = document.querySelector('#cancel-delete-button')

  title.innerHTML = `Are you sure to delete ${target.title}?`
  deleteModal.classList.remove('hidden')
  deleteModal.classList.add('flex')

  yesDeleteBtn.addEventListener("click", function() {
    for (let arrayPosition = 0; arrayPosition < books.length; arrayPosition++) {
      if (books[arrayPosition].id === id) {
        books.splice(arrayPosition, 1);
        break;
      }
    }
    document.dispatchEvent(new Event(RENDER_BOOK_EVENT))
    storageParse()
    deleteModal.classList.remove('flex')
    deleteModal.classList.add('hidden')
  })
  cancelDeleteBtn.addEventListener("click", function() {
    deleteModal.classList.remove('flex')
    deleteModal.classList.add('hidden')
  })
}

function markRead(id) {
  const target = books.find((book) => book.id === id)
  target.isRead = true
  storageParse()
  document.dispatchEvent(new Event(RENDER_BOOK_EVENT))
}

function markUnread(id) {
  const target = books.find((book) => book.id === id)
  target.isRead = false
  storageParse()
  document.dispatchEvent(new Event(RENDER_BOOK_EVENT))
}