/*Write a JavaScript function to reverse the case of each character in a given string 
(convert uppercase to lowercase and vice versa).*/
function reverseCase(str) {
    // Convert each character's case in the string
    let reversedStr = '';
    for (let i = 0; i < str.length; i++) {
        const char = str.charAt(i);
        if (char === char.toUpperCase()) {
            reversedStr += char.toLowerCase();
        } else {
            reversedStr += char.toUpperCase();
        }
    }
    return reversedStr;
}

function main(){
let inputString = 'I am one of the best fullstack develeopers in USA!';
let reversedString = reverseCase(inputString);
console.log(reversedString);
}
main();
