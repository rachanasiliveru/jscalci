
function add(){
  var n1=parseInt(document.getElementById('n1').value);
  var n2=parseInt(document.getElementById('n2').value);
var res=n1+n2;
document.getElementById('res').innerHTML= "result is:"+res

}
function sub(){
  var n1=document.getElementById('n1').value;
  var n2=document.getElementById('n2').value;
  var res=n1-n2;
  document.getElementById('res').innerHTML="result is:"+res


}
function mul(){
  var n1=document.getElementById('n1').value;
  var n2=document.getElementById('n2').value;
  var res=n1*n2;
  document.getElementById('res').innerHTML="result is:"+res

}
function div(){
  var n1=document.getElementById('n1').value;
  var n2=document.getElementById('n2').value;
  var res=n1/n2;
  document.getElementById('res').innerHTML="result is:"+res


}
