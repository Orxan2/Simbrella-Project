$(document).ready(function () {
    $(window).on("scroll", function () {
        if ($(window).scrollTop() > $("header").height()) {
            $("header").css("background-color", "white");
            $("header").css("box-shadow", "0 0 8px 1px rgb(0 0 0 / 20%");
            $("header").height('100px');
            $("header .logo img").attr('src', 'assets/img/logo_colored.svg');
            $("header .list-group-item a").each(function () {
                $(this).addClass('text-dark');
            });
        }
        else {
            $("header").css("background-color", "transparent");
            $("header").css("box-shadow", "none");
            $("header").height('125px');
            $("header .logo img").attr('src', 'assets/img/logo.svg');
            $("header .list-group-item a").each(function () {
                $(this).removeClass('text-dark');
            });
        }
    });

    $(window).on("scroll", function () {
        $(".scrollsection").each(function (indexInArray) {
            var offset = $(this).offset();
            var top = offset.top;
            var link = $('header .list-group-item')[indexInArray];
            if ($(window).scrollTop() >= top) {
                $(link).prev().removeClass('active');
                $(link).addClass('active');
            }
            else if ($(window).scrollTop() < top) {
                $(link).removeClass('active');
            }
        });


        if ($(window).scrollTop() >= $("#engineers").offset().top - $("#engineers").height() / 2) {
            $("#engineers").css('animation-play-state', 'unset');
        }
        if ($(window).scrollTop() >= $("#logos").offset().top - $("#logos").height() / 2) {
            $("#logos").css('animation-play-state', 'unset');
        }
       
        if ($(window).scrollTop() >= $("#news").offset().top - $("#news").height() / 2) {
            $("#news").css('animation-play-state', 'unset');
        }
        if ($(window).scrollTop() >= $("#jobs").offset().top - $("#jobs").height() / 2) {
            $("#jobs .slide-up").each(function (index, element) {
                element == this;
                $(element).css('animation-play-state', 'unset')
            });
        }
        if ($(window).scrollTop() >= $("#dark-city").offset().top - $("#dark-city").height() / 2) {
            $("#dark-city .tech").css('animation-play-state', 'unset');            
                $("#dark-city .slide-down").slideDown(1000);
           }

    });
    // console.log( $(`footer a[data-id = ${$('footer ul').attr('id')}`));
    $('footer .cities .list-group-item:not(:last-of-type) a').each(function (index, element) {
    element == this;
   
$(element).click(function (e) {     
    e.preventDefault();
    
    console.log($(element).attr('data-id'));
   console.log( $(`footer [id = ${$(element).attr('data-id')}`));

   $('footer ul.list-group:not(.cities)').each(function (index, element){
       $(element).css('display','none');
   });
     
   $(`footer [id = ${$(element).attr('data-id')}`).css('display','block');
   
});
    
});
    
    
});
