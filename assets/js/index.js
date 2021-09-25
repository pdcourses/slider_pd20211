class Slide {
  constructor(src, info) {
    this._src = src;
    this._info = info;
  }
  get src() {
    return this._src;
  }
  get info() {
    return this._info;
  }
}

class Slider {
  constructor(slides, currentIndex = 0) {
    this._slides = slides;
    this._currentIndex = currentIndex;
  }
  set currentIndex(value) {
    if (value > 0 && value < this._slides.length) {
      this._currentIndex = value;
    }
  }
  get currentIndex() {
    return this._currentIndex;
  }
  get prevIndex() {
    return (this._currentIndex - 1 + this._slides.length) % this._slides.length;
  }
  get nextIndex() {
    return (this._currentIndex + 1) % this._slides.length;
  }
  get currentSlide() {
    return this._slides[this._currentIndex];
  }
  get prevSlide() {
    return this._slides[this.prevIndex];
  }
  get nextSlide() {
    return this._slides[this.nextIndex];
  }
}

const carousel = new Slider([
  new Slide(
    'data:image/jpeg;base64,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',
    'miki'
  ),
  new Slide(
    'https://cs10.pikabu.ru/post_img/2020/04/16/2/1587002238160851117.jpg',
    'bird'
  ),
  new Slide(
    'https://img.kanal-o.ru/img/2013-03-25/fmt_81_24_pps14212.jpg',
    'popovich'
  ),
  new Slide(
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4-T9Gs4rZdSVuoZuARtk6tEhm3X8ZUkdjxOzPzP6sRgGcntN-_eoJj2ww1Ly96o-7UPE&usqp=CAU',
    'lion'
  ),
  new Slide(
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnLc9UumVU-l1G88Gt6LIP1uvi5gmnJWYc8IZnOO1DqJPINDbpskxRGI0p3iK0i35hQzU&usqp=CAU',
    'panda'
  ),
]);

const [prevButtonElem, nextButtonElem] = document.querySelectorAll('.btn');

const working =
  (direction = 'next') =>
  (e) => {
    carousel.currentIndex =
      carousel[direction == 'next' ? 'nextIndex' : 'prevIndex'];
    renderSlider(direction);
  };

prevButtonElem.addEventListener('click', working('prev'));
nextButtonElem.addEventListener('click', working('next'));

renderSlider();

function renderSlider(direction) {
  const prevImage = document.querySelector('.prevImage');
  const currentImage = document.querySelector('.currentImage');
  const nextImage = document.querySelector('.nextImage');
  const currentSlide = carousel.currentSlide;
  prevImage.setAttribute('src', carousel.prevSlide.src);
  currentImage.setAttribute('src', currentSlide.src);
  nextImage.setAttribute('src', carousel.nextSlide.src);
}
