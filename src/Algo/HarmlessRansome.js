//Goal:
//Calculate the number of elements in an array
//
//Linear Time Complexity
//0(n)
//這是一個類似單字剪報功能的演算法，告訴它我們希望得到哪些單字（noteText），然後在一篇文章（magazineText）中去尋找看看能不能找到這些單字，而且數量要足夠。

function harmlessRansomNote(noteText, magazineText) {

    //步驟一：將輸入的字串改成陣列
    var noteArr = noteText.split(' ');
    var magazineArr = magazineText.split(' ');
    var magazineObj = {};

    // 步驟二：計算陣列中各元素的次數
    magazineArr.forEach(word => {
        // 如果這個單字還沒出現在 `magazineObj` 過，則建立它
        if (!magazineObj[word]) magazineObj[word] = 0;
        // 讓這個字的出現次數多 1
        magazineObj[word]++;
    });

    // 檢查 noteText 中的單字和數量是否在 magazineText 中足夠
    let noteIsPossible = true
    noteArr.forEach(word => {
        if (magazineObj[word] > 0) {
            magazineObj[word]--
        } else {
            noteIsPossible = false
        }
    })
    return noteIsPossible
}

let noteText1 = 'This magazine magazine'
let noteText2 = 'This magazine magazine in is magazine'
let magazineText = 'This is all the magazine text in the magazine'

console.log(harmlessRansomNote (noteText1, magazineText))  // true
console.log(harmlessRansomNote (noteText2, magazineText))  // false（"magazine" 數量不足）
