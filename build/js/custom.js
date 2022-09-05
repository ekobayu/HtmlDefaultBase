// ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {
        $('#return-to-top').fadeIn(200); 
    } else {
        $('#return-to-top').fadeOut(200);  
    }
});
$('#return-to-top').click(function() {     
    $('body,html').animate({
        scrollTop : 0                      
    }, 500);
});

// scroll to href target
// add class scroll on a href
var hashTagActive = "";
$(".scroll").on("click touchstart", function (event) {
  if (hashTagActive != this.hash) { //this will prevent if the user click several times the same link to freeze the scroll.
    event.preventDefault();
    //calculate destination place
    var dest = 0;
    if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
      dest = $(document).height() - $(window).height();
    } else {
      dest = $(this.hash).offset().top;
    }
    //go to destination
    $('html,body').animate({
      scrollTop: dest
    }, 500, 'swing');
    hashTagActive = this.hash;
  }
});

// on focus in first field contact
// $('.form-actions .form-submit').on('click', function () {
//   setTimeout(function () {
//     if($('.form-control.error').first()){
//       $('.form-control.error').first().focus()
//     } else if ($('.form-check-input.error').first()) {
//       $('.form-check-input.error').first().focus()
//     }
//   }, 100);
// });

// show and hide menu when scroll
// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementsByClassName("fixed-top")[0].style.cssText = 'top:0';
//     document.getElementsByClassName("navbar-brand")[0].style.cssText = 'width: auto;padding-top: 0;display: block;';
//   } else {
//     document.getElementsByClassName("fixed-top")[0].style.cssText = 'top:-70px';
//     document.getElementsByClassName("navbar-brand")[0].style.cssText = 'width: 60px;padding-top: 50px;display: block;';
//   }
//   prevScrollpos = currentScrollPos;
// } 

// simplify number rupiah
// $(document).ready(function() {
//   const elements = document.querySelectorAll('.priceText');
//   elements.forEach(el => {
//     if (el.textContent >= 1000000000000) {
//       return parseFloat((el.textContent / 1000000000000).toFixed(2)).toLocaleString() + 'T'
//     }
//     if (el.textContent >= 1000000000) {
//       return parseFloat((el.textContent / 1000000000).toFixed(2)).toLocaleString() + 'B'
//     }
//     if (el.textContent >= 1000000) {
//       return parseFloat((el.textContent / 1000000).toFixed(2)).toLocaleString() + 'M'
//     }
//     if (el.textContent >= 1000) {
//       el.textContent = parseFloat((el.textContent / 1000).toFixed(2)).toLocaleString() + 'K'
//     }
//   });
// });

// slick carousel
// $(document).ready(function() {
//   $('.center').slick({
//     centerMode: true,
//     centerPadding: '60px',
//     slidesToShow: 3,
//     dots: true,
//     variableWidth: true,
//     prevArrow:"<button type='button' class='slick-prev pull-left'></button>",
//     nextArrow:"<button type='button' class='slick-next pull-right'></button>",
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           arrows: false,
//           centerMode: true,
//           centerPadding: '40px',
//           slidesToShow: 3
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           arrows: false,
//           centerMode: true,
//           centerPadding: '40px',
//           slidesToShow: 2
//         }
//       }
//     ]
//   });
// })