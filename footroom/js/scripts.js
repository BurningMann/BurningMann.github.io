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


  $(window).resize(function() {

  });

}