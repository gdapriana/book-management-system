document.addEventListener("DOMContentLoaded", function () {
  if (isStorageExist()) loadStorage();

  document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();
    addBook();
    console.log(books);
  });
});
