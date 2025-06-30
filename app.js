// function myFun () {
// let name = document.getElementById('one').value;
// let nameSplit = name.split('');
// let nameReverse = nameSplit.reverse();
// let nameJoin = nameReverse.join('');

// if (name == nameJoin){
// document.getElementById('print').innerHTML = 'Yes, '  + name + ' is palindrome';
// }
// else {
//     document.getElementById('print').innerHTML = 'No, '  + name + ' is not palindrome';
// }
// }


const txtInput = document.querySelector(".content input");
const checkBtn = document.querySelector(".content button");
const outputTxt = document.querySelector(".output-txt");
let filterInput;

txtInput.addEventListener("keyup", () => {
    filterInput = txtInput.value.toLowerCase().replace(/[^A-Z0-9]/ig, ""); 
    if(filterInput) {
        return checkBtn.classList.add("active");
    }
    outputTxt.style.display = "none";
    checkBtn.classList.remove("active");
});

checkBtn.addEventListener("click", () => {
    let reverseInput = filterInput.split("").reverse().join("");
    outputTxt.style.display = "block";
    if(filterInput != reverseInput) {
        let notPalindrome =  outputTxt.innerHTML = `No, <span>'${txtInput.value}'</span> isn't a palindrome!`;
        txtInput.value = "";
        return notPalindrome;
    }
    outputTxt.innerHTML = `Yes, <span>'${txtInput.value}'</span> is a palindrome!`;
    txtInput.value = "";
});