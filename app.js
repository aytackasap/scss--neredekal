const titles = document.querySelectorAll("#form-title span");
const input = document.getElementById("select-type");

titles.forEach((title, index) => {
  title.addEventListener("click", (e) => {
    titles.forEach((title, index) => {
      title.classList.remove("active");
    });
    e.target.classList.add("active");
    console.log(e.target.innerHTML);
    if (e.target.innerHTML == "Villalar") {
      input.placeholder = `Konum ya da villa ismi girin`;
    } else {
      input.placeholder = `Konum ya da otel ismi girin`;
    }
  });
});
