const menu = document.querySelector(".hamburger");
const nav_menu = document.querySelector(".nav_menu");

menu.addEventListener("click", ()=>{
    menu.classList.toggle("open");
    nav_menu.classList.toggle("show");
});


//when the scroll is greater than 50 viewport height add the scroll-header class to the tag
const scrollHeader = ()=>{
    const header =  document.getElementById("header");
    if(this.scrollY >= 50) {
        header.classList.add("header_scroll");
    }else {
        header.classList.remove("header_scroll")
    }
};

window.addEventListener("scroll", scrollHeader);

// scroll reveal
function scrollReveal(){
    const scrollUp = document.getElementById('scroll');
    // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 200) scrollUp.classList.add('show'); else scrollUp.classList.remove('show')
}

window.addEventListener('scroll', scrollReveal)

// Designed by ABOK MADAKI 