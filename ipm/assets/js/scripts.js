window.onload = function(){

  let clients = $(".clients")[0]
  let about = $(".about_company_section")[0]
  if(this.pageYOffset + (window.innerHeight / 2) >= $(clients).offset().top){
    $(clients).addClass('visible')
  }else{
    $(window).scroll(function(){
      if(this.pageYOffset + (window.innerHeight / 2) >= $(clients).offset().top ){
        $(clients).addClass('visible')
      }
    })
  }
  if(this.pageYOffset + (window.innerHeight / 1.5) >= $(about).offset().top){
    $(about).find(".number").addClass('number--black')
    $(about).find(".number").delay(500).spincrement({
      thousandSeparator: "",
      duration: 3000,
      leeway: 0,
    });
  }else{
    $(window).scroll(function(){
      if(this.pageYOffset + (window.innerHeight / 1.5) >= $(about).offset().top && !$(about).find(".number").hasClass('number--black')){
        $(about).find(".number").addClass('number--black')
        $(about).find(".number").delay(500).spincrement({
          thousandSeparator: "",
          duration: 3000,
          leeway: 0
        });
      }
    })
  }
}
$(document).on('input', '.search_box__section input', function () {
  console.log()
  if($(this).val()){
    $(".search_box__search_container .result_box").css("display","flex")
  }else{
    $(".search_box__search_container .result_box").css("display","none")
  }
});


$('.main_page_slider__wrapper').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.main_page_slider__dots_box',
  fade: true,
  speed: 1000,
  prevArrow: '<div class="prev"></div>',
  nextArrow: '<div class="next"></div>'
})

$('.main_page_slider__dots_box').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: '.main_page_slider__wrapper',
  arrows:false,
  focusOnSelect: true,
  vertical: true
});



$(".reviews__slider").slick({
  infinite: true,
  fade: true,
  cssEase: 'linear',
  arrows:false,
  adaptiveHeight: true,
})
$(".reviews__slider_button").click(function(){
  $(".reviews__slider").slick('slickNext')
})
