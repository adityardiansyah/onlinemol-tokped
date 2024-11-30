function hideElement(){
    $('.sidebar-menu').addClass('minimize');
    $('.tab-menu').addClass('hide');
    $('.icon-gj').addClass('hide');
    $('.panel-title').addClass('hidden-after');
    $('.icon-expand').css("transform", "rotate(180deg)");
    $('.main-sidebar').addClass('collapse-sidebar');
    $('.main-container-seller').css("padding-left", "72px");
}

function showElement(){
    $('.minimize').removeClass('minimize');
    $('.collapse-sidebar').removeClass('collapse-sidebar');
    $('.hide').removeClass('hide');
    $('.not-open').removeClass('not-open');
    $('.hidden-after').removeClass('hidden-after');
    $('.icon-expand').css("transform", "rotate(360deg)"); 
    $('.main-container-seller').css("padding-left", "230px");
}

$('#expand').click(function(){
    let check = $('#sidebar-left').hasClass('is-open');
    if(check){
        let parent = $(this).parent().parent();
        parent.removeClass('is-open');
        parent.addClass('not-open');

        hideElement();
    }else{
        $('#sidebar-left').addClass('is-open');
        showElement();
    }
});

$('#sidebar-content').hover(function(){
    let check = $('#sidebar-left').hasClass('is-open');
    if(!check){
        showElement()
    }
    
},function(){
    let check = $('#sidebar-left').hasClass('is-open');
    if(!check){
        hideElement();
    }
})

