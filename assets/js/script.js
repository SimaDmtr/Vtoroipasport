var scene_1 = document.getElementById('scene-1');
var parallax1 = new Parallax(scene_1);

var scene_2 = document.getElementById('special-scene');
var parallax2 = new Parallax(scene_2);
var scene_3 = document.getElementById('special-scene2');
var parallax3 = new Parallax(scene_3);
var scene_4 = document.getElementById('special-scene3');
var parallax4 = new Parallax(scene_4);

var scene_5 = document.getElementById('block-img');
var parallax5 = new Parallax(scene_5);

var scene_6 = document.getElementById('work-scene');
var parallax6 = new Parallax(scene_6);

(function () {
		var $frame = $('#cycleitems');
		var $wrap  = $frame.parent();

		// Call Sly on frame
		$frame.sly({
			horizontal: 1,
			itemNav: 'basic',
			smart: 1,
			activateOn: 'click',
			mouseDragging: 1,
			touchDragging: 1,
			releaseSwing: 1,
			startAt: 0,
			scrollBar: $wrap.find('.scrollbar'),
			scrollBy: 1,
			speed: 700,
			elasticBounds: 1,
			easing: 'easeOutExpo',
			dragHandle: 1,
			dynamicHandle: 1,
			clickBar: 1,

			// Cycling
			cycleBy: 'items',
			cycleInterval: 2500,
			pauseOnHover: 1,

		});

	}());


$('.story-slider').slick({
	//dots: true,
	infinite: true,
	centerMode: true,
	centerPadding: '33.333%',
	slidesToShow: 1,
	slidesToScroll: 1,
	speed: 600,
	swipe: false,
	focusOnSelect: true,
	prevArrow: '<button class="arrows slidePrev"><svg  viewBox="0 0 451.846 451.847"><use xlink:href="#arrowSlider"/></svg></button>',
	nextArrow: '<button class="arrows slideNext"><?xml version="1.0"?><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 451.846 451.847" style="enable-background:new 0 0 451.846 451.847;" xml:space="preserve" class=""><g id="arrowSlider"><g><path d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744   L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284   c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z"/></g></g> </svg></button>',
responsive: [{

      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        swipe: true,
        centerMode: false
      }

    }]
});

var len = $('.story-slider').slick('getSlick').slideCount;
var numAll = len;
if(numAll < 10){
      numAll = "0" + numAll;
    }else {
      numAll = numAll;
    }
$('.slider-all-num').text('/ ' + numAll);

var labelSlider = 1 ;
$('.story-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    var number = nextSlide + 1;
    if(nextSlide < 10){
      number = "0" + number;
    }else {
      number = number;
    }
    $('.slider-firs-num').text(number);
    if(labelSlider !== nextSlide + 1){
    	$('.video-block').each(function(index, el) {
	    	if($(this).find('iframe').length > 0){
	    		$(this).find('iframe').remove();
	    		$(this).removeClass('dark');
	    		$(this).find('.play').show();
	    		console.log('123');
	    	}
	    });
    }
    

    labelSlider = nextSlide + 1;
});

// console.log($('.story-slider').slick('getSlick'));


var idVideo;

function playYouModal() {
    $(".modal-video-body").append('<iframe></iframe>');
    var iframe = $(".modal-video-body").find('iframe');

    
    $('html').addClass('stop');
    $('#video-modal').fadeIn();
    if ($(this).data('play') != null) {
        idVideo = $(this).data("play");
    }
    var iframe_url = "https://www.youtube.com/embed/" + idVideo + "?enablejsapi=1&autoplay=1&autohide=1&rel=0";

    if ($(this).attr("data-params")) iframe_url += '&' + $(this).attr("data-params");
    
    iframe.attr({
            src: iframe_url,
            frameborder: '0',
            allowfullscreen: 'allowfullscreen'
        })
        .css({
            width: '100%',
            height: '100%'
        });
    
}



// клики
$('.opportunity__video-play').on('click', playYouModal);
$('.play-statistic').on('click', playYou);
$('.modal-play').on('click', playYou);

var labelVideo = false;
function playYou() {
    $(this).parents(".video-block").append('<iframe></iframe>');
    $(this).parents(".video-block").addClass('dark');
    var iframe = $(this).parents(".video-block").find('iframe');

    if ($(this).data('play') != null) {
        idVideo = $(this).data("play");
    }
    var iframe_url = "https://www.youtube.com/embed/" + idVideo + "?enablejsapi=1&autoplay=1&autohide=1&rel=0";

    if ($(this).attr("data-params")) iframe_url += '&' + $(this).attr("data-params");
    
    iframe.attr({
            src: iframe_url,
            frameborder: '0',
            allowfullscreen: 'allowfullscreen'
        })
        .css({
            width: '100%',
            height: '100%'
        });
    
    $(this).hide();
}


$('.close').on('click', function(event) {
	event.preventDefault();
	if($(this).hasClass('close-video')){
		$('.modal-video-body iframe').remove();
	}if($(this).hasClass('close-nav')){
		$(".nav").removeClass('active');
	}
	$(".overlay").fadeOut();
	$("html").removeClass('stop');
});

 $('.overlay').not('#modal-page, #test').mouseup(function(e){
    var container = $('.modal-wrap');
    if (container.has(e.target).length === 0 && !container.is(e.target)){
        $('html').removeClass('stop');
        $('.overlay').fadeOut();
    }
});

$('.consalt-1').on('click', function(event) {
	event.preventDefault();
	$("#recall-modal").fadeIn();
	$("html").addClass('stop');
});
$('.burger__wrap').on('click', function(event) {
	event.preventDefault();
	$(".nav").addClass('active');
});


function modals( visa, test){
	$(visa).on('click', function(event) {
		event.preventDefault();
		$(".overlay").fadeOut();
		$("#visa-modal").fadeIn();
		$("html").addClass('stop');
	});

	$(test).on('click', function(event) {
		event.preventDefault();
		$(".overlay").fadeOut();
		$("#test").fadeIn();
		$("html").addClass('stop');

		var msg = '';
		var action = $(this).attr('href');

		$.ajax({
		    type: "GET",
		    url: action,
		    data: msg,
		    success: function(data) {
		      $('.modal-test').html(data);
		      isTest();
		      $(".clothes-multi").chosen({
		          disable_search_threshold: 10,
		          no_results_text: "Не найдено: ",
		          allow_single_deselect: true,
		          placeholder_text_multiple: "Языки не выбраны"
		        });
		      ajaxfunct("#testStart");
		      $("#test").find(".inp-phone").mask("+7-(999)-999-99-99");
		    },
		});
	});
}

modals('.visaOpen' , ".testOpen");

$(".directions-link").not('.visa-scroll').on('click', function(event) {
	event.preventDefault();
	$(".overlay").hide();
	$("#modal-page").fadeIn();
	$("html").addClass('stop');

	var msg = '';
	var action = $(this).attr('href');

	$.ajax({
	    type: "GET",
	    url: action,
	    data: msg,
	    success: function(data) {
	      $('.modal-page-content').html(data);
	      modals( ".visaOpenModal", ".testOpenModal");
	      ajaxfunct("#modal-page form");
	      $("#modal-page").find(".clothes").chosen({disable_search_threshold: 10});
	    },
	});

});




$(document).ready(function($) {
  $(".title").not('.title-first').each(anime);
  $(".title-descr").not('.subtitle-first').each(anime);
});
function anime(){
  var offsetTop = $(this).offset().top - $(window).height();
  var thisTitle = $(this);
  $(window).scroll(function(event) {
    if($(document).scrollTop() > offsetTop ){
      thisTitle.addClass('fade_in');
    }
  });
}

$(".nav a").on("click", function (event) {
    if($(this).parents(".nav").hasClass('active')){
        $(".nav").removeClass("active");
        // $('html').removeClass('stop');
    }else{}
    var id = $(this).attr('href'), top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1000);
});



$(".visa-scroll").on("click", function (event) {
    var id = $(this).attr('href'), top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1000);
});

$('[data-fancybox="gallery"]').fancybox({
  buttons : [ 
    'slideShow',
    'zoom',
    'fullScreen',
    'close'
  ],
  animationEffect: "zoom-in-out",
  animationDuration: 600,
  transitionEffect: "circular",
  transitionDuration: 420,
 
});

$(".clothes").chosen({disable_search_threshold: 10});


// inp-phone
$(".inp-phone").mask("+7-(999)-999-99-99");

if($(window).width() > 991){
	var offsetTop = $(".nav").offset().top ;
	var thisTitle = $(".nav");
	$(window).scroll(function(event) {
	  if($(window).scrollTop() > offsetTop ){
	    
	    if(!$(".nav").hasClass('active')){
			thisTitle.addClass('active');
	    }
	  }else if($(window).scrollTop() < (offsetTop + 10) ){
	  	thisTitle.removeClass('active');
	  }
	});
}