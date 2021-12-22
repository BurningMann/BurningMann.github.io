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