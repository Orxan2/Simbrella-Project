window.addEventListener('load',()=>{
const header = document.querySelector('header');
const navLinks = header.querySelectorAll('a');
const image = header.querySelector('.logo img');

window.addEventListener('scroll',()=>{
    if (window.scrollY>header.offsetHeight) {
        header.style.backgroundColor = 'white';
        header.style.height = '100px';
        image.setAttribute('src','assets/img/logo_colored.svg');
        console.log(header.offsetHeight);
        navLinks.forEach(navLink => {
            navLink.style.color = '#222222';
        });
    }  
    else{
        header.style.backgroundColor = 'transparent';
        image.setAttribute('src','assets/img/logo.svg');
        header.style.height = '125px';
        console.log(header.offsetHeight);
        navLinks.forEach(navLink => {
            navLink.style.color = '#eeeeee';
        });
    }
});



});