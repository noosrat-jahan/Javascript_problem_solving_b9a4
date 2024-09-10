function monthlySavings(arr, livingCost){

    if(!Array.isArray(arr) || typeof livingCost !== 'number'){
        return 'invalid input'
    }
    else{
        let monthlyIncome = 0
        for(let income of arr){
            
            if(income >= 3000){
                income = income - income * 0.2 // tax = income * 20/100                
            }
            
            monthlyIncome += income
        }
        
        let totalSavings = monthlyIncome - livingCost
        if(totalSavings < 0){
            return 'earn more'
        }
        else{
            return totalSavings
        }
    }
}

console.log(monthlySavings([ 1000 , 2000 , 3000 ], 5400))
console.log(monthlySavings([ 1000 , 2000 , 2500 ] , 5000))
console.log(monthlySavings([ 900 , 2700 , 3400] , 10000))
console.log(monthlySavings(100, [ 900 , 2700 , 3400]))