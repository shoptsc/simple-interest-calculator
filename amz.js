const array = [9,8,7,6,5,4,3,2,1,0]
const subArr = [[0,9], [4, 5], [3,6], [2,7], [1,8], [0,9]]

function reverseArray(arr, operation) {
    
    for (let i in operation){
        let left = arr.slice(0, operation[i][0])
        let right = arr.slice(operation[i][1]+1, )
        let valueToReverse = arr.slice(operation[i][0], operation[i][1]+1)
        valueToReverse.reverse()
        outPutArray = [...left, ...valueToReverse, ...right]
        arr = outPutArray
        // finalArray = arr
    }
    return arr
}


console.log(reverseArray(array, subArr));