







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




//Question-3 deliveryCost

function deliveryCost(quantity) {
    if (typeof quantity != 'number') {
        return 'check input';
    }
    let firstHundredCost = 100; let secondHundredCost = 80; let restCost = 50;
    if (quantity <= 100) {
        return answer = quantity * firstHundredCost;
    }
    else if (quantity <= 200) {
        return answer = 100 * firstHundredCost + (quantity - 100) * secondHundredCost;
    }
    else {
        return answer = 100 * firstHundredCost + 100 * secondHundredCost + (quantity - 200) * restCost;
    }
}

// output check
// let result = deliveryCost(222);
// console.log(result);

// Ques-03 End








//Question-4 perfectFriend

let friends = ['Shadesh', 'Runa', 'Mohua', 'Badhon Vai', 'Sunny Vai', 'Moly Apu'];

function perfectFriend(array) {
    if (typeof array != 'object') {
        return 'check input';
    }
    let answer = []
    for (let i = 0; i < array.length; i++) {
        if (array[i].length == 5) {
            answer.push(array[i]);
            break; // only one item 
        }
    }
    return answer;
}

// output check
// let result = perfectFriend(friends);
// console.log(result);

// Ques-04 End
