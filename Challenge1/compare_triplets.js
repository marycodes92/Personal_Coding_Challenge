

function compareTriplets(a, b) {
    let Alice = 0;
    let Bob = 0;
    let result = [];
    for(let i = 0; i < a.length; i++){
        if(a[i] > b[i]){
            Alice += 1
        } else if (a[i] < b[i]){
            Bob += 1
        } 
    }
    result.push(Alice, Bob);
    return result
}
console.log(compareTriplets([5, 6, 7], [3, 6, 10]));