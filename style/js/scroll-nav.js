// ย่อแถบ nav เมื่อเลื่อนลง
$(function(){
    $(window).scroll(function(){
        if ($(window).scrollTop() <= 40){
            $('.navbar').removeClass('scroll_navbar')
            
        }else{
            $('.navbar').addClass('scroll_navbar')
        }
    })
})

// แถบย่อเมนูขนาดมือถือ
const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
