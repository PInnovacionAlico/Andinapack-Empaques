$.js = function (el) {
   return $("[data-js=" + el + "]");
};

function carousel() {
   $.js("timeline-carousel").slick({
      infinite: false,
      arrows: false,
      dots: true,
      autoplay: false,
      speed: 1100,
      slidesToShow: 2,
      slidesToScroll: 2,
      responsive: [
         {
            breakpoint: 800,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1
            }
         }
      ]
   });
}

carousel();

// Progress Bar Scroll Script
window.addEventListener('scroll', function() {
   console.log('Scroll event triggered');
   var scrollTop = window.scrollY || document.documentElement.scrollTop;
   var docHeight = document.documentElement.scrollHeight - window.innerHeight;
   var scrolled = (docHeight > 0) ? (scrollTop / docHeight) * 100 : 0;
   var bar = document.getElementById('progress-bar');
   if (bar) {
      bar.style.width = scrolled + '%';
      console.log('Progress bar width set to:', scrolled + '%');
   } else {
      console.log('Progress bar element not found');
   }
});
