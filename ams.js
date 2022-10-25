// var romanToInt = function(s) {
//     let convertedObject = {'M' : 1000, 'D' :  500, 'C' : 100, 'L' : 50, 'X' : 10, 'V' : 5, 'I' : 1}
//     let valueToCheck = s.split('');
//     let total = 0
//      for(let i = 0; i < valueToCheck.length; i++){
//          let current = convertedObject[valueToCheck[i]]
//          let next = convertedObject[valueToCheck[i + 1]]
//          if(current < next){
//              total -= current
//          }else{
//              total += current
//          }
//      }
//     return total
// };
// console.log(romanToInt("CM"));

// function oddNumbers(l, r) {
//     // Write your code here
//     let oddNum = []
//     for(let i = l; i <= r; i++){
//         if(i % 2 === 0){
//             i
//         }else{
//             oddNum.push(i)
//         }
//     }
//     return oddNum
// }
// console.log(oddNumbers(2, 5))


const input = [
    "foo",
     "bar",
     "foo",
     "bar",
     "bar",
     "bar",
     "zoom"
  ];
  const result = input.reduce((total, value) => {
       total[value] = (total[value] || 0) + 1;
       return total;
  }, {});
  console.log(result);

// function sockMerchant(n, ar) {
//     // Write your code here

//     //  Set count to zero.
//     let count = 0

//     // This function help to group the data into an object using the number as the key and the count as the value.
//     const output = ar.reduce((arg, acc)=> {
//         arg[acc] = (arg[acc] || 0) + 1
//         return arg
//     }, {})

//     // Getting the values since we are trying to get the count and this return an array of number.
//     let outputValues = Object.values(output)


//     // Loop through the values we got earlier
//     for( i in outputValues){ 
//         // If the value is greater than two that makes it a pair and if the mod of the value does not return zero, then we want to subtract 1 from it and then add the answer to the count else if it's equal to zero, we just want to add the answer to the count.
//         if(outputValues[i] >= 2 && outputValues[i] % 2 !== 0){
//             count += (outputValues[i] - 1)/2
//         }else if(outputValues[i] >= 2){
//             count += outputValues[i]/2
//         }
//     }
//     return count
    
// }

// console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));