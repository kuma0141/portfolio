$(document).ready(function(){
    $(".selection").hide('3000');
    $(".selection-button").click(function(){
        $(".footer.row").removeClass("fixed-bottom");
        var value = $(this).attr("data-filter");
        $(".selection").not("."+value).hide("3000");
        $(".selection").filter("."+value).show("3000");
        $(".selection-button").removeClass("active");
        $(this).addClass("active");
        $(".demo-reel").addClass("hide-reel");
    });
});