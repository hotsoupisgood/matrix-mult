
var rowP1 = '<div class="nBlc">', rowP2 = '</div>', m1, m2, sM, r, c;
function Create2DArray(rows) {
  var arr = [];

  for (var i=0;i<rows;i++) {
     arr[i] = [];
  }

  return arr;
}
function onL(){
    m1 = Create2DArray(3);
    m2 = Create2DArray(3);
}
function captureForm(){
    c = parseInt(document.forms["rCF"]["c"].value);
    r = parseInt(document.forms["rCF"]["r"].value);
    m1 = Create2DArray(r);
    m2 = Create2DArray(c);
    if (c == null || c == "" || r == null || r == "") {
        alert("a field is missing");
        return false;
    }else if (c > 10 || parseInt(c) < 1) {
        alert("to many or too little columns");
        return false;
    }else if (r > 5 || parseInt(r) < 1){
        alert("to many or too little rows");
        return false;
    }else{
        //1st
        var rowT = '', rowColT = '';
        for(var i = 0; i < parseInt(r); i++){
            rowT = '';
            for(var p = 0; p < parseInt(c); p++){
                var tR = Math.floor(Math.random()*40);
                rowT += rowP1 + tR + rowP2;
                m1[i][p] = tR;
            } rowT = '<div class="tR">' + rowT + '</div>';
            rowColT += rowT;
        }document.getElementById('sM').innerHTML = rowColT;
        //2nd
        rowT = '', rowColT = '';
        for(var i = 0; i < c; i++){
            rowT = '';
            for(var p = 0; p < r; p++){
                var tR = Math.floor(Math.random()*40);
                rowT += rowP1 + tR + rowP2;
                m1[i][p] = tR;
            } rowT = '<div class="tR">' + rowT + '</div>';
            rowColT += rowT;
        }document.getElementById('tM').innerHTML = rowColT;
        mM();
        //solved
        rowT = '', rowColT = '';
        for(var i = 0; i < c; i++){
            rowT = '';
            for(var p = 0; p < r; p++){
                var tR = sM[i][p];
                rowT += rowP1 + tR + rowP2;
            } rowT = '<div class="tR">' + rowT + '</div>';
            rowColT += rowT;
        }document.getElementById('aM').innerHTML = rowColT;
        var iC = 0;
        
        return true;
    }
}
function mM(){
    //multiply m1 by m2
    for(int x = 0; x < c; x++){
        for(int y = 0; y < r; y++){
            
        }
    }
}