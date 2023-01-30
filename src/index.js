import "./css/style.css"; //importing css

const myModal = document.querySelector(".modal");

const close = document.querySelector(".close");

const displayModelPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 1000);
});

displayModelPromise.then((resolve) => {
  myModal.style.display = "block";
});

close.addEventListener("click", () => {
  myModal.style.display = "none";
});
