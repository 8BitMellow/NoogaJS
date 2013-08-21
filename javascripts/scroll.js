//SMOOTH TOP DOWN SCROLLING

//Mobile Only Navigation Scroll
// function moveTo(contentArea){
//             var goPosition = $(contentArea).offset().top;
//             $('html,body').animate({ scrollTop: goPosition}, 'slow');
//         }


//Desktop Navigation Scroll
$(document).ready(function() {

    $(".scroll-link").click(function() {
    	var ScrollOffset = $(this).attr('data-soffset');
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top-ScrollOffset + "px"
        }, {
            duration: 1500,
            easing: "swing"
        });
        return false;
    });

});