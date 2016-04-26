//animate

new WOW().init();




//resize viewport

var viewportWidth = $(window).width();
var viewportHeight = $(window).height();

$(window).resize(function() {

});





// smooth scroll to point

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 750);
        return false;
      }
    }
  });
});












// slick

$(document).ready(function(){
  $('.nav-carousel').slick({
  dots: false,
  infinite: false,
  slidesToShow: 5,
//  slidesToScroll: 5,
//  centerMode: true,
  variableWidth: true,
  arrows: false,
  swipeToSlide: true
  });
});








// fixed menu after scrolling

//jQuery(document).ready(function($) {
  
  //  var navbar = $('.anchor-nav'),
	//	mainNav = $('.yamm'),
    //    distance = navbar.offset().top,
	//	previousScroll = 0,
    //    $window = $(window);

		//anchor nav check
  //  $window.scroll(function() {

		
		
		//main nav check
	  // var currentScroll = $(this).scrollTop();
      // if (currentScroll > previousScroll){
     //      console.log('scroll down');
		   
		  // mainNav.removeClass('navbar-fixed-top');
       //    $("body").css("padding-top", "0px");
		   
		   //		navbar.removeClass('navbar-fixed-top mtop-70').addClass('navbar-fixed-top');
		   

		   
	  // } else if ($window.scrollTop() >= distance) {	
    //     mainNav.removeClass('navbar-fixed-top').addClass('navbar-fixed-top');
	//	navbar.removeClass('navbar-fixed-top').addClass('navbar-fixed-top mtop-70');
//
   //         $("body").css("padding-top", "70px");
		//	
  //     } else {
//		   console.log('scroll up');
		  // 
		//    mainNav.removeClass('navbar-fixed-top');
  //          $("body").css("padding-top", "0px");
//
    //   }
  //     previousScroll = currentScroll;
//
  //  });
//});


// yamm dropdown & anchor-nav fix

$('.dropdown-toggle').click(function() {
  $('.anchor-nav').toggleClass('static');
  $('.dropdown-menu').toggleClass('submenu');
});


$(document).click( function(){
  $('.anchor-nav').removeClass('static');
  $('.dropdown-menu').removeClass('submenu');
});






// counter up

jQuery(document).ready(function($) {
  $('.counter').counterUp({
    delay: 10,
    time: 1500,
    triggerOnce: true
  });
});





// carousel

$('.carousel').carousel()





// grids

$('.eq-height').responsiveEqualHeightGrid();








// color picker

$(".colorPick").click(function(){
      $("#colorChoice").attr('src', 
        $(this).attr('src'));
    });







// pull down row

$('.pull-down').each(function() {
  var $this = $(this);
  $this.css('margin-top', $this.parent().height() - $this.height())
});





// yamm - This code will prevent unexpected menu close when using some components (like accordion, forms, etc)

$(document).on('click', '.yamm .dropdown-menu', function(e) {
  e.stopPropagation()
})
