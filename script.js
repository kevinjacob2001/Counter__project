let count=0;
function increment(){
  let val=document.getElementById("num").innerHTML;
  let num=Number(val)+1
  document.getElementById("num").innerHTML=num;
}
function decrement(){
    let val=document.getElementById("num").innerHTML;
    let num=Number(val)-1
    document.getElementById("num").innerHTML=num;
  }
