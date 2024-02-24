document.addEventListener("DOMContentLoaded", function () {
  if (isStorageExist()) loadStorage();
  document
    .querySelector("#create-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      addBook();
    });
});
