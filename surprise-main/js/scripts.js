$(".dropp_element").click(function(){
  $(this).find(".dropp").slideToggle()
})

$(".filtred_buttons_wrapper .buttons li").click(function(){
  
  $(".filtred_buttons_wrapper .buttons li.active span").addClass("doted")
  $(".filtred_buttons_wrapper .buttons li.active").removeClass("active")
  $(this).find("span").removeClass("doted")
  $(this).addClass("active")
  
})

var $slider = $('.partners_wrapper');

if ($slider.length) {
var currentSlide;
var slidesCount;
var sliderCounter = `<div class="slider_counter"></div>`;
var updateSliderCounter = function(slick, currentIndex) {
  currentSlide = slick.slickCurrentSlide() + 1;
  slidesCount = slick.slideCount - slick.originalSettings.slidesToShow +1;
  console.log($(sliderCounter))
  $slider.find(".slider_counter").html(`<span class="current_slide">${currentSlide}</span> / <span>${slidesCount}</span>`)
  if(currentSlide == slidesCount){
      $slider.find(".next").removeClass("active")
  }else{
      $slider.find(".next").addClass("active")
  }
  if(currentSlide == 1){
      $slider.find(".prev").removeClass("active")
  }else{
      $slider.find(".prev").addClass("active")
  }
};
$slider.on('init', function(event, slick) {
  $slider.append(sliderCounter);
  updateSliderCounter(slick);
});
$slider.on('afterChange', function(event, slick, currentSlide) {
  updateSliderCounter(slick, currentSlide);
});
$slider.slick({
  slidesToShow: 8,
  slidesToScroll: 1,
  infinite: false, 
  prevArrow: '<div class="prev"></div>',
  nextArrow: '<div class="next active"></div>'     
  });
}


var $offer_slider = $('.offer_wrapper');

if ($offer_slider.length) {
let OfferCurrentSlide;
var OfferSlidesCount;
var sliderCounter = `<div class="slider_counter"></div>`;
var updateSliderCounterr = function(slick, currentIndex) {
  OfferCurrentSlide = slick.slickCurrentSlide() + 1;
  OfferSlidesCount = slick.slideCount - slick.originalSettings.slidesToShow +1;
  $offer_slider.find(".slider_counter").html(`<span class="current_slide">${OfferCurrentSlide}</span> / <span>${OfferSlidesCount}</span>`)
  if(OfferCurrentSlide == OfferSlidesCount){
      $offer_slider.find(".next").removeClass("active")
  }else{
      $offer_slider.find(".next").addClass("active")
  }
  if(OfferCurrentSlide == 1){
      $offer_slider.find(".prev").removeClass("active")
  }else{
      $offer_slider.find(".prev").addClass("active")
  }
};

$offer_slider.on('init', function(event, slick) {
  $offer_slider.append(sliderCounter);
  updateSliderCounterr(slick);
});
$offer_slider.on('afterChange', function(event, slick, OfferCurrentSlide) {
  updateSliderCounterr(slick, OfferCurrentSlide);
});
$offer_slider.slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: false, 
  prevArrow: '<div class="prev"></div>',
  nextArrow: '<div class="next active"></div>'     
  });
}

$(".category_slider_wrapper").slick({
slidesToShow: 8,
slidesToScroll: 1,
prevArrow: '<div class="prev"></div>',
nextArrow: '<div class="next"></div>'     
});