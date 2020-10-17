function get_paragraph_1(){
    var input= [];
    for(var i=1; i <=6; i++) {
        inputs.push(document.getElementById("para_1_line_" + i).value);
        inputs.join(". ");
        document.getElementById("display_para_1").innerHTML = inputs.join(". ");
    }
}
function get_paragraph_2(){
    var input2= [];
    for(var j=1; j <=6; j++) {
        inputs2.push(document.getElementById("para_2_line_" + j).value);
        inputs2.join(". ");
        document.getElementById("display_para_2").innerHTML = inputs2.join(". ");
    }
}