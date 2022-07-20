'use strict'

const advNum = document.getElementById("adv-num");
const advBdy = document.getElementById("adv-body");
const advTrig = document.getElementById("adv-trig");

window.onload = function(){
    changeAdv();
    advTrig.addEventListener('click', changeAdv);
}

function changeAdv()
{
    fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(data => {
        let adv = data.slip;
        advNum.innerText = adv.id;
        advBdy.innerText = adv.advice;
    })
    .catch(err => {
    throw(err);
});
}