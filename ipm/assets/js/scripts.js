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


$(".reviews__slider").slick({
  infinite: true,
  fade: true,
  cssEase: 'linear',
  arrows:false,
})
$(".reviews__slider_button .width_animate_arrow").click(function(){
  $(".reviews__slider").slick('slickNext')
})
