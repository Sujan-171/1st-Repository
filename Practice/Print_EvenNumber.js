function FindEven() {
    let n = 10;
    let evens = []  //Array to add even Number
    
    for (let i = 2; i <= n; i += 2) {
       evens.push(i);
    }
    return evens;
}

console.log( " Even number: " + FindEven());