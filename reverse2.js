/*Write a JavaScript function to reverse a given string.*/

function reverseString(str) {
    let reversedStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str.charAt(i);
    }
    return reversedStr;
}

function main() {
    let inputString = 'Hello, JavaScript!';
    let reversedString = reverseString(inputString);
    console.log(reversedString);
}
main();
