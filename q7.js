function palindrome(){
    let s = prompt("enter the word : ")
    let palindrome = ""
    for(let i = s.length - 1;i>=0;i--){
        palindrome = palindrome + s[i]
    }
    if(s === palindrome){
        console.log("yes the string is palindrome")
    }
    else{
        console.log("no the string is not palindrome")
    }
}
palindrome()
