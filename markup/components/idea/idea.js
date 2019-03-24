(function () {
  const slider = $('.js-slider');
  slider.each(function (index) {
    $(this).slick({
      mobileFirst: true,
      dots: true,
      prevArrow: $('.js-prev-slide')[index],
      nextArrow: $('.js-next-slide')[index],
      appendDots: $('.js-dots')[index],
      waitForAnimate: false,
      lazyLoad: 'ondemand',
      responsive: [{
        breakpoint: 991,
        settings: {
          centerMode: true,
          arrows: true,
          centerPadding: '242px',
          variableWidth: true
        }
      }]
    });
  });
})();

