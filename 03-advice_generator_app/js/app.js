const advNum = document.getElementById("adv-num");
const advBdy = document.getElementById("adv-body");

window.onload = changeAdv();

function changeAdv()
{
    let advice = fetch('https://api.adviceslip.com/advice')
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