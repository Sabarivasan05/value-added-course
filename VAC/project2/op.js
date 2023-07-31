function add(){
    let a=parseInt(document.getElementById('a').value);
    let b=parseInt(document.getElementById('b').value);
    let c=a+b;
    document.getElementById("solution").innerHTML="Solution after addition is:"+c;
}
function subt(){
    let a=parseInt(document.getElementById('a').value);
    let b=parseInt(document.getElementById('b').value);
    let c=a-b;
    document.getElementById("solution").innerHTML="Solution after subtraction is:"+c;
}