const passwordBox = document.getElementById("password");
const lenght = 12;

const upperCase = "ABCDEFHGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbols = "@#$%^&*()_+<>?";


const allChars = upperCase + lowerCase + number + symbols

function createRandomPassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)]
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)]
    password += number[Math.floor(Math.random() * number.length)]
    password += symbols[Math.floor(Math.random() * symbols.length)]


    while(lenght > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)]

    }
    passwordBox.value = password;



}


function copyPass(){
    passwordBox.select();
    document.execCommand("copy");
}