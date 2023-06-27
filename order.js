/*Write a JavaScript program to reverse the words in a sentence while 
maintaining the order of characters within each word.*/

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

function main() {
    let sentence = 'Pellentesque consectetur neque nec arcu tempor, at rutrum neque fermentum.';
    let reversedSentence = reverseWords(sentence);
    console.log(reversedSentence);
}
main();