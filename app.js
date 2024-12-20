const container = document.querySelector(".container");
const getNumberForm = document.querySelector(".getNumberForm");

getNumberForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const { value } = getNumberForm.number;
  const maxWidth = value * 50;
  const totalGridSquare = value * value;
  container.style.maxWidth = `${maxWidth}px`;
  for (let i = 0; i < totalGridSquare; i++) {
    const gridSquare = document.createElement("div");
    gridSquare.classList.add("gridSquare");
    container.append(gridSquare);
  }
});
