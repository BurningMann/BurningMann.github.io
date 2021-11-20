if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
  document.querySelector('html').classList.add('mobile')
}

if (navigator.platform.match('Mac') !== null) {
  document.body.setAttribute('class', 'OSX');
}

function checkInner(width) {
  if (window.innerWidth <= width) {
    return true
  } else {
    return false
  }
}

/* PRELOADER */
$(document).ready(function () {
  /* $(window).resize(function(){
    let viewheight = $(window).height();
    $('.login').css('height',viewheight+'px')
  })


  var images = document.images
  var total_count = images.length 
  var loaded_count = 0

  bar = new ProgressBar.Circle(loader__progress, {
    strokeWidth: 1,
    easing: 'easeInOut',
    duration: 1400,
    color: '#000',
    trailColor: '#DEDEDE',
    trailWidth: 1,
    svgStyle: null
  });
  
  for(let i=0; i<images.length; i++){
    var image_clone = new Image
    image_clone.onload = image_loaded
    image_clone.onerror = image_loaded
    image_clone.src = images[i].src;
  }
  
  function image_loaded(){
    loaded_count++
    let percent = ((100/total_count*loaded_count<<0)/100) - 0.1
    $(document).ready(function(){
      bar.animate(percent);
    })
  } */
})

window.onload = function () {

  /* setTimeout(() => {
    bar.animate(1);
    setTimeout(() => {
      $('.preloader').addClass('preloader--load')
    }, 750);
  }, 1000); */
  /* Класс для Анимации банера на главной странице */
  $('.main_page_banner').addClass('animated')

  function mobileMenuAtive() {
    $('.main_menu').append($('.header__main_wrapper .btn'))
    $('.main_menu').append(`
    <div class="menu_phones">
      <a href="tel:+375(17)236-50-50" class="phone">+375(17) 236-50-50</a>
      <div class="social">
        <a href="#" class="phone"><img src="../img/icons/viber.svg"></a>
        <a href="#" class="phone"><img src="../img/icons/telegram.svg"></a>
      </div>
    </div>
    `)
    $('.main_menu').append(`
      <div class="close_burger_menu">
        <span></span>
        <span></span>
      </div>
    `)
  } if (checkInner(1200)) mobileMenuAtive()

  function mobileMenuDeative() {
    $('.header__main_wrapper').append($('.main_menu .btn'))
    $('.close_burger_menu').remove()
    $('.menu_phones').remove()
  }

  $('.burger_menu').click(function () {
    $('.header__main').addClass('menu_open')
  })
  $('.main_menu').on('click', '.close_burger_menu', function () {
    $('.header__main').removeClass('menu_open')
  })
  $('.main_menu__link.parrent .main_link').click(function (EO) {
    EO.preventDefault()
    $(this).siblings('.sub_menu').slideToggle()
    $(this).toggleClass('active')
  })

  $(window).resize(function () {
    if (checkInner(1200) && !$('.close_burger_menu').length) {
      mobileMenuAtive()
    } else if (!checkInner(1200)) {
      mobileMenuDeative()
    }
  });


  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  /* Класс фикс хедера */
  ScrollTrigger.create({
    trigger: ".header__main",
    start: `top top`,
    end: `top top`,
    onEnter: () => {
      $(".header__main").addClass('fixed')
    },
    onEnterBack: () => {
      $(".header__main").removeClass('fixed')
    }
  })

  /* Класс кнопки вверх */
  ScrollTrigger.create({
    trigger: "body",
    start: `${window.innerHeight}px top`,
    end: `${window.innerHeight}px top`,
    onEnter: () => {
      $(".to_top").addClass('visible')
    },
    onEnterBack: () => {
      $(".to_top").removeClass('visible')
    }
  })

  /* Анимация блока брендов */
  $('.brands_section__row').map(function(index,element){
    ScrollTrigger.create({
      trigger: element,
      start: `50% bottom`,
      onEnter: () => {
        $(element).addClass('visible')
      },
    })
  })
  /* Кнопка вверх */
  $('.to_top').click(function () {
    $('html').animate({
      scrollTop: 0
    }, 500);
  })

  /* POPUPS */
  $('[data-popup]').click(function () {
    let popup = $(this).data('popup')
    $('.' + popup + '_popup').fadeIn()
    $('body,html').addClass('no-scroll')
  })

  $('.popup__close, .popup_btn.close_popup').click(function () {
    let popup = $(this).closest('.popup')
    $(popup).fadeOut()
    $('body,html').removeClass('no-scroll')
  })

  $('.popup__wrapper').click(function (EO) {
    console.log($(EO.target))
    EO.stopPropagation()
    if ($(EO.target).hasClass('popup__wrapper')) {
      $('.popup').fadeOut()
      $('body,html').removeClass('no-scroll')
    }
  })

  $('.card_slider_section .card_slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: `<div class="prev"></div>`,
    nextArrow: `<div class="next"></div>`,
    responsive: [
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  })

  $('.contacts__slider .main_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.contacts__slider .additional_slider'
  })

  $('.contacts__slider .additional_slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    vertical: true,
    verticalSwiping: true,
    asNavFor: '.contacts__slider .main_slider',
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 500,
        settings: {
          vertical: false,
          verticalSwiping: false,
        }
      },
    ]
  })

  /* DEV SCRIPTS */

  $(".sitemap__opener").click(function () {
    $('.sitemap').toggleClass('open')
    $(this).toggleClass('active')
  })
  if (location.host.includes('localhost')) {
    $('.sitemap__link').map(function (index, element) {
      let link = $(element).attr('href')
      let re = /\/apartamento/gi;
      $(element).attr('href', link.replace(re, ''))
    })
  }
  /*  
 
   if(!checkInner(1024)){
     $("[data-back]").map(function(index,element){
       let path = $(element).data('back')
       $(element).attr('src', path)
       $(element).addClass('load')
       let video = $(element).closest('video')[0]
       video.load();
     })
   }
 
   var observer = lozad('[data-lazysrc]', {
     threshold: 0.1,
     enableAutoReload: true,
     load: function(el) {
       el.src = el.getAttribute("data-lazysrc");
       el.onload = function() {
         $(el).addClass("load")
       }
     }
   })
   observer.observe() */

}