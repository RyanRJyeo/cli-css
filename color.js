var rgb = require("./rgb")
var hex = require("./hex")


array = process.argv;

console.log(rgb.hexToRgb(array[2]));

/////////////////////////

if (array[2] === "rgb"){
    console.log(hex.rgbToHex(parseInt(array[3]), parseInt(array[4]), parseInt(array[5])));
}