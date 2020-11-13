/*=====================================================
                        Navigation
=======================================================*/
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() < 50) {
            //hide nav if scrollTop < 50px
            //this means upon this window object
            $("nav").removeClass("navbar-in");
            //select nav elemnt n remove its class
            $("#backtop").fadeOut(); //doesnt work last video 
            //while scrolling slowly fade out 
        } else {
            //show nav
            $("nav").addClass("navbar-in");
            //select nav elemnt n add its class
            $("#backtop").fadeIn(); //doesnt work last video 
            //while scrolling slowly fade in
        }
    });
});
/*select window n do this while srolling*/
/*self executing anonymous function*/
/*jquery classes add n remove*/
/*=====================================================
                    Nav smooth scroll(men-hover)
=======================================================*/
//scrolltop means after u scroll to about section from nav link the content or header of it is displayed little down from fixed nav//
$(function () {
    $("a.men-hover").click(function (event) {
        //select anchor tag men-hover class
        event.preventDefault();
        //prevent it from opening a link to url
        var section = $(this).attr("href");
        //if about clicked brings its link as #about

        $('html,body').animate({
            scrollTop: $(section).offset().top - 275 //decreased for liitle gap
            //animate for brought href section
            //offset gives cooordinate values n its set for scrolltop
        }, 1250, "easeInOutExpo"); //1.25 secs
    })
});