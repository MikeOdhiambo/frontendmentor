const bill = document.getElementById("bill");
const noOfPple = document.getElementById("no-pple");
const eachTip = document.getElementById("tip-amt");
const eachTtl = document.getElementById("ttl-amt");
const reset = document.getElementById("reset");
const cstmPrcnt = document.getElementsByClassName("cstm")[0];
const pple = document.getElementsByClassName("pple")[0];
const tipPrcnt = document.getElementsByClassName("tip-prcnt");
const pcntgs = [1.05, 1.1, 1.15, 1.25, 1.5];
let tipVal = 0;

window.onload = main();

function main(){
    document.addEventListener("input", (e)=>{
        e.preventDefault()

        // Get bill amount
        let billVal = Number(bill.value);
        if (bill.value == "" || isNaN(billVal)){
            billVal = 0;
        }
        // Parse and get number of people
        let ppleVal = noOfPple.value;
        if (ppleVal == "" || Number(ppleVal) >= 1){
            pple.children[0].classList.remove("error");
            if (Number(ppleVal) >= 1){
                ppleVal = Number(ppleVal);
            }
            if (ppleVal == ""){
                ppleVal = 0;
            }
        }
        else{
            pple.children[0].classList.add("error");
        }

        // Get pre-defined tip amount
        for(let i = 0; i < tipPrcnt.length; i++){
            tipPrcnt[i].addEventListener("click", (e)=>{
                for (let j = 0; j < tipPrcnt.length; j++){
                    tipPrcnt[j].classList.remove("tip-active");
                }
                tipPrcnt[i].classList.toggle("tip-active");
                tipVal = pcntgs[i];
            })
        }
        if (cstmPrcnt.value){
            tipVal = (Number(cstmPrcnt.value) + 100) / 100;
        }
        // console.log(billVal, ppleVal, tipVal);

        let psnTip = getTip(billVal, tipVal, ppleVal);
        let psnTtl = getTtl(billVal, tipVal, ppleVal);

        eachTip.textContent = psnTip;
        eachTtl.textContent = psnTtl;

        // Reset all fields
        reset.addEventListener("click", (e)=>{
            e.preventDefault()
            resetFlds()
        })
    })
}

// Calculate individual tip
function getTip(total, tip, num){
    if (num < 1){
        return 0.00;
    }
    let ttlAmt = total * tip;
    return ((ttlAmt - total) / num).toFixed(2);
}

// Calculate individual total
function getTtl(total, tip, num){
    if (num < 1){
        return 0.00;
    }
    let ttlAmt = total * tip;
    return (ttlAmt / num).toFixed(2)
    
}
// Handle field reset
function resetFlds(){
    eachTip.textContent = "0.00";
    eachTtl.textContent = "0.00";
    cstmPrcnt.value = "";
    bill.value = "";
    noOfPple.value = "";
}