function smallest_elm(){
    let arr = [40, 100, 1, 5, 25, 10]
    let small = arr.at(0)
    for(let i of arr){
        if(i < small){
            small = i
        }
    }
    console.log(small)
}
smallest_elm()
