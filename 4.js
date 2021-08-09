
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
