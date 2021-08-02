
/* Map svg begin */
$(document).on('mouseover', '.map_svg svg path', function (e) {
    var _this = $(this),
    _this_country = _this.attr("id"),
    _country_name = _this.attr("title");

    $("[data-city="+_this_country+"]").attr("fill", "#fff");

    if (_this.data("status") == "enable_me") {

    		var _color_fill = $("[data-city="+_this_country+"]").eq(0).data("fill");
        _this.attr("fill", _color_fill);


        console.log($("[data-city="+_this_country+"]").offset().left);

        $(".flying_country").addClass("show_me");
        $(".flying_country").css("left", ($("[data-city="+_this_country+"]").position().left - $(".map_svg").offset().left + 11 )+"px");
        $(".flying_country").css("top", ($("[data-city="+_this_country+"]").position().top - $(".map_svg").offset().top - 35)+"px");

        $(".flying_country span").text(_country_name);
        // $(".flying_country img").attr("src", simbrella_file_url+"img/flags/"+_this_country+".png");
        $(".flying_country img").attr("src", "assets/img/Flag_of_Russia.png");

    }

}).on('mouseleave ', '.map_svg svg path', function (e) {
    var _this = $(this),
    _this_country = _this.attr("id");
    if (_this.data("status") == "enable_me") {
        _this.attr("fill", "#E5E9F4")
    }

    $("[data-city="+_this_country+"]").eq(0).attr("fill", $("[data-city="+_this_country+"]").eq(0).data("fill"));
    $("[data-city="+_this_country+"]").eq(1).attr("fill", $("[data-city="+_this_country+"]").eq(1).data("fill"));
    $("[data-city="+_this_country+"]").eq(2).attr("fill", $("[data-city="+_this_country+"]").eq(2).data("fill"));
    $("[data-city="+_this_country+"]").eq(3).attr("fill", $("[data-city="+_this_country+"]").eq(3).data("fill"));


    $(".flying_country").removeClass("show_me");
});


$(document).on('mouseover', '.map_svg svg circle, .map_svg svg .half', function (e) {
    var _this = $(this),
    _this_country = _this.data("city"),
    _country_name = $("#"+_this_country).attr("title");

    $("[data-city="+_this_country+"]").attr("fill", "#fff");

    console.log(_this_country)

    if ($("#"+_this_country).length) {
        //$("#"+_this_country).attr("fill", "#2D3192");

        var _color_fill = $("[data-city="+_this_country+"]").eq(0).data("fill");
        $("#"+_this_country).attr("fill", _color_fill);

        console.log($("[data-city="+_this_country+"]").offset().left);

        $(".flying_country").addClass("show_me");
        $(".flying_country").css("left", ($("[data-city="+_this_country+"]").position().left - $(".map_svg").offset().left + 11 )+"px");
        $(".flying_country").css("top", ($("[data-city="+_this_country+"]").position().top - $(".map_svg").offset().top - 35)+"px");

        $(".flying_country span").text(_country_name);
        $(".flying_country img").attr("src", "assets/img/Flag_of_Russia.png");
        // $(".flying_country img").attr("src", simbrella_file_url+"img/flags/"+_this_country+".png");

    }

}).on('mouseleave ', '.map_svg svg circle, .map_svg svg .half', function (e) {
   var _this = $(this),
    _this_country = _this.data("city");
    $("#"+_this_country).attr("fill", "#E5E9F4");
    $("[data-city="+_this_country+"]").eq(0).attr("fill", $("[data-city="+_this_country+"]").eq(0).data("fill"));
    $("[data-city="+_this_country+"]").eq(1).attr("fill", $("[data-city="+_this_country+"]").eq(1).data("fill"));
    $("[data-city="+_this_country+"]").eq(2).attr("fill", $("[data-city="+_this_country+"]").eq(2).data("fill"));
    $("[data-city="+_this_country+"]").eq(3).attr("fill", $("[data-city="+_this_country+"]").eq(3).data("fill"));
    $(".flying_country").removeClass("show_me");
});
/* Map svg end */
// $(document).ready(function () {
//     const datas = [
//         {
//             id: 1,
//             country: "Russia",
//             cityCode: 'RU',
//             flag: "assets/img/Flag_of_Russia.png"
//         }
//     ]
//     let infobox = document.createElement('div');
//     let image = document.createElement('img');
//     $(infobox).addClass("infobox");
//     $(image).attr('src', datas[0].flag);
//     $(infobox).css('display', 'none');

//     infobox.innerText = datas[0].country;
//     infobox.append(image);
//     $('#RU').append(infobox);

//     console.log($('[data-city = "RU"]'));
//     $('[data-city = "RU"]').each(function (index, element) {
//         element == this;
//         $(element).on('mouseenter', function () {
//             console.log('element');
//             $(infobox).css('display', 'block');
//         });
//         $(element).on('mouseleave', function () {
//             console.log('element');
//             $(infobox).css('display', 'none');
//         });


//     });

// });