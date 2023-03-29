let text = document.getElementById('text');
let color = document.getElementById('color');
let contentText = document.getElementById('contentText');
color.addEventListener('input',function(){
    var inputColor = color.value;
    text.value = inputColor;
    contentText.style.color = inputColor;
})