
const images = [
  "images/image1.jpg",
  "images/image2.jpg",
  "images/image3.jpg"
];

let currentIndex = 0;
const carouselImage = document.getElementById("carousel-image");

function showImage(index) {
  carouselImage.src = images[index];
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}
