$(function ($) {
  "use strict";

  jQuery(document).ready(function () {
    /* niceSelect */
    $("select").niceSelect();

    /* hero-banner */
    $(".hero-banner").slick({
      infinite: true,
      autoplay: true,
      focusOnSelect: false,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: true,
    });

    /* Wow js */
    new WOW().init();
  });
});
