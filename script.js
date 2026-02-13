// Simple scroll animation
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
    sections.forEach(sec => {
        const top = window.scrollY + window.innerHeight / 1.3;
        if(top > sec.offsetTop){
            sec.style.opacity = 1;
            sec.style.transform = "translateY(0)";
        }
    });
});
sections.forEach(sec => {
    sec.style.opacity = 0;
    sec.style.transform = "translateY(50px)";
    sec.style.transition = "0.6s ease-out";
});
