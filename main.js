
const timelineSwiper = new Swiper('.timeline .swiper-container', {
  direction: window.innerWidth >= 768 ? 'vertical' : 'horizontal',
  loop: false,
  speed: 1600,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      const year = document.querySelectorAll('.swiper-slide')[index].getAttribute('data-year');
      return '<span class="' + className + '">' + year + '</span>';
    }
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  on: {
    resize: function () {
      this.changeDirection(window.innerWidth >= 768 ? 'vertical' : 'horizontal');
    }
  }
});