let goodNameLastChar = ['a','y','i','e', 'o', 'u', 'w', 'A', 'Y', 'I', 'E','O','U','W']

function checkName(name){
    let name_size = name.length
    if(typeof name === 'string'){
        for(let i = 0; i < name_size; i++){
            if(goodNameLastChar.includes(name[name_size-1])){
                return "Good Name"
            }
            else{
                return "Bad Name"
            }
        }
    } 
    else{
        return "invalid"
    }   
}

const Output1 = checkName("Salam")
const Output2 = checkName("RAFEE")
const Output3 = checkName("Jhankar")
const Output4 = checkName(199)
const Output5 = checkName(["Rashed"])

console.log(Output1)
console.log(Output2)
console.log(Output3)
console.log(Output4)
console.log(Output5)