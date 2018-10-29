/**前置知識：Merge Sort
 Merge Sort 和 Bubble Sort 一樣，都是一種用來排序的演算法。
 Merge Sort 的演算法主要包含兩個部分：

 1. 將陣列對半拆分
   // 原本的陣列
   [3, 20, 8, 5, 1, 12, 17, 2]
   // 進行對半拆分
   [3, 20, 8, 5], [1, 12, 17, 2]
    // 再拆分
   [3, 20], [8, 5], [1, 12], [17, 2]
    // 再拆分
   [3], [20], [8], [5], [1], [12], [17], [2]

 2.將陣列排序後加以合併

   我們把上面拆分好的陣列，兩兩一組開始進行排序，
   每次排序時都是取該陣列的第一個元素進行比較：
    // 拆分好的陣列
    [3], [20], [8], [5], [1], [12], [17], [2]

    // [3] vs [20]; [8] vs [5]; [1] vs [12]; [17] vs [2]
    // 兩兩比較排序後合併，每次比較都是取當時陣列中的第一個元素進行比較
    [3, 20], [5, 8], [1, 12], [2, 17]

     // 再一次兩兩比較後排序後合併，每次比較都是取當時陣列中的第一個元素進行比較
    [3, 5, 8, 20], [1, 2, 12, 17]

    // 再一次兩兩比較後排序後合併，每次比較都是取當時陣列中的第一個元素進行比較
     [ 1, 2, 3, 5, 8, 12, 17, 20 ]
    **/

function mergeSort (arr) {

    // 遞回函式終止條件：當陣列被拆到只剩一個元素時
    if (arr.length <= 1) {
        return arr
    }


    //1. 將陣列進行對半切分
    // 接受一組尚未排序的陣列當作參數，將它們對半切分
    let middleIndex = Math.floor(arr.length / 2)
    let firstHalf = arr.slice(0, middleIndex)
    let secondHalf = arr.slice(middleIndex)

    // 遞回
    return sortBeforeMerge(mergeSort(firstHalf), mergeSort(secondHalf))
}

function sortBeforeMerge (arr1, arr2) {
    /**
     * 代入兩個已經"各自排序過"的陣列，
     * 將這兩個陣列利用 merge sort 的方式排序後，合併回傳成一個陣列
     **/
    let sortedArr = []

    //2. 將兩組各自已經排序過的陣列以 merge sort 的方式合併
    //Array.prototype.shift() 可以把移除陣列中的第一個元素，並把它存出來。
    // 當 arr1 或 arr2 都不是空陣列時
    while (arr1.length && arr2.length) {
        // 以兩陣列中第一個元素進行比較，較小的推入 sortedArr 中
        let minElement = (arr1[0] < arr2[0]) ? arr1.shift() : arr2.shift()
        sortedArr.push(minElement)
    }

    /**
     * 會跳出上面 while 的迴圈，表示 arr1 或 arr2 其中至少有一個為空陣列
     * 因此，如果 arr1 不是空陣列，則把它 concat 到 sortedArr 內；
     * 如果是 arr2 中不是空陣列，則把它 concat 到 sortedArr 內。
     **/
    sortedArr = arr1.length ? sortedArr.concat(arr1) : sortedArr.concat(arr2)
    return sortedArr
}

console.log(mergeSort([3, 20, 8, 5, 1, 12, 17, 2]))
