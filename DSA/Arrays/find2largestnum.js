/** find 2nd largest number in an unsorted array using only 1 loop */

// aked in tomorrow an Aditya birla sub Round 1

const secondLargest = (arr) =>{
    let large = 0;
    let secondlarge = 0;
      for(let i =0; i<arr.length;i++){
               if(arr[i]>large){
                secondlarge = large;
                large = arr[i];
               }else if(arr[i]!= large && arr[i]>secondlarge){
                secondlarge = arr[i];
               }
      }
      return secondlarge
}

let arr =[9,100,0,100,30]; 
console.log(secondLargest(arr));