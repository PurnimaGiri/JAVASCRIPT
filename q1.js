function checkvowels(){
   let ls = prompt("enter the string : ")
    ls = ls.toUpperCase()
    ls = ls.split("")
    const v = "AEIOU"
    let s = false
    for(let i of v){
        if(ls.includes(i)){
            s = true
        }
    }
    if(s){
        console.log("yes the string contains all vowels")
    }
    else{
        console.log("no the string doesnt contain all the  vowels")
    } 
}
checkvowels()
