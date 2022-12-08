$(window).on("scroll", function(){
    if($(window).scrollTop() > 50) {
        $(".bg").addClass("ubah");
    } else {
        $(".bg").removeClass("ubah");
    }

});