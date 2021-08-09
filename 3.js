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