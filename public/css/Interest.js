
function fun(){
    let v=document.getElementById('val').value;
    let v1=document.getElementById('val1').value;
    let v2=document.getElementById('val2').value;
    
    let ans=(v*v1*v2)/100;
    console.log(ans);
    document.getElementById('total').innerText=ans;

}