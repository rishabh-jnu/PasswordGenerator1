const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerSet = "abcdefghijklmnopqrstuvwxyz"
const numberSet = "1234567890"
const symbolSet = "~!@#$%^&*()_+/"

//selector
const passBox = document.getElementById("pass-box")
const totalChar = document.getElementById("total-char")
const upperInput = document.getElementById("upper-case")
const lowerInput = document.getElementById("lower-case")
const numberInput = document.getElementById("number")
const symbolInput = document.getElementById("symbol")



const getRandomData = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)]
}

const generatePassword = (password = "") => {
    if (upperInput.checked) {
        password = password + getRandomData(upperSet)
    }
    if (lowerInput.checked) {
        password = password + getRandomData(lowerSet)
    }
    if (numberInput.checked) {
        password = password + getRandomData(numberSet)
    }
    if (symbolInput.checked) {
        password = password + getRandomData(symbolSet)
    }
 
    if(password.length < totalChar.value) {
        return generatePassword(password)
    }

    passBox.innerText = truncateString(password, totalChar.value);
}
generatePassword();

document.getElementById("btn").addEventListener(
    "click",
    function() {
        generatePassword();
    }
)

generatePassword();

function truncateString(str, num) {
    if(str.length > num) {
        let subStr = str.substring(0, num);
        return subStr;
    }
    else {
        return str;
    }
}