
module.exports.rgbToHex = function(r, g, b){
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}


function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}