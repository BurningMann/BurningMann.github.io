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


window.onload = function() {

  $('.hamburger').click(function() {
    $(this).toggleClass('hamburger--active')
  })

  $(window).resize(function() {

  });

  $('.main-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    prevArrow: `<div class="prev"><img src="./img/icons/icon-slider-arrow-left.svg"></div>`,
    nextArrow: `<div class="next"><img src="./img/icons/icon-slider-arrow-right.svg"></div>`
  })

  if (checkInnerWidth(780)) {
    $('.news.slider-on-mobile').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: `<div class="prev"><img src="./img/icons/icon-slider-arrow-left.svg"></div>`,
      nextArrow: `<div class="next"><img src="./img/icons/icon-slider-arrow-right.svg"></div>`
    })
  }

  $('.collapse-item__header').click(function() {
    $(this).toggleClass('is-open')
    $(this).siblings('.collapse-item__body').slideToggle('fast')
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
      let re = /\/belgalanteya/gi;
      $(element).attr('href',link.replace(re,''))
    })
  }
}