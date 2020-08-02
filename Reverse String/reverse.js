const input = document.querySelector('input');
const btn = document.querySelector('button');
let para = document.createElement('p');


function reverseText() {
    var text = input.value.toLowerCase();
    let reversed = text.split("").reverse().join("");
    para.textContent = reversed;
}

function reverseTwo() {
    
}


btn.addEventListener('click', reverseText);

const sect = document.querySelector('section');
sect.appendChild(para);