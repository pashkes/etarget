"use strict";

(function () {
  var sliderAnswer = $('.js-slider-answer');
  sliderAnswer.slick({
    mobileFirst: true,
    dots: true,
    prevArrow: $('.js-answer-prev-slide'),
    nextArrow: $('.js-answer-next-slide'),
    appendDots: $('.js-answer-dots'),
    responsive: [{
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        variableWidth: false
      }
    }, {
      breakpoint: 991,
      settings: {
        centerMode: true,
        arrows: true,
        slidesToShow: 3,
        centerPadding: '48px',
        variableWidth: true
      }
    }]
  });
})();
"use strict";

(function () {
  var slider = $('.js-slider');
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