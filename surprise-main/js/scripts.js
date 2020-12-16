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

/* cart script */

$(".cart_tabs_line .tab").click(function(){
  if($(this).hasClass("active")){}
  else{
    let tab = $(this).data("tab")
    $(".cart_tabs_line .tab.active").removeClass("active")
    $(this).addClass("active")

    $(".cart-wrap .tab_content.active").removeClass("active")
    $("#"+tab).addClass("active")
  }
})

$(".package_wrapper .package_radio").click(function(){
  if($(this).closest(".package").hasClass("active")){}
  else{
    $(".package_wrapper .package.active").removeClass("active")
    $(this).closest(".package").addClass("active")
  }
})

$(".parrent").click(function(){
  if($(".parrent.active").length > 0 && $(this).hasClass("active")){
    
    $(this).find(".drop").slideUp(500, "linear", function(){
      $(this).closest(".parrent").removeClass("active")
    })
    return false
  }
  let current = $(this)
  if($(".parrent.active").length > 0 ){
    $(".parrent.active").find(".drop").slideUp(200, "linear", function(){
      $(".parrent.active").removeClass("active")
      $(current).find(".drop").slideDown()
      $(current).addClass("active")
     })
    return false
  }
  if($(".parrent.active").length == 0 ){
    $(this).find(".drop").slideDown()
    $(this).addClass("active")
    return false
  }
})

$(".drop_element").click(function(EO){
  EO.stopPropagation()
  $(this).closest(".drop").slideUp(200, "linear", function(){
    $(".parrent.active").removeClass("active")
  })
  $(this).closest(".drop").find(".current").removeClass("current")
  $(this).addClass("current")
  let to = $(this).data("to"),
      value = $(this).find("span").text(),
      color = $(this).find(".color").css("background")
  $("."+to).value = value
  $(this).closest(".parrent").find(".main_name").text(value)
  $(this).closest(".parrent").find(".main_color").css("background", color)

  /* for present */
  if($(this).parent().hasClass("title_choise_list")){
    
    $(".present_sample .title").text($(this).find("span").text())
  }
  if($(this).hasClass("your_title")){
    $(".my_title").css("display","block")
    $(".textarea_title.disabel").removeClass("disabel")
    $(".my_title").on('input', function () {
     var $item = $(this),
        value = $item.val();
        $(".present_sample .title").text(value)
    });
  }else{
    $(".my_title").css("display","none")
    $(".textarea_title").addClass("disabel")
  }

})

$(".present_name").click(function(){
  let text = $(this).data("text")
  $(this).closest(".basket-item").find(".name").text(text)
})
