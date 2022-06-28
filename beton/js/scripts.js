/* Проверка на моб девайс */
function iOS() {
  return [
      'iPad Simulator',
      'iPhone Simulator',
      'iPod Simulator',
      'iPad',
      'iPhone',
      'iPod'
  ].includes(navigator.platform)
  // iPad on iOS 13 detection
  || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
}
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent) || iOS();
if (isMobile) {
  document.querySelector('html').classList.add('is-mobile');
}

/* Проверка на safari */
const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
if(isSafari) {
  document.querySelector('html').classList.add('is-safari');
}

/* Проверка на ios */
const isIos = navigator.platform.match('Mac') !== null;
if(isIos) {
  document.querySelector('html').classList.add('is-OSX');
}

/* Проверка ширины экрана */
function checkInnerWidth(width){
  if(window.innerWidth <= width){
    return true
  }else{
    return false
  }
}



window.onload = function(){
  function setTransformScale(scaleFactor) {
    if(!scaleFactor) scaleFactor = 1;

    let height = $(window).height()*(1/scaleFactor);
    let width = $(window).width()*(1/scaleFactor);

    $("html").css({
        width: width+"px",
        height: height+"px",
        transform: `scale(${scaleFactor})`
    });
  };

  $(window).resize(function() {
    if (!checkInnerWidth(1600)) {
      setTransformScale()
    } 
    
    if (checkInnerWidth(1024)) {
      setTransformScale()
    } else if (checkInnerWidth(1600)) {
      setTransformScale(0.75)
    }
  });
  

  /* ACCORDION*/
  $('.accordion__wrapper-item-header').click(function() {
    $(this).toggleClass('active')
    $(this).siblings('.accordion__wrapper-item-body').slideToggle()
  })

  $('.open-hidden-products').click(function() {
    if ($(this).hasClass('active')) {
      $(this).text('Показать все')
    } else {
      $(this).text('Скрыть')
    }
    $(this).toggleClass('active')
    $(this).siblings('.hidden-products').slideToggle()
  })

  $('.colors__wrapper-color').click(function() {
    $('.colors__wrapper-color.active').removeClass('active')
    $(this).addClass('active')
  })

  $('.textures__wrapper-texture').click(function() {
    $('.textures__wrapper-texture.active').removeClass('active')
    $(this).addClass('active')
  })

  $('.header__burger').click(function() {
    $(this).toggleClass('active')
    $('.header__menu').fadeToggle('fast')
    $('body, html').toggleClass('noskroll')
  })

  $('.header__menu-item.parrent').click(function(EO) {
    if (checkInnerWidth(1078)) {
      EO.preventDefault()
      $(this).toggleClass('active')
      $('.header__menu .mobile-content').toggleClass('hidden')
      $('.header__menu-item').toggleClass('hidden')
    }
  })

  $('.custom-select__main').click(function(EO) {
    $(this).toggleClass('open')
  })

  $('.custom-select__select-item').click(function(EO) {
    const name = $(this).find('.name').text()
    const image = $(this).find('.color').find('img')[0].src
    $(this).closest('.custom-select').find('.custom-select__main').toggleClass('open')
    $(this).closest('.custom-select').find('.custom-select__main').find('.name').text(name)
    $(this).closest('.custom-select').find('.custom-select__main').find('.color').find('img').attr('src', image)
    $(this).closest('.custom-select').find('.custom-select__input').val(name)
  })


  $('[data-anchor]').click(function(EO) {
    const anchor = $(this).data('anchor')
    const section = $(`#${anchor}`);
    $('html,body').animate({scrollTop: section.offset().top * (!checkInnerWidth(1600) ? 1 : 0.75)},'slow');
  })

  if (checkInnerWidth(1024)) {
    $(".custom-js-scroll").mCustomScrollbar({
      axis:"x",
      autoDraggerLength: false
    });
  }

  if (!checkInnerWidth(1600)) {
    gsap.registerPlugin(ScrollTrigger)

    const animateElements = $('.animate-svg .fade-animation')
    const animateTable= $('.animate-svg .animate-svg__table')[0]
    const colors= $('.main-colors__palette')[0]

    gsap.to(animateTable,{
      scrollTrigger: {
        trigger: animateTable,
        start: "50% bottom",
        end: "50% bottom",
      },
      opacity: 1,
    })
  
    gsap.to(colors,{
      scrollTrigger: {
        trigger: colors,
        start: "100% bottom",
        end: "100% bottom",
      },
      opacity: 1,
    })
  
    Array.from(animateElements).forEach(element => {
      gsap.to(element,{
        scrollTrigger: {
          trigger: element,
          start: "200% bottom",
          end: "200% bottom",
        },
        opacity: 1,
      })
    });
  }

  /* SLIDERS */

  $('.main-section__slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    prevArrow: `<div class="prev"><img src="./img/icons/slider-white-arrow-right.svg"></div>`,
    nextArrow: `<div class="next"><img src="./img/icons/slider-white-arrow-right.svg"></div>`
  })

  if (checkInnerWidth(500)) {
    $('.advantages__wrapper').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: `<div class="prev"><img src="./img/icons/slider-black-arrow-right.svg"></div>`,
      nextArrow: `<div class="next"><img src="./img/icons/slider-black-arrow-right.svg"></div>`
    })
  }

  if ($('.nav-slider-item').length <= 4) {
    $('.product-slider__nav-slider').addClass('no-scroll')
  }

  $('.product-slider__mian-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: `<div class="prev"><img src="./img/icons/slider-white-arrow-right.svg"></div>`,
    nextArrow: `<div class="next"><img src="./img/icons/slider-white-arrow-right.svg"></div>`,
    fade: true,
    asNavFor: '.product-slider__nav-slider'
  });

  $('.product-slider__nav-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.product-slider__mian-slider',
    vertical: true,
    verticalSwiping: true,
    dots: false,
    arrows: false,
    focusOnSelect: true
  });

  $('.related-products__wrapper').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: `<div class="prev"><img src="./img/icons/slider-black-arrow-right.svg"></div>`,
    nextArrow: `<div class="next"><img src="./img/icons/slider-black-arrow-right.svg"></div>`,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  /* POPUPS */
  $('[data-popup]').click(function () {
    let popup = $(this).data('popup')
    $('.' + popup + '-popup').fadeIn()
    $('body,html').addClass('noscroll')
  })

  $('.popup__close, .popup_btn.close_popup').click(function () {
    let popup = $(this).closest('.popup')
    $(popup).fadeOut()
    $('body,html').removeClass('noscroll')
  })

  $('.popup__wrapper').click(function (EO) {
    EO.stopPropagation()
    if ($(EO.target).hasClass('popup__wrapper')) {
      $('.popup').fadeOut()
      $('body,html').removeClass('noscroll')
    }
  })

  /* Lazy load */
  var observer = lozad('[data-lazysrc]', {
    threshold: 0.1,
    enableAutoReload: true,
    load: function(el) {
      el.src = el.getAttribute("data-lazysrc");
      // el.srcset = el.getAttribute("data-lazysrc");
      el.onload = function() {
        $(el).addClass("load")
      }
    }
  })
  observer.observe()
  
  var pictureObserver = lozad('.lozad', {
    threshold: 0.1
  })
  pictureObserver.observe()

  /* DEV SCRIPTS */

  $(".sitemap__opener").click(function(){
    $('.sitemap').toggleClass('open')
    $(this).toggleClass('active')
  })

  if(location.host.includes('localhost')){
    $('.sitemap__link').map(function(index,element){
      let link = $(element).attr('href')
      let re = /\/beton/gi;
      $(element).attr('href',link.replace(re,''))
    })
  }
}