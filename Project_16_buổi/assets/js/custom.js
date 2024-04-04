$(document).ready(function () {
    // $(".owl-carousel").owlCarousel();
    $(".owl-carousel").owlCarousel({
        loop: true, // Vòng lặp
        margin: 30, // Khoảng cách giữa các item
        autoplay: true, // Tự động chuyển slide
        autoplayTimeout: 6000,
        nav: true, // Thanh điều hướng (mũi tên)
        dots: true,
        responsive: {
            0: {
                // -> 599px
                items: 1,
            },
            600: {
                // 600px -> 999px
                items: 1,
            },
            1000: {
                // 1000px trở lên
                items: 1,
            },
        },
    });
});
