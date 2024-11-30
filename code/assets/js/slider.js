// Add initial active class
$('.slide').first().addClass('active');
// Show first slide
$('.active').show();

// Next Handler
$('#next-product').on('click', nextSlide);

// Prev Handler
$('#prev-product').on('click', prevSlide);
// Switch to next slide
function nextSlide(){
    $('.slide.active').removeClass('active').addClass('oldActive');
    if($('.oldActive').is(':last-child')){
        $('.slide-product>.slide').first().addClass('active');
    } else {
        $('.oldActive').next().addClass('active');
    }
    $('.oldActive').removeClass('oldActive');

    $('.thumb-slider>a.active').removeClass('active').addClass('nonActive');
    if($('.nonActive').is(':last-child')){
        $('.thumb-slider>a').first().addClass('active');
    } else {
        $('.nonActive').next().addClass('active');
    }
    $('.nonActive').removeClass('nonActive');
}

// Switch to prev slide
function prevSlide(){
    $('.slide.active').removeClass('active').addClass('oldActive');
    if($('.oldActive').is(':first-child')){
        $('.slide-product>.slide').last().addClass('active');
    } else {
        $('.oldActive').prev().addClass('active');
    }
    $('.oldActive').removeClass('oldActive');
    
    $('.thumb-slider>a.active').removeClass('active').addClass('nonActive');
    if($('.nonActive').is(':first-child')){
        $('.thumb-slider>a').last().addClass('active');
    } else {
        $('.nonActive').prev().addClass('active');
    }
    $('.nonActive').removeClass('nonActive');
}


// Next Handler
$('#next-ulasan').on('click', nextSlideUlasan);

// Prev Handler
$('#prev-ulasan').on('click', prevSlideUlasan);
// Switch to next slide
function nextSlideUlasan(){
    $('.slide-ulasan.active').removeClass('active').addClass('oldActive');
    if($('.oldActive').is(':last-child')){
        $('.slide-ulasan').first().addClass('active');
    } else {
        $('.oldActive').next().addClass('active');
    }
    $('.oldActive').removeClass('oldActive');

    $('.thumb-slider-ulasan>a.active').removeClass('active').addClass('nonActive');
    if($('.nonActive').is(':last-child')){
        $('.thumb-slider-ulasan>a').first().addClass('active');
    } else {
        $('.nonActive').next().addClass('active');
    }
    $('.nonActive').removeClass('nonActive');
}

// Switch to prev slide
function prevSlideUlasan(){
    $('.slide-ulasan.active').removeClass('active').addClass('oldActive');
    if($('.oldActive').is(':first-child')){
        $('.slide-ulasan').last().addClass('active');
    } else {
        $('.oldActive').prev().addClass('active');
    }
    $('.oldActive').removeClass('oldActive');
    
    $('.thumb-slider-ulasan>a.active').removeClass('active').addClass('nonActive');
    if($('.nonActive').is(':first-child')){
        $('.thumb-slider-ulasan>a').last().addClass('active');
    } else {
        $('.nonActive').prev().addClass('active');
    }
    $('.nonActive').removeClass('nonActive');
}
