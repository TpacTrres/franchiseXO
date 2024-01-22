    //make thecolour shift slightly
var navItems = document.querySelectorAll('nav a')

function ColorShift(item) {
        if (item.classList.contains('color2')) {
    item.classList.remove('color2');
item.classList.add('color3');
        } else if (item.classList.contains('color3')) {
    item.classList.remove('color3');
        } else {item.classList.add('color2'); }

    }
setInterval(function () {
        for (var i = 0; i < navItems.length; i++) {
    ColorShift(navItems[i])
}
    }, 2600)


//make the Stuff shine when hover
function HoverShine(hover) {
    hover.classList.add('HoverShine')
        console.log('Element is Hovered over!')
    }
function clear(hover) {
    hover.classList.remove('HoverShine')
        console.log('Mouse event is over :((')
    }

var centerText = document.querySelector('.center_text');
var navHover = document.querySelector('.navbar')
navHover.addEventListener('mouseover', function () {
    HoverShine(centerText)
});
navHover.addEventListener('mouseout', function () {
    clear(centerText)
})