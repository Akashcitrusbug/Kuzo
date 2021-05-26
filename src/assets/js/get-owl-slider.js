$(document).ready(function () {
  $("#owl-world-icons").owlCarousel({
    loop: true,
    nav: true,
    navText: [
      '<span class="span-round-circle left-round-circle"><i class="bg-custom-icon left-arrow-round"></span>',
      '<span class="span-round-circle right-round-circle"><i class="bg-custom-icon right-arrow-round"></span>',
    ],
    dots: false,
    stagePadding: 0,
    margin: 40,
    autoplay: true,
    smartSpeed: 2000,
    responsive: {
      0: {
        items: 1,
        nav: false,
        margin: 20,
        mouseDrag: true,
      },
      600: {
        items: 2,
      },
      1200: {
        items: 4,
      },
      1600: {
        items: 4,
      }
    }
  });
});