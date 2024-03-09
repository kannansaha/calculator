function displayValue(val){
    document.getElementById('display').value+=val;

}
function displayClear(){
document.getElementById('display').value="";
}
function calculate(){
    var userInput=document.getElementById("display").value;
   
    var result=eval(userInput);
    document.getElementById("display").value=result;

}  

function deleteValue(){

    document.getElementById("display").value=document.getElementById("display").value.slice(0,-1);
  
   
}