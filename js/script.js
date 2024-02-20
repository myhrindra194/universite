const navbarClone = document.querySelector("nav").cloneNode(true);

navbarClone.classList.add("fixed-top", "bg-white", "border-bottom");

window.addEventListener("scroll",onscroll = () =>{
    if(window.scrollY > 0)
        document.querySelector("body").prepend(navbarClone);
    else
        navbarClone.remove()
})