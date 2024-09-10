// let capital = word.charAt(0).toUpperCase() + word.slice(1)

function password(obj){   

        if(obj.name === undefined || obj.birthYear === undefined || obj.siteName === undefined  || obj.birthYear.toString().length !== 4){
            return 'invalid'
        }
        else{
            let site_name = obj.siteName.charAt(0).toUpperCase() + obj.siteName.slice(1)
            let userName = obj.name
            let birthYear = obj.birthYear
            
            let password_structure = site_name + '#' + userName + '@' + birthYear
            return password_structure
        }           
} 

let obj1 = { name: "kolimuddin", birthYear: 1999, siteName: "google"}
let obj2 = { name: "rahat", birthYear: 2002, siteName: "Facebook" }
let obj3 = { name: "toky", birthYear: 200, siteName: "Facebook" }
let obj4 = { name: "maisha", birthYear: 2002}

console.log(password(obj1))
console.log(password(obj2))
console.log(password(obj3))
console.log(password(obj4))
