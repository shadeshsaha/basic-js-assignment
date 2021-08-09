//Question-2 totalSales
function totalSales(tshirtQuantity, pantQuantity, shoeQuantity) {
    if (typeof tshirtQuantity != 'number' && typeof pantQuantity != 'number' && typeof shoeQuantity != 'number') {
        return 'check input';
    }
    let tshirtPrice = 100, pantPrice = 200, shoePrice = 500;
    return answer = tshirtQuantity * tshirtPrice + pantQuantity * pantPrice + shoeQuantity * shoePrice;
}
// output check
// let result = totalSales(1, 1, 1);
// console.log(result);
// Ques-02 End