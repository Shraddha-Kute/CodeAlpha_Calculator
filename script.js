let input=document.getElementById("input");
let buttons=document.querySelectorAll('button');

let string='';
let arr.forEach(button=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='='){
            string=eval(string);
        }
    })
})