function RGBcolor() {
    var R = Math.floor(Math.random() * 256);
    var G = Math.floor(Math.random() * 256);
    var B = Math.floor(Math.random() * 256);
    var randomcolor = "rgb(" + R + "," + G + "," + B + ")";  
    console.log(randomcolor);
    document.body.style.backgroundColor = randomcolor;

  }
  
  RGBcolor();