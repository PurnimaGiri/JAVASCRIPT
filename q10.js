let arr = [40, 100, 1, 5, 25, 10]
// by sorting the array

arr.sort((a,b)=>a-b)
console.log("The largest element is",arr.at(-1))

// using loop 
let largest = arr.at(0)
for(let i of arr){
    if(i > largest){
        largest = i
    }
}
console.log(largest)
