function flatten(){
  const arr = [1,[2,3],[4,5]]
  let new_arr = []
  for(let i = 0 ; i <arr.length; i++ ){
      if(Array.isArray(arr[i])){
          for(let j of arr[i]){
              new_arr.push(j)
          }
      }else{
          new_arr.push(arr[i])
      }
  }
  console.log(new_arr)
}
