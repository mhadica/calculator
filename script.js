function screenclick(val){
    document.getElementById("screen").value+=val;
}
console.log("working")

function clearDisplay(){
    document.getElementById("screen").value=""
}
function equalClick(){
    var text=document.getElementById("screen").value
    var result=eval(text)
    document.getElementById("screen").value=result
}