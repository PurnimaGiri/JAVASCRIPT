function longest_word(){
    let s = prompt("enter the string : ")
    let arr = s.split(" ")
    let arr_length = []
    for(let i of arr){
        arr_length.push(i.length)
    }
    let max_len = Math.max(...arr_length)
    let index = arr_length.indexOf(max_len)
    console.log("The longest word is",arr[index])
    console.log("length - ",max_len)
}
longest_word()
