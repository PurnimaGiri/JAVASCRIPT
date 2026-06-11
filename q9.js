function capital(){
    let s = prompt("enter the string").trim().toLowerCase()
    let arr = s.split(" ")
    let cap = arr.map(str => {
        return str.charAt(0).toUpperCase() + str.slice(1)
    })
    console.log(cap.join(" "))
}
capital()
