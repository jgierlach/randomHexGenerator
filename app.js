document.getElementById('button').onclick = displayColor

function getInt () {
    return Math.round(Math.random() * 256);
}

function toHex (int) {
    var hex = int.toString(16);
    var pad = '';
    if (int < 16) {
        pad = '0';
    }
    return pad + hex;
}

function displayColor() {
    var r = toHex(getInt());
    var g = toHex(getInt());
    var b = toHex(getInt());
    var hexColor = '#' + r + g + b;
    document.getElementsByTagName('body')[0].style.background = hexColor;
}
