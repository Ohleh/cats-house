const slider = document.querySelector(".hero-list");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

const mySiema = new Siema({
  selector: slider,
  loop: true,
  duration: 500,
  threshold: 50,
});

function onNextClick() {
  mySiema.next();
}

function onPrevClick() {
  mySiema.prev();
}

next.addEventListener("click", onNextClick);
prev.addEventListener("click", onPrevClick);

const lightbox = new SimpleLightbox(".gallery a", {
  overlayOpacity: 0.2,
});

AOS.init();
