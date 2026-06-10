let n = prompt("enter the number : ")
let num = String(n)
let num1 = ""
for(let i = (num.length-1) ; i>=0;i--){
    num1 = num1 + num[i]
}
console.log("The number in reverse is ",num1)
