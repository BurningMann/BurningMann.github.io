if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
  document.querySelector('html').classList.add('mobile') 
}

if(navigator.platform.match('Mac') !== null) {
  document.body.setAttribute('class', 'OSX');
}

window.onload = function(){

  function checkInner(width){
    if(window.innerWidth <= width){
      return true
    }else{
      return false
    }
  }

  $('.drop-box').click(function(){
    $(this).toggleClass('active')
    $(this).find('.drop-box__drop').slideToggle()
  })

  $('.catalog-btn').click(function(){
    $(this).toggleClass('active')
    $('.header__main-menu').fadeToggle()
  })

  $('.burger__btn').click(function(){
    $('.header__mobile-main-menu').toggleClass('open')
    $('.mobile-menu-bg').toggleClass('visible')
  })

  $('.mobile-menu-item .main-item').click(function(){
    $(this).toggleClass('active')
    $(this).siblings(".sub-menu").slideToggle()
  })

  $('.menu-close,.mobile-menu-bg').click(function(){
    $('.header__mobile-main-menu').removeClass('open')
    $('.mobile-menu-bg').toggleClass('visible')
  })
  
  $('.tab_section__tab').click(function(){
    if(!$(this).hasClass('disabled') && !$(this).hasClass('active')){
      let tabClass  = $(this).data('tab')
      let tabContainer = $(this).closest('.tab_section')
      $(tabContainer).find('.tab_section__tab.active').removeClass('active')
      $(this).addClass('active')
      $(tabContainer).find('.tab_section__content_tab.active').removeClass('active')
      $(tabContainer).find(`.${tabClass}_tab`).addClass('active')
    }
  })

  /* Product counter */
  var counterInterval = null

  $('.counter .plus').mousedown(function () { 
    let counter = $(this).siblings('.counter__count').find('input')[0]
    let count = +$(counter).val()
    
    $(counter).val(count + 1)

    counterInterval = setInterval(() => {
      count = +$(counter).val()
      $(counter).val(count + 1)
    }, 100);
  });

  $('.counter .minus').mousedown(function () { 
    let counter = $(this).siblings('.counter__count').find('input')[0]
    let count = +$(counter).val()

    if(count > 1) {
      $(counter).val(count - 1)
    }

    counterInterval = setInterval(() => {
      count = +$(counter).val()
      if(count > 1) {
        $(counter).val(count - 1)
      }
    }, 100);
  });

  $(document).mouseup(function () { 
    if(counterInterval) {
      clearInterval(counterInterval)
      counterInterval = null
    }
  });

  $('.catalog__product-favorite').click(function(){
    $(this).toggleClass('active')
  })


  $('.footer__column-title').click(function(){
    if(checkInner(500)) {
      $(this).toggleClass('active')
      $(this).siblings('.footer__column-list').slideToggle().css('display', 'flex')
    }
  })


  /* Раскрытие ативных пунктов меню*/
  if($('.catalog-menu .main-category.active').length) {
    $('.catalog-menu .main-category.active').map(function(index,element) {
      $(element).siblings('.catalog-sub-menu').slideDown(0)
    })
  }
  
  if($('.catalog-menu .category-name.active').length) {
    $('.catalog-menu .category-name.active').map(function(index,element) {
      $(element).siblings('.category-sub-menu-level-2').slideDown(0)
    })
  }
  
  $('.catalog-menu .main-category').click(function(){
    $(this).toggleClass('active')
    $(this).siblings('.catalog-sub-menu').slideToggle()
  })

  $('.catalog-sub-menu .category-name').click(function(){
    $(this).toggleClass('active')
    $(this).siblings('.category-sub-menu-level-2').slideToggle()
  })

  $('.catalog-filter__item-head').click(function(){
    $(this).toggleClass('active')
    $(this).siblings('.catalog-filter__item-body').slideToggle()
  })


  $('.filter-mobile-opener').click(function(){
    $(this).toggleClass('active')
    $(this).siblings('.catalog-filter').slideToggle()
  })

  $('.vacancy__item-header').click(function(){
    $(this).toggleClass('active')
    $(this).siblings('.vacancy__item-body').slideToggle()
  })
  
  $('.main-page-map.with-map .main-page-map__sidebar-box').click(function(){
    $('.main-page-map.with-map .main-page-map__sidebar-box.active').removeClass('active')
    $(this).addClass('active')

    let adress = $(this).data('adress') 
    $('.main-page-map__map-adress.active').removeClass('active')

    $(`.${adress}`).addClass('active')
  })


  /* POPUPS */
  $('[data-popup]').click(function(){
    let popup = $(this).data('popup')
    $('.'+popup+'_popup').fadeIn()
    $('body,html').addClass('no-scroll')
  })
  $('.popup__close, .popup_btn.close_popup').click(function(){
    let popup = $(this).closest('.popup')
    $(popup).fadeOut()
    if(!$('.burger').hasClass('burger--active')){
      $('body,html').removeClass('no-scroll')
    }
  })

  $('.to-register-form').click(function(){
    $('.login-content').addClass('hidden')
    $('.registration-content').removeClass('hidden')
  })
  $('.to-login-form').click(function(){
    $('.login-content').removeClass('hidden')
    $('.registration-content').addClass('hidden')
  })

  /* File load script */

  $('.file-label .file').change(function(EO){
    var files = EO.target.files || EO.dataTransfer.files;
    if (!files.length){
      return;
    }

    $(EO.target).siblings('.file-name').text(EO.target.files[0].name)

    $(EO.target).closest('.file-label').siblings('.dell-file').fadeIn("fast")
  })

  $('.dell-file').click(function(){
    $(this).siblings('.file-label').find('.file').val('')
    $(this).siblings('.file-label').find('.file-name').text('Прикрепить файл (до 5 файлов размером до 2MB)')
    $(this).fadeOut('fast')
  })


  $('.catalog--hits').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: `
    <div class="prev">
      <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.7503 8.25L11.8115 10.1887L18.109 16.5L11.8115 22.8112L13.7503 24.75L22.0003 16.5L13.7503 8.25Z" fill="#BEBEBE"/>
      </svg>
    </div>
    `,
    nextArrow:`
    <div class="next">
      <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.7503 8.25L11.8115 10.1887L18.109 16.5L11.8115 22.8112L13.7503 24.75L22.0003 16.5L13.7503 8.25Z" fill="#BEBEBE"/>
      </svg>
    </div>
    `,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  })

  $('.news-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: `
    <div class="prev">
      <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.7503 8.25L11.8115 10.1887L18.109 16.5L11.8115 22.8112L13.7503 24.75L22.0003 16.5L13.7503 8.25Z" fill="#BEBEBE"/>
      </svg>
    </div>
    `,
    nextArrow:`
    <div class="next">
      <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.7503 8.25L11.8115 10.1887L18.109 16.5L11.8115 22.8112L13.7503 24.75L22.0003 16.5L13.7503 8.25Z" fill="#BEBEBE"/>
      </svg>
    </div>
    `,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  })

  
  $('.product-slider .slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: `
    <div class="prev">
      <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.7503 8.25L11.8115 10.1887L18.109 16.5L11.8115 22.8112L13.7503 24.75L22.0003 16.5L13.7503 8.25Z" fill="#BEBEBE"/>
      </svg>
    </div>
    `,
    nextArrow:`
    <div class="next">
      <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.7503 8.25L11.8115 10.1887L18.109 16.5L11.8115 22.8112L13.7503 24.75L22.0003 16.5L13.7503 8.25Z" fill="#BEBEBE"/>
      </svg>
    </div>
    `,
    responsive: [
      {
        breakpoint: 500,
        settings: {
          arrows: false,
          dots: true
        }
      }
    ]
  })

  $('.viewed-products').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: `
    <div class="prev">
      <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.7503 8.25L11.8115 10.1887L18.109 16.5L11.8115 22.8112L13.7503 24.75L22.0003 16.5L13.7503 8.25Z" fill="#BEBEBE"/>
      </svg>
    </div>
    `,
    nextArrow:`
    <div class="next">
      <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.7503 8.25L11.8115 10.1887L18.109 16.5L11.8115 22.8112L13.7503 24.75L22.0003 16.5L13.7503 8.25Z" fill="#BEBEBE"/>
      </svg>
    </div>
    `,
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 3,
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true
        }
      }
    ]
  })


  $(window).resize(function() {

  });

  /* DEV SCRIPTS */

  $(".sitemap__opener").click(function(){
    $('.sitemap').toggleClass('open')
    $(this).toggleClass('active')
  })

  if(location.host.includes('localhost')){
    $('.sitemap__link').map(function(index,element){
      let link = $(element).attr('href')
      let re = /\/tzap/gi;
      $(element).attr('href',link.replace(re,''))
    })
  }

  // var observer = lozad('[data-lazysrc]', {
  //   threshold: 0.1,
  //   enableAutoReload: true,
  //   load: function(el) {
  //     el.src = el.getAttribute("data-lazysrc");
  //     /* el.srcset = el.getAttribute("data-lazysrc"); */
  //     el.onload = function() {
  //       $(el).addClass("load")
  //     }
  //   }
  // })
  // observer.observe()
}