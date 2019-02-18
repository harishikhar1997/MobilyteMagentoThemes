require([ "jquery" ], function($){

$(window).scroll(function () {
    if( $(window).scrollTop() > $('.header.content').offset().top && !($('.header.content').hasClass('sticky'))){
    $('.header.content').addClass('sticky');
    } else if ($(window).scrollTop() == 0){
    $('.header.content').removeClass('sticky');
    }
});

	// $(".product-item").hover(function(){
 //    $(this).children(".product-item-info").animate({opacity:0.7});
 //    $(this).children(".product-item-actions").fadeIn();
    
 //    },function(){
 //    // $(".product-item").mouseleave(function(){
 //      $(this).children(".product-item-info").animate({opacity:1});
 //      $(this).children(".product-item-actions").fadeOut();
 //    }
 //    );
});



   // $(document).ready(function(){
   //  $(".contain").mouseenter(function(){
   //    $(".mask").animate({opacity:0.5},1000);
   //    $(".zoom").fadeIn(1500);
   //    $(".description").fadeIn(1500);
   //  });

   //   $(".contain").mouseleave(function(){
   //    $(".mask").animate({opacity:0},1000);
   //     $(".zoom").fadeOut();
   //    $(".description").fadeOut();
   //  });
   // });


   // $(document).ready(function(){


     
   // });
