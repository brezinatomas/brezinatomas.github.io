$(document).ready(function(){
    const timer = ms => new Promise(res => setTimeout(res, ms))
    $('.carousel').carousel({
        indicators: true,
        numVisible: 1,
        fullwidth: true,
        duration: 400
    });
    autoplay();

    async function autoplay() {
        $('.carousel').carousel('next');
        await timer(2000);
        setTimeout(autoplay, 4500);
    }
    $('.sidenav').sidenav();
    $('.collapsible').collapsible();
    $(".dropdown-trigger").dropdown({ hover: true, coverTrigger: false, });
    $('.tabs').tabs();
    $('.modal').modal();
    $('select').formSelect();
});

$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});

$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
        $('.nav').addClass('affix');
        $('.nav a').css('color','white');
        $('.nav p').css('color','white');
        $('.dropdown-content').css('background-color','#1e619c');
        $('.dropdown-content li a').css('color','white');
        console.log("OK");
    } else {
        $('.nav').removeClass('affix');
        $('.nav a').css('color','#1e619c');
        $('.nav p').css('color','#1e619c');
        $('.dropdown-content').css('background-color','white');
        $('.dropdown-content li a').css('color','#1e619c');
        $('.top-logo').removeClass('mini-logo');
    }
});