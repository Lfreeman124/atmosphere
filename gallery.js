let images = document.getElementById("images");
window.onload = atmospheres();

function atmospheres() {
  images.textContent = "";
  for (let i = 1; i < 9; i++) {
    var a = document.createElement("a");
    a.href = `./images/atmosphere/atmos${i}.png`;
    images.appendChild(a);
    var img = document.createElement("img");
    img.src = `./images/atmosphere/atmos${i}.png`;
    img.class = "lightbox";
    a.appendChild(img);
  }
}

function chairs() {
  images.textContent = "";
  for (let i = 1; i < 21; i++) {
    var img = document.createElement("img");
    img.src = `./images/chairs/chair${i}.png`;
    images.appendChild(img);
  }
}

function tables() {
  images.textContent = "";
  for (let i = 1; i < 11; i++) {
    var img = document.createElement("img");
    img.src = `./images/table/table${i}.png`;
    images.appendChild(img);
  }
}

function lighting() {
  images.textContent = "";
  for (let i = 1; i < 5; i++) {
    var img = document.createElement("img");
    img.src = `./images/lighting/light${i}.png`;
    images.appendChild(img);
  }
}

function other() {
  images.textContent = "";
  for (let i = 1; i < 14; i++) {
    var img = document.createElement("img");
    img.src = `./images/other/other${i}.png`;
    images.appendChild(img);
  }
}
