function unique_arr(arr) {
    let newArr = arr.reduce(function (accumulator, element) {
        if (accumulator.indexOf(element) === -1) {
            accumulator.push(element)
        }
        return accumulator
    }, [])
    return newArr
}

let num = [1, 2, 2, 1, 4, 3, 76];

console.log(unique_arr(num));
//[ 1, 2, 4, 3, 76 ]
