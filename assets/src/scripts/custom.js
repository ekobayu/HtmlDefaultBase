var $J = jQuery.noConflict()

/*==============================================================
    Init
==============================================================*/
$J(document).ready(function () {
  // Content setup deferred for optimal performance rating
  setTimeout(function () {
    // toggleNavMobile()
    initGeneral()
    initSlick()
    arrowToTop()
    showHideMenuScroll()
    simplifyRupiah()
    tabSticky()
  }, 1000)
})

function initGeneral() {
  if ($J(window).width() < 766) {
    // toggleNavMobile()
  }

  $J(window).on('resize', function () {
    // toggleNavMobile()
  })

  // pop up video
  const lightboxVideo1 = GLightbox({
    selector: '.glightbox'
  })

  // copy element
  $J(document).on('click', 'span.copy-color', function () {
    let copyText = $J(this)[0].textContent
    navigator.clipboard.writeText(copyText)
    alert('Copied: ' + copyText)
  })

  // on focus in first field contact
  $J('.form-actions .form-submit').on('click', function () {
    setTimeout(function () {
      if ($('.form-control.error').first()) {
        $('.form-control.error').first().focus()
      } else if ($('.form-check-input.error').first()) {
        $('.form-check-input.error').first().focus()
      }
    }, 100)
  })
}

function toggleNavMobile() {
  // close menu when click
  $J('.navbar-collapse .nav-link').bind('click', function () {
    document.querySelector('.navbar-toggler').click()
  })

  // disable scroll when close mobile menu
  $J('.navbar-collapse')
    .on('show.bs.collapse', function () {
      $J('nav.navbar').addClass('mobile-menu')
      $J('body').addClass('disable-scroll')
    })
    .on('hide.bs.collapse', function () {
      $J('nav.navbar').removeClass('mobile-menu')
      $J('body').removeClass('disable-scroll')
    })
}

function arrowToTop() {
  // back to top
  $J('#return-to-top').click(function () {
    // When arrow is clicked
    $('body,html').animate(
      {
        scrollTop: 0 // Scroll to top of body
      },
      500
    )
  })

  $J(window).scroll(function () {
    if ($(this).scrollTop() >= 100) {
      // If page is scrolled more than 50px
      $('#scrollUp').fadeIn(200) // Fade in the arrow
    } else {
      $('#scrollUp').fadeOut(200) // Else fade out the arrow
    }
  })
}

function showHideMenuScroll() {
  // show and hide menu when scroll
  var prevScrollpos = window.pageYOffset
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset
    if (prevScrollpos > currentScrollPos) {
      document.getElementsByClassName('fixed-top')[0].style.cssText = 'top:0'
      document.getElementsByClassName('navbar-brand')[0].style.cssText = 'width: auto;padding-top: 0;display: block;'
    } else {
      document.getElementsByClassName('fixed-top')[0].style.cssText = 'top:-70px'
      document.getElementsByClassName('navbar-brand')[0].style.cssText = 'width: 60px;padding-top: 50px;display: block;'
    }
    prevScrollpos = currentScrollPos
  }
}

function simplifyRupiah() {
  // simplify number rupiah
  $J(document).ready(function () {
    const elements = document.querySelectorAll('.priceText')
    elements.forEach(el => {
      if (el.textContent >= 1000000000000) {
        el.textContent = parseFloat((el.textContent / 1000000000000).toFixed(2)).toLocaleString() + 'T'
      }
      if (el.textContent >= 1000000000) {
        el.textContent = parseFloat((el.textContent / 1000000000).toFixed(2)).toLocaleString() + 'B'
      }
      if (el.textContent >= 1000000) {
        el.textContent = parseFloat((el.textContent / 1000000).toFixed(2)).toLocaleString() + 'M'
      }
      if (el.textContent >= 1000) {
        el.textContent = parseFloat((el.textContent / 1000).toFixed(2)).toLocaleString() + 'K'
      }
    })
  })
}

function tabSticky() {
  $J('#pills-tab-experiences').hcSticky({
    stickTo: $J('#tab-experiences')
  })
  $J('#pills-tab-experiences').hcSticky('update', {
    top: 86
  })
}

function initSlick() {
  // slick carousel

  // looping same class slick
  $J('.slick-experiences').each(function () {
    $J(this).slick({
      autoplay: false,
      centerMode: false,
      // autoplaySpeed: 5000,
      infinite: true,
      slidesToShow: 1,
      dots: false,
      arrows: true,
      variableWidth: true,
      prevArrow: "<button aria-label='Previous' type='button' class='slick-prev pull-left'></button>",
      nextArrow: "<button aria-label='Next' type='button' class='slick-next pull-right'></button>",
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '8px'
            // slidesToShow: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '8px'
            // slidesToShow: 1
          }
        }
      ]
    })
  })

  // enable scroll horizontal
  $J('.slick-experiences').on('wheel', function (e) {
    e.preventDefault()
    if (e.originalEvent.deltaX > 0) {
      $J(this).slick('slickNext')
    } else {
      $J(this).slick('slickPrev')
    }
  })

  $J('.center').slick({
    autoplay: true,
    centerMode: false,
    autoplaySpeed: 5000,
    centerPadding: '60px',
    slidesToShow: 3,
    dots: true,
    variableWidth: true,
    prevArrow: "<button aria-label='Previous' type='button' class='slick-prev pull-left'></button>",
    nextArrow: "<button aria-label='Next' type='button' class='slick-next pull-right'></button>",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2
        }
      }
    ]
  })

  // with center mode
  $J('.clients').slick({
    autoplay: true,
    centerMode: false,
    autoplaySpeed: 5000,
    slidesToShow: 5,
    dots: false,
    arrows: false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 5
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 3
        }
      }
    ]
  })

  // without center mode
  $J('.slick-awards').slick({
    autoplay: true,
    centerMode: false,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    dots: false,
    arrows: false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: false,
          slidesToShow: 5
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: false,
          slidesToShow: 3
        }
      }
    ]
  })
}
