/**
 * 以陣列的方式儲存許多數值，
 * 這些數值是各個不同時間點股票的價格，
 * 例如，[32, 46, 26, 38, 40, 48, 42]，
 * 我們要透過演算法：
   找出在哪個時間點買進、哪個時間點賣出可以獲得最高的收益。

 演算法實做:
 在計算最高獲利時有一個重點，就是它是有時間性的，也就是說一定是先買進才能賣出，不可能先賣出，之後才買進。
 因此，在我們的演算法中，會先將陣列中的第一個元素當作買進價（buyPrice），然後去和後面的價格做比較：

 以剛剛的陣列為例，應該在價格為 26 元時買入、48 元時賣出，這時會獲得 22 元的最高收益。
 如果該天沒有獲利的可能則回傳 -1。

 當買進價低於賣出價時，就可以計算看看此時會有多少獲利（currentProfit）
 當買進價高於賣出價時，把這個賣出價改成新的買進價（changeBuyPrice）
**/

function maxStockProfit(pricesArr) {
    // declaring variables
    let maxProfit = -1;
    let buyPrice = 0;
    let sellPrice = 0;
    let changeBuyPrice = true;

    /**
     * 找出獲益最高的組合
     **/
    for (let i = 0; i < pricesArr.length; i++) {
        if (changeBuyPrice) {
            buyPrice = pricesArr[i];
        }
        sellPrice = pricesArr[i + 1];

        // 如果賣出價格 >= 買進價格，表示獲利至少 >= 0
        // 可以賣出計算獲利
        let currentProfit
        if (sellPrice >= buyPrice) {
            changeBuyPrice = false;
            currentProfit = sellPrice - buyPrice;
            if (currentProfit > maxProfit) {
                maxProfit = currentProfit;
            }
        } else {
            // 如果賣出價格 < 買進價格，表示賣出的話一定會賠錢
            // 所以不能在此時買進
            changeBuyPrice = true;
        }
    }

    return maxProfit;
}


console.log(maxStockProfit([32, 46, 26, 38, 40, 48, 42]))     // 22
console.log(maxStockProfit([10, 18, 4, 5, 9, 6, 16, 12]))     // 12
console.log(maxStockProfit([65, 54, 43, 32, 26, 15]))         // -1
