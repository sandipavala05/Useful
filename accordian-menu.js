
$(document).ready(function ($) {

    $(".submenu-wrapper").has(".submenu-wrapper").each(function () {
        $(this).find("> ul > li ").append('<span class="submenu-icon"></span>');

    });

    $('header .main-menu-header>li>.submenu-wrapper>ul.sub-menu>li.menu-item-has-children > span.submenu-icon').on('click', function () {
        var $submenuWrapper = $(this).parent().find('.submenu-wrapper');
        
        if ($(this).hasClass('active')) {
            // Hide the submenu and remove active class
            $submenuWrapper.slideUp();
            $(this).removeClass('active');
        } else {
            // Hide all other submenus
            $('header .main-menu-header>li>.submenu-wrapper>ul.sub-menu>li.menu-item-has-children > span.submenu-icon').removeClass('active');
            $('header .main-menu-header>li>.submenu-wrapper>ul.sub-menu>li>.submenu-wrapper').slideUp();
            
            // Show the current submenu and add active class
            $submenuWrapper.slideDown(400);
            $(this).addClass('active');
        }
    });
});

