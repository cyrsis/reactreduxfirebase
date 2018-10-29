//Is the word spell the same way as backforward and forthward
function isPalindrome(string) {
    string = string.toLowerCase();
    var charactersArr = string.split('');
    var validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');

    var lettersArr = [];
    charactersArr.forEach(char => {
        if (validCharacters.indexOf(char) > -1) lettersArr.push(char);
    });

    return lettersArr.join('') === lettersArr.reverse().join('');
}

let answer =isPalindrome("Madam, I'm Adam");

console.log(answer)
