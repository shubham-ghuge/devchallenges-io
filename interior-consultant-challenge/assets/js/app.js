var btn = document.getElementById('mobile-btn')
var menu = document.getElementById('menuMobile')
var spanOne = document.getElementById('one')
var spanTwo = document.getElementById('two')
var spanThree = document.getElementById('three')

btn.addEventListener('click', openNav)
function openNav() {
    var test = menu.style.opacity
    if (test == 0) {
        menu.style.opacity = '1';
        menu.style.zIndex = '998';
        spanOne.style.transform = 'rotate(45deg)';
        spanTwo.style.transform = 'rotate(-45deg)';
        spanThree.style.transform = 'translateX(-100%)';
        spanThree.style.opacity = '0';
    } else {
        menu.style.opacity = '0%';
        menu.style.zIndex = '-1';
        spanOne.style.transform = 'rotate(0deg)';
        spanTwo.style.transform = 'rotate(0deg)';
        spanThree.style.transform = 'translateX(0%)';
        spanThree.style.opacity = '1';
    }
}