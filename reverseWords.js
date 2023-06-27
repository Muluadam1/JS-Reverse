/* Implement a JavaScript program to reverse the order of words in a given sentence. */

function reverseWordsOrder(sentence) {
    let words = sentence.split(' ');
    let reversedWords = [];

    for (let i = words.length - 1; i >= 0; i--) {
        reversedWords.push(words[i]);
    }

    let reversedSentence = reversedWords.join(' ');
    return reversedSentence;
}

function main() {
    let sentence = 'Coding JS is fun!';
    let reversedSentence = reverseWordsOrder(sentence);
    console.log(reversedSentence);
}
main();
