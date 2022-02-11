

const UserAction=async()=>{

    
    var httpfrm=await fetch('https://api.quotable.io/random');
    var response=await httpfrm.json();
    var tbp=response['content'];
    var p=document.createElement('p');
    quote.textContent='';
    p.appendChild(document.createTextNode(tbp));
    quote.appendChild(p);



}



var quote=document.getElementById('quote');
var btn=document.getElementById('btn');
btn.addEventListener('click',UserAction);