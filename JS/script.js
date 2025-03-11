const navBar = document.querySelector('.nav-bar-container');
const navItems = document.querySelectorAll('.nav-bar li a');
const sections = document.querySelectorAll('.page');

function scrollEffect() {
    let scrollPosition = window.scrollY;

 if (scrollPosition > 1200) {
        navBar.style.background = "linear-gradient(to right,rgb(7, 45, 83),rgb(1, 75, 124))"; 
    } else if (scrollPosition > 600) {
        navBar.style.background = "linear-gradient(to right,rgb(7, 45, 83),rgb(26, 2, 63))"; 
    } else {
        navBar.style.background = "linear-gradient(to right,rgb(7, 45, 83),rgb(5, 43, 30))"; 
    }
}

function hoverEffect(event) {
    event.target.style.textDecoration = 'underline';
    event.target.style.color = 'yellow';
}


function unhoverEffect(event) {
    event.target.style.textDecoration = 'none';
    event.target.style.color = 'white';  
}






window.addEventListener("scroll", () => {
    scrollEffect();
    revealSections();
});
navItems.forEach(link => {
    link.addEventListener("mouseenter", hoverEffect);
    link.addEventListener("mouseleave", unhoverEffect);
});


