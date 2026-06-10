function countvowel(){
    let s = prompt("enter the string : ")
    s = String(s).toUpperCase()
    const v = "AEIOU"
    let count = 0
    for(let i in v){
        for(let j = 0; j<=s.length;j++){
            if(v[i] === s[j]){
                count = count + 1
            }
        }
    }
    console.log("The total number of vowels are ",count)
}
countvowel()
