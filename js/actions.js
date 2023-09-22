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
    resetForm();
  }
};

const resetForm = () => {
  document.getElementById("bookTitle").value = "";
  document.getElementById("yearPublication").value = "";
  document.getElementById("author").value = "";
  document.getElementById("markRead").checked = false;
};
