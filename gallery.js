let images = document.getElementById("images");

const galleries = {
  atmos: {
    numberOfPics: 8,
    string: "atmos",
  },
  chair: {
    numberOfPics: 20,
    string: "chair",
  },
  table: {
    numberOfPics: 10,
    string: "table",
  },
  light: {
    numberOfPics: 4,
    string: "light",
  },
  other: {
    numberOfPics: 13,
    string: "other",
  },
};

window.onload = makeGallery(galleries.atmos);

function makeGallery(x) {
  images.textContent = "";
  for (let i = 1; i <= x.numberOfPics; i++) {
    const href = `./images/${x.string}/${x.string}${i}.png`;
    var a = document.createElement("a");
    a.href = href;
    $(a).attr("data-lightbox", "mygallery");
    images.appendChild(a);
    var img = document.createElement("img");
    img.src = href;
    img.class = "lightbox";
    a.appendChild(img);
  }
}
