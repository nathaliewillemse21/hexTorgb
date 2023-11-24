let form = document.getElementById('hexForm');
form.addEventListener('input', function () {
  convertHexToRgb();
});
function convertHexToRgb() {
  var hexInput = document.getElementById('hexInput').value;

  hexInput = hexInput.replace('#', '');
  
  if (hexInput.length === 3) {
    hexInput =
      hexInput[0] +
      hexInput[0] +
      hexInput[1] +
      hexInput[1] +
      hexInput[2] +
      hexInput[2];
  }
 
  let r = parseInt(hexInput.substring(0, 2), 16);
  let g = parseInt(hexInput.substring(2, 4), 16);
  let b = parseInt(hexInput.substring(4, 6), 16);
  document.getElementById('rgbResult').innerHTML =
    'RGB Color: ' + r + ', ' + g + ', ' + b;
}
