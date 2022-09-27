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
// const navbarToggler = document.body.querySelector('.navbar-toggler');
//     const responsiveNavItems = [].slice.call(
//         document.querySelectorAll('#navbarResponsive .nav-link')
//     );
//     responsiveNavItems.map(function (responsiveNavItem) {
//         responsiveNavItem.addEventListener('click', () => {
//             if (window.getComputedStyle(navbarToggler).display !== 'none') {
//                 navbarToggler.click();
//             }
//         });
//     });
menu = document.querySelector(".menu");
menu.onclick = function(){
    navbarResponsive = document.querySelector(".navbarResponsive");
    navbarResponsive.classList.toggle("active");
    bx11 = document.querySelector(".bx-menu-alt-right");
    bx11.classList.toggle("hid");
    bx2 = document.querySelector(".bx-x");
    bx2.classList.toggle("hid");
}

// closeauto = document.querySelector(".list");
// closeauto.onclick = function(){
//     $('.navbarResponsive').removeClass('active');
//     $('.navbarResponsive').removeClass('active');
//     $('.navbarResponsive').removeClass('active');
// }