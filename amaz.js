
function getOrder(arr, x){
    arr.sort((a, b)=> a-b)
   let n = arr.length
   let left = 0
   let right = n-1
   let mid = (right + left)/2

   while(left <= right){
        if(arr[mid] === x){
            return "Yes"
        }else if(arr[mid] < x){
            left = mid + 1
        }else{
            right = mid - 1
        }
    }
   return "No"
}

let arr = [5,7,9,3,4,1,0,25,13]

console.log(getOrder(arr, 13));