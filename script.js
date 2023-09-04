const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");

const checkNumberButton = document.querySelector("#check-number");
const outputBox = document.querySelector("#output-box");
function compareValues(sum,luckyNumber){
    if(sum%luckyNumber ===0){
        outputBox.value="Your Birthday is Lucky🥳";
    }
    else{
        outputBox.value="Oops!! your birthday is not lucky😔"; 
    }

}
function checkNumberIsLucky(){
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
    if(sum&&dob)
    compareValues(sum,luckyNumber.value);
    else
    outputBox.value="Please add both the fields😏!!!"; 
}
function calculateSum(dob){
    dob = dob.replaceAll("-","");
    let sum =0;
     for(let index=0; index<dob.length;index++){
        sum = sum + Number(dob.charAt(index));
     }
return sum;
}
checkNumberButton.addEventListener('click',checkNumberIsLucky)