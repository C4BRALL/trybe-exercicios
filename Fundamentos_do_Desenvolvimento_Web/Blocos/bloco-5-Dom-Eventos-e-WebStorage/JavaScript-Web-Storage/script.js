let backgroundColor = document.querySelector('#bColor');
let fontColor = document.querySelector('#fColor');

backgroundColor.onchange = function() {
    document.body.style.backgroundColor = this.value;
}
fontColor.onchange = function() {
    document.body.style.color = this.value;
}