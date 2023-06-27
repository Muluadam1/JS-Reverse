/*
Implement a JavaScript program to reverse only the consonants in a given string, 
while leaving the vowels unchanged.*/
function reverseConsonants(str) {
    // Convert the string to an array of characters
    let characters = str.split('');

    // Define a regular expression to match consonants
    let consonantsRegex = /[bcdfghjklmnpqrstvwxyz]/i;

    // Create an array to store the consonants in the string
    let consonants = characters.filter(char => consonantsRegex.test(char));

    // Reverse the consonants array
    const reversedConsonants = consonants.reverse();

    // Iterate over the characters array and replace consonants with reversed consonants
    let index = 0;
    for (let i = 0; i < characters.length; i++) {
        if (consonantsRegex.test(characters[i])) {
            characters[i] = reversedConsonants[index];
            index++;
        }
    }

    // Join the characters back into a string
    let reversedStr = characters.join('');
    return reversedStr;
}

function main() {
    let inputString = 'Pellentesque consectetur neque nec arcu tempor, at rutrum neque fermentum.';
    let reversedString = reverseConsonants(inputString);
    console.log(reversedString);
}
main();