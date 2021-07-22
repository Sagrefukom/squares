let element = document.querySelectorAll('.element');
document.addEventListener("DOMContentLoaded", function () {
    for (let i = 0; i < element.length; i++) {
      element[i].style.background = getRandomColor();
    }
  });
element.forEach(item => {
    item.addEventListener('click', addBorder)
});

function addBorder () {
element.forEach(item => {
    this.classList.add('active');

    // let blueColor ="rgb(0, 0, " + (Math.floor(Math.random() * 255)) + ")";
    // for(i = 0; i<= element.length; i++) {
    //     if(element[i].style.background == blueColor) {
    //         return alert('Синий цвет');
    //     } else {
    //         return alert('Не синий цвет!');
    //     }
    // }
});
}
function getRandomColor() {
    var rgb = 'rgb('+getRandomInt(0,255)+', '+getRandomInt(0,255)+', '+getRandomInt(0,255)+')';
    return rgb;
}


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// function getRandomColor() {
//     var hex = Math.floor(Math.random() * 0xFFFFFF);
//     return "#" + ("000000" + hex.toString(16)).substr(-6);
// }