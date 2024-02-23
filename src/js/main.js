document.addEventListener("DOMContentLoaded", function() {
  console.log("Hello");
  if (isStorageExist()) loadStorage()
  document.querySelector("#create-form").addEventListener("submit", function(event) {
    event.preventDefault();
    addBook()
  })
})