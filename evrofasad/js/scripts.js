if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
  document.querySelector('html').classList.add('mobile') 
}

if(navigator.platform.match('Mac') !== null) {
  document.body.setAttribute('class', 'OSX');
}

/* PRELOADER */
$(document).ready(function(){
  $(window).resize(function(){
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
  }
})

window.onload = function(){

  setTimeout(() => {
    bar.animate(1);
    setTimeout(() => {
      $('.preloader').addClass('preloader--load')
    }, 750);
  }, 1000);
  
  function checkInner(width){
    if(window.innerWidth <= width){
      return true
    }else{
      return false
    }
  }

  $('.burger').click(function(){
    $(this).toggleClass('burger--active')
    $('.header__main_menu').slideToggle()
  })

  /* TABS */
  $('.tab_section__tab').click(function(){
    if(!$(this).hasClass('active')){
      let tabClass  = $(this).data('tab')
      let tabContainer = $(this).closest('.tab_section')

      $(tabContainer).find('.tab_section__tab.active').removeClass('active')
      $(this).addClass('active')

      $(tabContainer).find('.tab_section__content_tab.active').removeClass('active')
      $(tabContainer).find(`.${tabClass}_tab`).addClass('active')
    }
  })






  $(window).resize(function() {
    if(checkInner(980)){
      $('.product_banner__content .img_box img').insertAfter($('.product_banner__content .description .product_banner__title'));
    }else{
      $('.product_banner__content .img_box').append($('.product_banner__content .description > img'));
    }
  });

  /* SLIDERS */
  $('.product_slider').slick({
    slidesToShow: 3,
    prevArrow: 
    `<div class="prev">
      <svg width="21" height="38" viewBox="0 0 21 38" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.1867 18.9992L1.04612 35.1399C0.519719 35.6663 0.519889 36.5199 1.04649 37.0465C1.5731 37.5731 2.42673 37.5733 2.95313 37.0469L20.0465 19.9535C20.1003 19.8997 20.1487 19.8424 20.1915 19.7824C20.5677 19.2559 20.5193 18.5193 20.0464 18.0464L2.9535 0.953505C2.4269 0.426897 1.57327 0.426731 1.04687 0.953129C0.520472 1.47953 0.52064 2.33316 1.04725 2.85976L17.1867 18.9992Z" fill="white"/>
      </svg>
    </div>`,
    nextArrow: 
    `<div class="next">
      <svg width="21" height="38" viewBox="0 0 21 38" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.1867 18.9992L1.04612 35.1399C0.519719 35.6663 0.519889 36.5199 1.04649 37.0465C1.5731 37.5731 2.42673 37.5733 2.95313 37.0469L20.0465 19.9535C20.1003 19.8997 20.1487 19.8424 20.1915 19.7824C20.5677 19.2559 20.5193 18.5193 20.0464 18.0464L2.9535 0.953505C2.4269 0.426897 1.57327 0.426731 1.04687 0.953129C0.520472 1.47953 0.52064 2.33316 1.04725 2.85976L17.1867 18.9992Z" fill="white"/>
      </svg>
    </div>`,
    responsive: [
      {
        breakpoint: 980,
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

  var advantages_slider = null
  function advantagesSlider(){
    advantages_slider = $('.advantages__wrapper').slick({
      prevArrow: 
      `<div class="prev">
        <svg width="21" height="38" viewBox="0 0 21 38" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M17.1867 18.9992L1.04612 35.1399C0.519719 35.6663 0.519889 36.5199 1.04649 37.0465C1.5731 37.5731 2.42673 37.5733 2.95313 37.0469L20.0465 19.9535C20.1003 19.8997 20.1487 19.8424 20.1915 19.7824C20.5677 19.2559 20.5193 18.5193 20.0464 18.0464L2.9535 0.953505C2.4269 0.426897 1.57327 0.426731 1.04687 0.953129C0.520472 1.47953 0.52064 2.33316 1.04725 2.85976L17.1867 18.9992Z" fill="#1C3F97"/>
        </svg>
      </div>`,
      nextArrow: 
      `<div class="next">
        <svg width="21" height="38" viewBox="0 0 21 38" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M17.1867 18.9992L1.04612 35.1399C0.519719 35.6663 0.519889 36.5199 1.04649 37.0465C1.5731 37.5731 2.42673 37.5733 2.95313 37.0469L20.0465 19.9535C20.1003 19.8997 20.1487 19.8424 20.1915 19.7824C20.5677 19.2559 20.5193 18.5193 20.0464 18.0464L2.9535 0.953505C2.4269 0.426897 1.57327 0.426731 1.04687 0.953129C0.520472 1.47953 0.52064 2.33316 1.04725 2.85976L17.1867 18.9992Z" fill="#1C3F97"/>
        </svg>`
    })
  }

  $('.glazing__wrapper').slick({
    slidesToShow: 4,
    prevArrow: 
    `<div class="prev">
      <svg width="21" height="38" viewBox="0 0 21 38" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.1867 18.9992L1.04612 35.1399C0.519719 35.6663 0.519889 36.5199 1.04649 37.0465C1.5731 37.5731 2.42673 37.5733 2.95313 37.0469L20.0465 19.9535C20.1003 19.8997 20.1487 19.8424 20.1915 19.7824C20.5677 19.2559 20.5193 18.5193 20.0464 18.0464L2.9535 0.953505C2.4269 0.426897 1.57327 0.426731 1.04687 0.953129C0.520472 1.47953 0.52064 2.33316 1.04725 2.85976L17.1867 18.9992Z" fill="#1C3F97"/>
      </svg>
    </div>`,
    nextArrow: 
    `<div class="next">
      <svg width="21" height="38" viewBox="0 0 21 38" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.1867 18.9992L1.04612 35.1399C0.519719 35.6663 0.519889 36.5199 1.04649 37.0465C1.5731 37.5731 2.42673 37.5733 2.95313 37.0469L20.0465 19.9535C20.1003 19.8997 20.1487 19.8424 20.1915 19.7824C20.5677 19.2559 20.5193 18.5193 20.0464 18.0464L2.9535 0.953505C2.4269 0.426897 1.57327 0.426731 1.04687 0.953129C0.520472 1.47953 0.52064 2.33316 1.04725 2.85976L17.1867 18.9992Z" fill="#1C3F97"/>
      </svg>
    </div>`,
    responsive: [
      {
        breakpoint: 980,
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
  $('.examples__slider').slick({
    prevArrow: 
    `<div class="prev">
      <svg width="21" height="38" viewBox="0 0 21 38" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.1867 18.9992L1.04612 35.1399C0.519719 35.6663 0.519889 36.5199 1.04649 37.0465C1.5731 37.5731 2.42673 37.5733 2.95313 37.0469L20.0465 19.9535C20.1003 19.8997 20.1487 19.8424 20.1915 19.7824C20.5677 19.2559 20.5193 18.5193 20.0464 18.0464L2.9535 0.953505C2.4269 0.426897 1.57327 0.426731 1.04687 0.953129C0.520472 1.47953 0.52064 2.33316 1.04725 2.85976L17.1867 18.9992Z" fill="#1C3F97"/>
      </svg>
    </div>`,
    nextArrow: 
    `<div class="next">
      <svg width="21" height="38" viewBox="0 0 21 38" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.1867 18.9992L1.04612 35.1399C0.519719 35.6663 0.519889 36.5199 1.04649 37.0465C1.5731 37.5731 2.42673 37.5733 2.95313 37.0469L20.0465 19.9535C20.1003 19.8997 20.1487 19.8424 20.1915 19.7824C20.5677 19.2559 20.5193 18.5193 20.0464 18.0464L2.9535 0.953505C2.4269 0.426897 1.57327 0.426731 1.04687 0.953129C0.520472 1.47953 0.52064 2.33316 1.04725 2.85976L17.1867 18.9992Z" fill="#1C3F97"/>
      </svg>
    </div>`,
  })
  $('.reviews__wrapper').slick({
    slidesToShow: 3,
    prevArrow: 
    `<div class="prev">
      <svg width="21" height="38" viewBox="0 0 21 38" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.1867 18.9992L1.04612 35.1399C0.519719 35.6663 0.519889 36.5199 1.04649 37.0465C1.5731 37.5731 2.42673 37.5733 2.95313 37.0469L20.0465 19.9535C20.1003 19.8997 20.1487 19.8424 20.1915 19.7824C20.5677 19.2559 20.5193 18.5193 20.0464 18.0464L2.9535 0.953505C2.4269 0.426897 1.57327 0.426731 1.04687 0.953129C0.520472 1.47953 0.52064 2.33316 1.04725 2.85976L17.1867 18.9992Z" fill="#1C3F97"/>
      </svg>
    </div>`,
    nextArrow: 
    `<div class="next">
      <svg width="21" height="38" viewBox="0 0 21 38" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.1867 18.9992L1.04612 35.1399C0.519719 35.6663 0.519889 36.5199 1.04649 37.0465C1.5731 37.5731 2.42673 37.5733 2.95313 37.0469L20.0465 19.9535C20.1003 19.8997 20.1487 19.8424 20.1915 19.7824C20.5677 19.2559 20.5193 18.5193 20.0464 18.0464L2.9535 0.953505C2.4269 0.426897 1.57327 0.426731 1.04687 0.953129C0.520472 1.47953 0.52064 2.33316 1.04725 2.85976L17.1867 18.9992Z" fill="#1C3F97"/>
      </svg>
    </div>`,
    responsive: [
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  })
  $('.use_section__wrapper').slick({
    slidesToShow: 3,
    prevArrow: 
    `<div class="prev">
      <svg width="21" height="38" viewBox="0 0 21 38" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.1867 18.9992L1.04612 35.1399C0.519719 35.6663 0.519889 36.5199 1.04649 37.0465C1.5731 37.5731 2.42673 37.5733 2.95313 37.0469L20.0465 19.9535C20.1003 19.8997 20.1487 19.8424 20.1915 19.7824C20.5677 19.2559 20.5193 18.5193 20.0464 18.0464L2.9535 0.953505C2.4269 0.426897 1.57327 0.426731 1.04687 0.953129C0.520472 1.47953 0.52064 2.33316 1.04725 2.85976L17.1867 18.9992Z" fill="#1C3F97"/>
      </svg>
    </div>`,
    nextArrow: 
    `<div class="next">
      <svg width="21" height="38" viewBox="0 0 21 38" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.1867 18.9992L1.04612 35.1399C0.519719 35.6663 0.519889 36.5199 1.04649 37.0465C1.5731 37.5731 2.42673 37.5733 2.95313 37.0469L20.0465 19.9535C20.1003 19.8997 20.1487 19.8424 20.1915 19.7824C20.5677 19.2559 20.5193 18.5193 20.0464 18.0464L2.9535 0.953505C2.4269 0.426897 1.57327 0.426731 1.04687 0.953129C0.520472 1.47953 0.52064 2.33316 1.04725 2.85976L17.1867 18.9992Z" fill="#1C3F97"/>
      </svg>
    </div>`,
    responsive: [
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  })

  if(checkInner(980)){
    advantagesSlider()
  }
  $(window).resize(function() {
    if(!checkInner(980) && advantages_slider){
      advantages_slider.slick('unslick')
      advantages_slider = null
    }else if(checkInner(980) && !advantages_slider){
      advantagesSlider()
    }
  });
  /* DEV SCRIPTS */

  $(".sitemap__opener").click(function(){
    $('.sitemap').toggleClass('open')
    $(this).toggleClass('active')
  })

  if(location.host.includes('localhost')){
    $('.sitemap__link').map(function(index,element){
      let link = $(element).attr('href')
      let re = /\/evrofasad/gi;
      $(element).attr('href',link.replace(re,''))
    })
  }

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
      /* el.srcset = el.getAttribute("data-lazysrc"); */
      el.onload = function() {
        $(el).addClass("load")
      }
    }
  })
  observer.observe()
    
}