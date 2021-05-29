$('.dropdown-custom').hover(function(){
    $('.bg-content-dropdown').css("opacity", "0.6")
    $('.bg-content-dropdown').css("display", "block")
}, function(){
    $('.bg-content-dropdown').css("opacity", "0")
    $('.bg-content-dropdown').css("display", "none")
})

$('.tab-label').click(function(){
    $('.tab-label').removeClass('active');
    $(this).addClass('active');
});