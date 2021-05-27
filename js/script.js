
$(window).scroll(function () {

    if ($("header").scrollTop() == $(window).scrollTop()) {
        if ($(window).width() > 600) {
            $("#menu > nav > ul").css("box-shadow", "none");
            $("#menu > nav > ul").css("display", "flex");
        }
        $("header").css("box-shadow", "none");
        if ($("#packs > h2").html() == "LES PACKS" || $("#contact > h2").html() == "CONTACT" || $("#mL > h2").html() == "MENTIONS LEGALES") {
            if ($(window).width() > 600) {
                $("#menu > nav > ul").css("background-color", "transparent");
            }
            $("header").css("background-color", "#edf3ff");
        } else {
            if ($(window).width() > 600) {
                $("#menu > nav > ul").css("background-color", "transparent");
            }

            $("header").css("background-color", "#58FEDB");
        }
    } else {
        if ($(window).width() < 600) {
            $("#menu > nav > ul").css("box-shadow", " 0px 5px 15px #1B2821");
            $("#menu > nav > ul").css("background-color", "white");
        }

        if ($('.menu-icon').hasClass('is-opened')) {
            $("header").css("box-shadow", "none");
        } else {
            $("header").css("box-shadow", " 0px 5px 30px #1B2821");
        }
        $("header").css("background-color", "white");
    }
})


$(document).ready(function () {
    $('.menu-icon').click(function (e) {
        e.preventDefault();
        $this = $(this);
        if ($this.hasClass('is-opened')) {
            $this.addClass('is-closed').removeClass('is-opened');
            $("#menu > nav > ul").css("display", "none");

        } else {
            $this.removeClass('is-closed').addClass('is-opened');
            $("#menu > nav > ul").css("display", "flex");
        }
    })
});


$(window).resize(function () {
    if ($(window).width() > 585) {
        $("#menu > nav > ul").css("box-shadow", "none");
        $("#menu > nav > ul").css("display", "flex");
        $("#menu > nav > ul").css("background-color", "transparent");

    } else {
        $("#menu > nav > ul").css("box-shadow", " 0px 5px 15px #1B2821");
        $("#menu > nav > ul").css("display", "none");
        $("#menu > nav > ul").css("background-color", "white");

    }
});

