
//square
var sq = document.getElementById('square').getContext('2d');
sq.fillStyle = "red";
sq.rect(50,50,150,150);
sq.fill();

//circle
var crc = document.getElementById('circle').getContext('2d');
crc.fillStyle = "blue";
crc.arc(150,150,100,0,2*Math.PI);
crc.fill();

//color change
function changeColor() { 
    document.getElementById( 
      "square").style.backgroundColor = 
        document.getElementById( 
      "MyColorPicker").value; 
}  