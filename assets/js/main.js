(function ($) {
    "use strict";

    // var fullHeight = function() {

	// 	$('.js-fullheight').css('height', $(window).height());
	// 	$(window).resize(function(){
	// 		$('.js-fullheight').css('height', $(window).height());
	// 	});

	// };
	// fullHeight();

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.nav-bar').addClass('sticky-top');
        } else {
            $('.nav-bar').removeClass('sticky-top');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });


    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Header carousel
    // $(".header-carousel").owlCarousel({
    //     autoplay: true,
    //     smartSpeed: 1500,
    //     items: 1,
    //     dots: true,
    //     loop: true,
    //     nav : true,
    //     navText : [
    //         '<i class="bi bi-chevron-left"></i>',
    //         '<i class="bi bi-chevron-right"></i>'
    //     ]
    // });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 24,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            992:{
                items:2
            }
        }
    });


   // Brands carousel
   $(".brand-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    margin: 24,
    dots: false,
    loop: true,
    nav : true,
    navText : false,
    responsive: {
        0:{
            items:2
        },
        992:{
            items:5
        }
    }
    });


    // Brands carousel
   $(".tools-technology-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    margin: 24,
    dots: false,
    loop: true,
    nav : true,
    navText : false,
    responsive: {
        0:{
            items:2
        },
        992:{
            items:4
        }
    }
    });


    // Counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // industriesSlider carousel
    $(".industriesSlider-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    margin: 24,
    dots: false,
    loop: true,
    nav : true,
    navText : false,
    responsive: {
        0:{
            items:2
        },
        992:{
            items:4
        }
    }
    });

    // Home Banner carousel
    var carousel = function() {
		$('.home-slider').owlCarousel({
        animateOut: 'slideOutDown',
        animateIn: 'heartBeat',
	    loop:true,
	    autoplay: true,
	    margin:0,
	    animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
	    nav:true,
	    dots: true,
	    autoplayHoverPause: false,
	    items: 1,
	    navText : ["<span class='bi bi-chevron-left'></span>","<span class='bi bi-chevron-right'></span>"],
	    responsive:{
	      0:{
	        items:1
	      },
	      600:{
	        items:1
	      },
	      1000:{
	        items:1
	      }
	    }
		});

	};
	carousel();

    


})(jQuery);

// Footer / Header
$(function(){
    $("#footer").load("footer.html");
    $("#navHeader").load("header.html");
});

function subscriptionForm() {
    if (document.subscription.email.value == "") {
        alert("Please provide your email!");
        document.subscription.email.focus();
        return false;
    }

    var email = document.subscription.email.value;

    const body = {
        email,
    }
    fetch('https://sourcing-techs-backend-sjyq.vercel.app/betasource/subscription-form', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    }).then((Response) => {
        document.subscription.reset();
        alert('Thank you for filling out your information!');
    });
}

function contactFormButton() {
    if (document.contactForm.name.value == "") {
        alert("Please provide your name!");
        document.contactForm.name.focus();
        return false;
    }
    if (document.contactForm.email.value == "") {
        alert("Please provide your Email!");
        document.contactForm.email.focus();
        return false;
    }


    var name = document.contactForm.name.value;
    var email = document.contactForm.email.value;
    var subject = document.contactForm.subject.value;
    var message = document.contactForm.message.value;

    const body = {
        name,
        email,
        subject,
        message,
    }
    fetch('https://sourcing-techs-backend-sjyq.vercel.app/betasource/contact-form-1', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    }).then((Response) => {
        document.contactForm.reset();
        alert('Thank you for filling out your information!');
    });
}

function contact() {
    if (document.contactForm.name.value == "") {
        alert("Please provide your name!");
        document.contactForm.name.focus();
        return false;
    }
    if (document.contactForm.email.value == "") {
        alert("Please provide your Email!");
        document.contactForm.email.focus();
        return false;
    }
   

    var name = document.contactForm.name.value;
    var email = document.contactForm.email.value;
    var number = document.contactForm.phone.value;
    var message = document.contactForm.message.value;
   
    const body = {
        name,
        email,
        number,
        message,
    }
    fetch('https://sourcing-techs-backend-sjyq.vercel.app/betasource/contact-form', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    }).then((Response) => {
        document.contactForm.reset();
        alert('Thank you for filling out your information!');
    });


}




