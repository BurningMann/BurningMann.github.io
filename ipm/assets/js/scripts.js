window.onload = function(){
  let clients = $(".clients")[0]
  let about = $(".about_company_section")[0]
  if(this.pageYOffset + (window.innerHeight / 1.5) >= $(clients).offset().top){
    $(clients).addClass('visible')
  }else{
    $(window).scroll(function(){
      if(this.pageYOffset + (window.innerHeight / 1.5) >= $(clients).offset().top ){
        $(clients).addClass('visible')
      }
    })
  }
  if(this.pageYOffset + (window.innerHeight / 1.5) >= $(about).offset().top){
    $(about).find(".number").addClass('number--black')
  }else{
    $(window).scroll(function(){
      if(this.pageYOffset + (window.innerHeight / 1.5) >= $(about).offset().top ){
        $(about).find(".number").addClass('number--black')
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

$(".reviews__slider").slick({
  infinite: true,
  fade: true,
  cssEase: 'linear',
  arrows:false,
  adaptiveHeight: true,
})
$(".reviews__slider_button .width_animate_arrow").click(function(){
  $(".reviews__slider").slick('slickNext')
})
