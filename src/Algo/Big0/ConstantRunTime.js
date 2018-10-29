let array1 = [1, 2, 3, 4, 5, 6, 7]
let array2 = [1, 2, 3, 4, 5, 6, 7,8,9,10]

/**
 * Constant Run Time：不會隨著輸入的資料量越大而使得執行時間變長
 * Big O Notation: "O(1)"
 **/

function log(array) {
    console.log(array[0])
    console.log(array[1])

}


log(array1)
log(array2)


// ===============================================================

/**
 * Linear Run Time: 隨著資料量的增加，執行時間會等比增加
 * Big O Notation: "O(n)"
 **/
function logAll(arr) {
    for (let item of arr) {
        console.log(item)
    }
}

logAll(array1)  // 1, 2, 3, 4, 5
logAll(array2)  // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10


//Exponential Run Time (O(n^2))
/**
 * Exponential Run Time:  隨著資料量的增加，執行時間會誇張的增長
 * Big O Notation: "O(n^2)"
 * 隨著資料量的增加，執行時間會以指數成長。以下面的函式為例，
 *
 * 當我們輸入的陣列包含 5 個元素的時候，
 * 它會輸出 25 (5^2) 筆資料；
 *
 * 但是當我們數入的陣列包含 10 個元素的時候，
 * 它則會輸出 100 (10^2) 筆資料：
 *
 **/
function addAndLog (arr) {
    for (let item of arr) {
        for (let item2 of arr) {
            console.log ('First', item + item2)
        }
    }
}
addAndLog(array1)  // 25 pairs logged out
addAndLog(array2)  // 100 pairs logged out

//=============================================================================

/**
 * Logarithmic Run Time: 隨著資料量增加，執行時間雖然會增加，但增加率會趨緩
 * Big O Notation: "O (log n)"
 *
 * 隨著資料量增加，執行時間雖然會增加，
 * 但增加率會趨緩。下面的程式碼類似 findIndex 的函式，
 * 當輸入的資料有 5 個元素時，
 * 它會先切對半後，再尋找，再切半再尋找，
 *
 * 因此雖然隨著資料量增加，執行的時間會增加，但是當資料量越大時，執行速度增加的情況越不明顯
 **/

function binarySearch (arr, key) {
    let low = 0
    let high = arr.length - 1
    let mid
    let element

    while (low <= high) {
        mid = Math.floor((low + high) / 2, 10)
        element = arr[mid]
        if (element < key) {
            low = mid + 1
        } else if (element > key) {
            high = mid - 1
        } else {
            return mid
        }
    }
    return -1
}

console.log(binarySearch(array1, 3))
console.log(binarySearch(array2, 3))


