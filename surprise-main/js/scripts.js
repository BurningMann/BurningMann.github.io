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
  if(slick.activeBreakpoint != null){
    let breakepoint = slick.activeBreakpoint
    slidesCount = slick.slideCount - slick.breakpointSettings[breakepoint].slidesToShow + 1;
    
  }else{
    slidesCount = slick.slideCount - slick.originalSettings.slidesToShow + 1;
  }
  currentSlide = slick.slickCurrentSlide() + 1;
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
  nextArrow: '<div class="next active"></div>',
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 5,
      }
    },
    {
      breakpoint: 720,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite:true
      }
    }
  ]     
  });
}


var $offer_slider = $('.offer_wrapper');

if ($offer_slider.length) {
let OfferCurrentSlide;
var OfferSlidesCount;
var sliderCounter = `<div class="slider_counter"></div>`;
var updateSliderCounterr = function(slick, currentIndex) {
  if(slick.activeBreakpoint != null){
    let breakepoint = slick.activeBreakpoint
    OfferSlidesCount = slick.slideCount - slick.breakpointSettings[breakepoint].slidesToShow + 1;
    
  }else{
    OfferSlidesCount = slick.slideCount - slick.originalSettings.slidesToShow + 1;
  }
  OfferCurrentSlide = slick.slickCurrentSlide() + 1;
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
  nextArrow: '<div class="next active"></div>',
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 720,
      settings: {
        slidesToShow: 1,
      }
    },
  ]
  });
}

$(".category_slider_wrapper").slick({
slidesToShow: 8,
slidesToScroll: 1,
prevArrow: '<div class="prev"></div>',
nextArrow: '<div class="next"></div>',
responsive: [
  {
    breakpoint: 1200,
    settings: {
      slidesToShow: 6,
    }
  },
  {
    breakpoint: 720,
    settings: {
      slidesToShow: 4,
    }
  },
  {
    breakpoint: 500,
    settings: {
      slidesToShow: 2,
    }
  }
]     
});