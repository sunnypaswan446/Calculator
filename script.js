let string= document.querySelector('.Result_preview')
function clickedval(e){
string.value +=e.innerText;
}

function digit(){
    let c =string.value;
    string.value=c.slice(0,-1);
}

function clearval(){
    string.value='';
}
function calculate(){
    console.log(typeof(string.value))
    string.value=eval(string.value)
}