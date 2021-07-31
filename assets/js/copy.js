$(document).ready(function() {
    $(window).on("scroll", function() {
        if ($(window).scrollTop() > $("header").height()) {
            $("header").css("background-color", "white");
            $("header").css("box-shadow", "0 0 8px 1px rgb(0 0 0 / 20%");
            $("header").height('100px');
            $("header .logo img").attr('src', 'assets/img/logo_colored.svg');
            $("header .list-group-item a").each(function(){
                $(this).addClass('text-dark');
            });
        }
        else {
            $("header").css("background-color", "transparent");
            $("header").css("box-shadow", "none");
            $("header").height('125px');
            $("header .logo img").attr('src', 'assets/img/logo.svg');
            $("header .list-group-item a").each(function(){
                $(this).removeClass('text-dark');
            });
        }
    });

    $(window).on("scroll", function() {
        $(".scrollsection").each(function (indexInArray) { 
            var offset = $(this).offset();
            var top = offset.top;
            var link = $('header .list-group-item')[indexInArray];
            if ($(window).scrollTop() >= top)
            {            
                $(link).prev().removeClass('active'); 
                $(link).addClass('active');
            }      
            else if($(window).scrollTop() < top)    
            {
                $(link).removeClass('active'); 
            }  
        });
       
      
    });

});