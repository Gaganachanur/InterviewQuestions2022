/* Find one missing number in an array*/

// the was asked in FYND Round 1

const findOneMissing = (arr) =>{
   let n = arr.length;
   let total = Math.floor((n+1)*(n+2)/2);

   for(let i =0;i<n;i++)
        total -= arr[i];
   
   return total;
}
let arr = [1,2,5,4]//missing number is 3
console.log(findOneMissing(arr));