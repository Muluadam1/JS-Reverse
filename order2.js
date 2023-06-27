/*Implement a JavaScript function to reverse the order of characters in each word of a given sentence.*/

function reverseWords(sentence) {
    // Split the sentence into an array of words
    let words = sentence.split(' ');

    // Iterate over each word and reverse the characters
    for (let i = 0; i < words.length; i++) {
        words[i] = reverseString(words[i]);
    }

    // Join the reversed words back into a sentence
    let reversedSentence = words.join(' ');
    return reversedSentence;
}

// Helper function to reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Example usage
let sentence = 'Implement a JavaScript function to reverse the order of characters in each word';
let reversedSentence = reverseWords(sentence);
console.log(reversedSentence);
