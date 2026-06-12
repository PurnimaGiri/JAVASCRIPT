function missing(){
    const arr = [1,2,3,5,6,8,9,10,12]
    for(let i = 0;i<arr.length - 1;i++){
        let a = arr[i]
        let b = arr[i+1]
        if(b === a +1){
            continue
        }else{
            console.log(`the missing element is ${a+1} to be inserted at ${i+1}`)
        }
    }
}
missing()
