$(document).ready(function () {

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin: 10,
        nav:true,
        navText: [
            "<i class='bi bi-arrow-left-circle'></i>",
            "<i class='bi bi-arrow-right-circle'></i>"
        ],
        autoplay:true,
        autoplayHoverPause: true,
        responsive: {
            0: {
              items: 1
            },
            600: {
              items: 3
            },
            1000: {
              items: 5
            }
          }
    })

});