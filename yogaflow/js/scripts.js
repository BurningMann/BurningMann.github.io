/* Проверка на моб девайс */
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
  document.querySelector('html').classList.add('mobile') 
}

/* Проверка на ios */
if(navigator.platform.match('Mac') !== null) {
  document.body.setAttribute('class', 'OSX');
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

  /* Anchors */
  $('.header__navigation-link, .footer__navigation-link, .sidebar-mobile-menu__navigation-link').click(function(EO) {
    EO.preventDefault()
    if (checkInnerWidth(780)) {
      $('.sidebar-mobile-menu__bg').removeClass('visible')
      $('.sidebar-mobile-menu').removeClass('active')
    }
    const section = $(`.section__${$(this).attr('href')}`);
    $('html,body').animate({scrollTop: section.offset().top},'slow');
  })

  $('.header__burger').click(function(EO) {
    $('.sidebar-mobile-menu__bg').addClass('visible')
    $('.sidebar-mobile-menu').addClass('active')
  })

  $('.sidebar-mobile-menu__close').click(function(EO) {
    $('.sidebar-mobile-menu__bg').removeClass('visible')
    $('.sidebar-mobile-menu').removeClass('active')
  })



  /* ScrollTrigger Анимации*/
  gsap.registerPlugin(ScrollTrigger)
  
  if (!checkInnerWidth(780)) {
    gsap.to('.section__workout .section__content-media .left',{
      scrollTrigger: {
        trigger: '.section__workout .section__content-media',
        start: "20% 50%",
        end: "140% 50%",
        scrub:1,
      },
      translateY: '-10%',
    })
  
    gsap.to('.section__workout .section__content-media .right',{
      scrollTrigger: {
        trigger: '.section__workout .section__content-media',
        start: "20% 50%",
        end: "120% 50%",
        scrub:1,
      },
      translateY: '-20%',
    })
  
    gsap.to('.section__nutrition .section__content-media img',{
      scrollTrigger: {
        trigger: '.section__nutrition .section__content-media',
        start: "20% 70%",
        end: "bottom 70%",
        scrub:1,
      },
      translateY: -250,
    })
  
    gsap.to('.section__asanas .section__content-media .left',{
      scrollTrigger: {
        trigger: '.section__asanas .section__content-media',
        start: "20% 50%",
        end: "bottom 50%",
        scrub:1,
      },
      translateY: '20%',
    })
  
    gsap.to('.section__asanas .section__content-media .right',{
      scrollTrigger: {
        trigger: '.section__asanas .section__content-media',
        start: "20% 50%",
        end: "bottom 50%",
        scrub:1,
      },
      translateY: '-30%',
    })
  }
  

  /* POPUPS */
  $('[data-popup]').click(function(){
    let popup = $(this).data('popup')
    $(`.${popup}_popup`).fadeIn()
    $('body,html').addClass('noskroll')
  })

  $('.popup__close').click(function(){
    let popup = $(this).closest('.popup')
    $(popup).fadeOut('fast')
    $('body,html').removeClass('noskroll')
  })
  


  $(window).resize(function() {

  });

  /* Lazy load */
/*   var observer = lozad('[data-lazysrc]', {
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
  pictureObserver.observe() */
}