let s = prompt("enter the string : ")
s = String(s).toUpperCase()
let u = ""
for(let i of s){
    if (u.includes(i)) {
        continue;
    }
    u = u + i;
    let count = 0
    for(let j of s){
        if(i===j){
            count = count + 1
        
        }
    }
    console.log(`${i} occured ${count} times`)
}
