$(document).ready(function(){
    $('#owl-one').owlCarousel({
        rtl:false,
        nav:true,
        navText: ["<div class='nav-button owl-prev'><img src='../assets/WEB/ICON/ICON WEB24.svg'></div>", "<div class='nav-button owl-next'><img src='../assets/WEB/ICON/ICON WEB14.svg'></div>"],
        dots: false,
        autoWidth:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:10
            }
        }
    })
    $('#owl-two').owlCarousel({
        rtl:false,
        nav:true,
        navText: ["<div class='nav-button owl-prev'><img src='../assets/WEB/ICON/ICON WEB24.svg'></div>", "<div class='nav-button owl-next'><img src='../assets/WEB/ICON/ICON WEB14.svg'></div>"],
        dots: false,
        autoWidth:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:10
            }
        }
    })
    $('#owl-wish').owlCarousel({
        rtl:false,
        nav:true,
        navText: ["<div class='nav-button owl-prev'><img src='../assets/WEB/ICON/ICON WEB24.svg'></div>", "<div class='nav-button owl-next'><img src='../assets/WEB/ICON/ICON WEB14.svg'></div>"],
        dots: false,
        autoWidth:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:10
            }
        }
    })
    
    $('.owl-nav').removeClass('disabled');

    $('.centers').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000
    });
})

function tab(evt, choice) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tab-home-title");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(choice).style.display = "flex";
    evt.srcElement.className += " active";
}
document.getElementById("defaultOpen").click();
document.getElementById("first").className += " active";