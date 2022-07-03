$(document).ready(function($){
	"use strict";

	
	$(".header-top .mean").meanmenu();
	$('.slider').owlCarousel({
		items:1,
		animateOut:"fadeOut",
		animateIn:"fadeIn",
		loop:true,
		margin:false,
		nav:false,
		dots:false,
		singleItem:true,
	})
	$('.owl-carousel').owlCarousel({
		loop:true,
		singleItem:true,
		margin:30,
		dots:false,
		nav:false,
		autoplay:true,
		autoplayTimeout:1000,
		autoplayHoverPause:true,
		responsiveClass:true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:3
			},
			1000:{
				items:4
			}
		}
	})


}(jQuery));