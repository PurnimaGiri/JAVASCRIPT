function non_repeat(){
    let s = "ssshhi"
    let count = []
    let discard = []
    for(let i in s){
        if(discard.includes(s[i])){
            continue
        }
        if(!count.includes(s[i])){
            count.push(s[i])
        }
        else{
            for(let j in count){
                if(count[j]===s[i]){
                    count.splice(j,1)
                    discard.push(s[i])
                }
            }
        }
    }
    if(count.length == 0){
        console.log("no unique character")
    }else{
        console.log(count[0])
    }
    
}
non_repeat()
