let grid = document.getElementById("grid");
for (let x = 0; x < 16; x++) {
  let colums = document.createElement("div");
  colums.classList.add("hori");
  grid.appendChild(colums);
  for (let y = 0; y < 16; y++) {
    let rows = document.createElement("div");
    rows.classList.add("vert");
    colums.appendChild(rows);
    rows.addEventListener("mouseover", () => {
        rows.classList.add("hold");
      });
  }
}
