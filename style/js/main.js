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
menu = document.querySelector(".menu");
menu.onclick = function(){
    navbarResponsive = document.querySelector(".navbarResponsive");
    navbarResponsive.classList.toggle("active");
    bx11 = document.querySelector(".bx-menu-alt-right");
    bx11.classList.toggle("hid");
    bx2 = document.querySelector(".bx-x");
    bx2.classList.toggle("hid");
}
