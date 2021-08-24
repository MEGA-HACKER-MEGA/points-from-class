var value = document.getElementById("input").value;
var password = "Classteacherhere";
var body = document.getElementById("hiddeniframe");
function show() {
if(value == password){
    document.getElementById("hiddeniframe").style.opacity = "0.5";
}
}