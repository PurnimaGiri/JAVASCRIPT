function zeros(){
    const arr = [0, 0, 0,4,6,0];
    for(let i = arr.length - 1 ; i>=0 ; i--){
        if(arr[i] === 0){
            arr.splice(i,1)
            arr.push(0)
        }
    }    
    console.log(arr)
    
}
zeros()
