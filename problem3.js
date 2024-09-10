function deleteInvalids(array){
    let number_array = []

    if(Array.isArray(array)){
        for(let i = 0; i < array.length; i++){
            if(typeof array[i] === "number" && !isNaN(array[i])){
                number_array.push(array[i])
            }
        }
        return number_array
    }
    else{
        return "Invalid Array"
    }
}

console.log(deleteInvalids([1, null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }]))
console.log(deleteInvalids(["1" , {num:2} , NaN ]))
console.log(deleteInvalids([ 1 , 2 , -3 ]))
console.log(deleteInvalids({num: [ 1 , 2 , 3 ]}))