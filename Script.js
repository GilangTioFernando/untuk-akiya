let stars = document.getElementById('stars');
let meteorid = document.getElementById('meteorid');
let rocket = document.getElementById('rocket');
let dudububu = document.getElementById('dudububu');
let text = document.getElementById('text');
let button = document.getElementById('button');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    stars.style.left = value * 0.25 + 'px';
    rocket.style.top = value * -0.5 + 'px';
    text.style.marginBottom = value * 1 + 'px';
    button.style.marginBottom = value * 1 + 'px';

})

function scrollToTarget() {
    const target = document.getElementById('target').offsetTop;
    window.scrollTo({ top: target, behavior: 'smooth' });
}