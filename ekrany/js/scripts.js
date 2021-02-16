$(".example_slider_wrapper").slick({
    arrows:false,
    dots:true
})
$(".order_button").click(function(){
    $(".modal_bg").fadeIn().css("display","flex")
    $(".close") .click(function(EO){
        $(".modal_bg").fadeOut()
    })
    $("body").click(function(EO){
        if($(EO.target).hasClass("modal_bg")){
            $(".modal_bg").fadeOut()
        } 
    })
})
