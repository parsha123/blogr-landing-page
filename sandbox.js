
console.log("helo");
const navToggle = document.querySelector(".navbar_toggle");
const links = document.querySelector(".main_nav");
const intro=document.getElementById("intro");
let show=false;
navToggle.addEventListener('click', function(e){
    e.preventDefault()
    console.log("click me")
if(show==false)
{
links.classList.toggle("show_nav");
intro.style.visibility="hidden" 
show=true;
}

else if(show){
    links.classList.toggle("show_nav");
    intro.style.visibility="visible" 
    show=false;
}
})
