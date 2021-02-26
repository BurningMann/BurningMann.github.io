window.onload = function(){
    $(".example_slider_wrapper, .img_slider_box").slick({
        arrows:false,
        dots:true
    })
    $(".our_partners_wrapepr").slick({
        slidesToShow: 5,
        prevArrow: "<div class='prev'><img src='assets/img/svg/slider-arrow.svg'></div>",
        nextArrow: "<div class='next'><img src='assets/img/svg/slider-arrow.svg'></div>",
        responsive: [
          {
            breakpoint: 1000,
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
    $(".review_mail_slider").slick({
        slidesToShow: 4,
        prevArrow: "<div class='prev'><img src='assets/img/svg/slider-arrow.svg'></div>",
        nextArrow: "<div class='next'><img src='assets/img/svg/slider-arrow.svg'></div>",
        responsive: [
          {
            breakpoint: 1000,
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
    $(".mobile_masked").click(function(){
        $(this).val("+375()").mask('+375(00) 000-00-00');
    })

    $(window).scroll(function() {
        if($(this).scrollTop() != 0) {
            $('.to_top').fadeIn().css("display","flex");
        }else{
            $('.to_top').fadeOut();
        }   
    });
    $('.to_top').click(function() {
        $('body,html').animate({scrollTop:0},800);
    });
    $('.review_form_button').click(function() {
        $(this).toggleClass("active")
        $(this).siblings(".review_form_wrapper").slideToggle()
    });
    $(".review_form_wrapper .star").click(function(){
        $(".review_form_wrapper .star.active").removeClass("active")
        let value = $(this).find("input").val()
        for(let i = 0; i<value; i++){
          $($(".review_form_wrapper .star")[i]).addClass("active")
        }
    })
    if(window.innerWidth <= 1000){
      $(".mobile_menu").append($(".header_line nav"))
      $(".mobile_menu").append($(".header_line .header_contact"))
      $(".mobile_burger").click(function(){
        $(".mobile_menu").fadeToggle()
      })
    }
/*     $(".example_element").mouseover(function(){
      $(".preloader_img").css("display","block")
      $(".main_img").css("display","none")
      let posTop = $(this).offset().top
      let posLeft = $(this).offset().left
      let detail = $(this).data("detail")
      $(".photo_example_box").offset({left:posLeft - 97,top:posTop - 130}).css("visibility","visible")
      $(".main_img").attr("src",detail)
      var $img = $(".main_img")
      $img
          .on('load',function(){
            $(".preloader_img").css("display","none")
            $(".main_img").css("display","block")
          })
         
    }) 
    $(".example_wrapper").mouseleave(function(){
        $(".photo_example_box").css("visibility","hidden")
    }) */
};       
         
        
         
        

