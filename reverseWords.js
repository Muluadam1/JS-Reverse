/* Implement a JavaScript program to reverse the order of words in a given sentence. */

function reverseWordsOrder(sentence) {
    // Split the sentence into an array of words
    const words = sentence.split(' ');

    // Reverse the order of the words
    const reversedWords = words.reverse();

    // Join the reversed words back into a sentence
    const reversedSentence = reversedWords.join(' ');
    return reversedSentence;
}

// Example usage
const sentence = 'Coding JS is fun!';
const reversedSentence = reverseWordsOrder(sentence);
console.log(reversedSentence);