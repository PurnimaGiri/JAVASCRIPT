function remove_spaces(){
   let s = prompt("enter the string : ")
   let removed = ""
   let arr = s.split(" ")
   for(let i of arr){
       removed = removed + i
   }
   console.log(removed)
}
remove_spaces()
