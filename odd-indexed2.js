/*Create a JavaScript function to reverse the characters of odd-indexed words in a given sentence while leaving 
the even-indexed words unchanged.*/

function reverseOddIndexedWords(sentence) {
    // Split the sentence into an array of words
    let words = sentence.split(' ');

    // Iterate over the words
    for (let i = 0; i < words.length; i++) {
        // Reverse the characters in odd-indexed words
        if (i % 2 !== 0) {
            words[i] = reverseString(words[i]);
        }
    }

    // Join the words back into a sentence
    let reversedSentence = words.join(' ');
    return reversedSentence;
}

// Helper function to reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}

function main() {
    let sentence = 'Pellentesque consectetur neque nec arcu tempor, at rutrum neque fermentum.';
    let reversedSentence = reverseOddIndexedWords(sentence);
    console.log(reversedSentence);
}
main();