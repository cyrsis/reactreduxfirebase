//判斷順寫逆寫是不是一樣

//Is the word spell the same way as backforward and forthward
function isPalindrome (str) {
    // 步驟一：將所有的單字轉成小寫，拆成陣列，並且排除非英文單字
    str = str.toLowerCase()

    charactersArr = str.split('').filter(character => {
        return /[a-z]/.test(character)
    })

    // 步驟二：如果正著寫和反轉過來寫的內容都一樣，則回傳 true，否則 false
    return charactersArr.join('') === charactersArr.reverse().join('')
}

console.log(isPalindrome("Madam, I'm Adam"))    // true
console.log(isPalindrome("Ynotm, I'm Tony"))    // true
console.log(isPalindrome("Hello, I'm Tony"))    // true
