/*
Create a JavaScript program to reverse the characters in odd-indexed words of a given sentence 
while preserving the even-indexed words.*/
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
    const sentence = 'Pellentesque consectetur neque nec arcu tempor, at rutrum neque fermentum.';
    const reversedSentence = reverseOddIndexedWords(sentence);
    console.log(reversedSentence);
}
main();