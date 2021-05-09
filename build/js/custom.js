$(".incr-btn").on("click", function (e) {
    var $button = $(this);
    var oldValue = $button.parent().find('.quantity').val();
    $button.parent().find('.incr-btn[data-action="decrease"]').removeClass('inactive');
    if ($button.data('action') == "increase") {
        var newVal = parseFloat(oldValue) + 1;
    } else {
        // Don't allow decrementing below 1
        if (oldValue > 1) {
            var newVal = parseFloat(oldValue) - 1;
        } else {
            newVal = 1;
            $button.addClass('inactive');
        }
    }
    $button.parent().find('.quantity').val(newVal);
    e.preventDefault();
})

$('.carouselSlider').owlCarousel({
    items: 1,
    margin: 0,
    dots: false,
    autoHeight: false,
    autoWidth: false,
    responsiveClass: true,
    loop: true,
    autoplay: 100,
    autoplayHoverPause: true,
    navText: "<>",
})

$('.carouselProduct').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    navText: "<>",
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:false
        }
    }
})

$('ul.navbar-nav li.dropdown').hover(function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
  }, function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
  });

// ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});

/* wait for images to load */
$(window).load(function() {
    $('.sp-wrap').smoothproducts();
});

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}