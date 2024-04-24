function addGrid(grid) {
  const divs = document.getElementById("container");
  const total = grid * grid + grid;
  const mod = grid + 1;
  const gridScreen = divs.appendChild(document.createElement("div"));
  for (let i = 0; i < total; i++) {
    const div = document.createElement("div");
    if (i % mod === 0) {
      div.style.cssText = "border: 0; width: 100%";
    } else {
      div.style.cssText = "height: 25px; width: 25px; border: 1px solid black";
    }
    gridScreen.appendChild(div);
  }
}

function OnClick() {
  let grid = parseInt(
    prompt("What size would you want in your grid?", "Grid size up to 100")
  );
  if (grid == null || grid == "" || grid > 100 || grid < 1) {
    alert("Ne valja");
  } else {
    const element = document.getElementById("container");
    element.removeChild(element.firstChild);
    addGrid(grid);
  }
}

let i = 0;
while (i === 0) {
  i++;
  addGrid(16);
}
