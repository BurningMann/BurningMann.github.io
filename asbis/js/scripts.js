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

  $(window).resize(function() {

  });
  
  /* BURGER */
  $('.mobile-menu').click(function() {
    $(this).toggleClass('active')
    $('body, html').toggleClass('no-scroll')
    $(".header-menu").toggleClass("active")
    $(".search-mobile").toggleClass("mt-20")
  });


  /*BURGER DROP*/
  $(".header-menu .title_svg").click(function(){
    $(this).toggleClass("active")
    $(this).siblings(".menu__links").slideToggle().css("display", "flex")
  })

  /*viseo start*/
  $(".desc_video").click(function(){
    var video = $(this)[0];
    video.paused ? video.play() : video.pause()
  })

  /*ACCORDION*/
  $(".accordion__item-header").click(function(){
    $(this).toggleClass('active')
    $(this).siblings('.accordion__item-content').slideToggle()
  })

  $('.file-loader .input').change(function(EO){
    var files = EO.target.files || EO.dataTransfer.files;
    if (!files.length){
      return;
    }
    $(EO.target).siblings('.file-loader__file-name').text(EO.target.files[0].name)
  })


  $(".dropdown__arrow").click(function(){
    $(this).toggleClass("dropdown__arrow--active")
    $(this).siblings(".dropdown__drop").slideToggle()
  })
  
  $("body").click(function(EO){
    if(!$(EO.target).closest(".dropdown").length){
        $(".dropdown__arrow").removeClass("dropdown__arrow--active")
        $(".dropdown__drop").css("display","none")
    }
  })




  $('.values').slick({
    dots: true,
    prevArrow: '<div class="prev"><img src="./img/icons/icon-slider-arrow.svg"></div>',
    nextArrow: '<div class="next"><img src="./img/icons/icon-slider-arrow.svg"></div>',
  })

  $('.locations').slick({
    slidesToShow: 4,
    prevArrow: '<div class="prev"><img src="./img/icons/icon-slider-arrow.svg"></div>',
    nextArrow: '<div class="next"><img src="./img/icons/icon-slider-arrow.svg"></div>',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          adaptiveHeight: true
        }
      }
    ]
  })

  let similarSlider = $('.blog-detail__similar-slider').slick({
    slidesToShow: 1,
    arrows: false
  })

  $('.similar-arrows .prev').click(function(){
    $(similarSlider).slick('slickPrev');
  })

  $('.similar-arrows .next').click(function(){
    $(similarSlider).slick('slickNext');
  })
  /* DEV SCRIPTS */

  $(".sitemap__opener").click(function(){
    $('.sitemap').toggleClass('open')
    $(this).toggleClass('active')
  })

  if(location.host.includes('localhost')){
    $('.sitemap__link').map(function(index,element){
      let link = $(element).attr('href')
      let re = /\/asbis/gi;
      $(element).attr('href',link.replace(re,''))
    })
  }
    
}