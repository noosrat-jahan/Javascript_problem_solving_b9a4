function calculateMoney(ticketSale){
    let totalSoldTicketPrice = ticketSale * 120
    let totalExpense = 500 + (8 * 50)
    
    if(ticketSale >= 0){
        let remainingMoney = totalSoldTicketPrice - totalExpense
        return remainingMoney        
    }

    else{
        return "ticketSale should be zero or a positive number"
    }   
}

const output = calculateMoney(1055)
console.log(output)