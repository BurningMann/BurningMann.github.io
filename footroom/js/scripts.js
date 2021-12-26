window.onload = function(){

  function checkInner(width){
    if(window.innerWidth <= width){
      return true
    }else{
      return false
    }
  }

  $('.catalog-filter__item-head').click(function(){
    $(this).toggleClass('active')
    $(this).siblings('.catalog-filter__item-body').slideToggle()
  })


  $('.filter-mobile-opener').click(function(){
    $(this).toggleClass('active')
    $(this).siblings('.catalog-filter').slideToggle()
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

  $('.catalog--popular').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: `
    <div class="prev">
      <img src="./img/icons/icon-slider-arrow.svg">
    </div>
    `,
    nextArrow:`
    <div class="next">
      <img src="./img/icons/icon-slider-arrow.svg">
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
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  })

  if ($('.navslider .navslider__item').length <= 4) {

    $('.navslider').addClass('static')  
  }

  $('.product-slider .slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.product-slider .navslider',
    responsive: [
      {
        breakpoint: 780,
        settings: {
          dots: true
        }
      }
    ]
  })
  $('.product-slider .navslider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    focusOnSelect: true,
    asNavFor: '.product-slider .slider'
  })

  


  $(window).resize(function() {

  });

}