const navBar = document.querySelector('.nav-bar-container');
const navItems = document.querySelectorAll('.nav-bar li a');


function scrollEffect() {
    if (window.scrollY > 100) {
        navBar.style.backgroundColor = 'blue';
    } else {
        navBar.style.backgroundColor = 'darkblue';
    }
}

function hoverEffect(event) {
    event.target.style.textDecoration = 'underline';
    event.target.style.color = 'lightblue';
}

function unhoverEffect(event) {
    event.target.style.textDecoration = 'none';
    event.target.style.color = 'white';  
}


window.addEventListener('scroll', scrollEffect);


navItems.forEach(link => {
    link.addEventListener('mouseenter', hoverEffect);  
    link.addEventListener('mouseout', unhoverEffect); 
});
