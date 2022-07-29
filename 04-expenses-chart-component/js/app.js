// import math

const days = document.getElementsByClassName("bar");

// Run functions on window load
window.onload = function(){
    getDay(days);
    getHeights(days);
}

// Change the colour of the bar according to the day
function getDay(days){
    const date = new Date();
    let day = date.getDay() - 1;
    if (day < 0){
        day = 0;
    }
    days[day].style.backgroundColor = "var(--cyan)";
}

// Load JSON file and use it to calculate bar heights
function getHeights(days){
    fetch('../data.json')
    .then(res => {
        if (res.ok){
            return res.json()
        }
        throw new Error('Failed to load data.')
    })
    .then(info => {
        for (let i = 0; i < days.length; i++){
            days[i].style.height = `${Math.floor(info[i].amount/5)}em`;
        }
    })
    .catch(error => console.log(error));
}
