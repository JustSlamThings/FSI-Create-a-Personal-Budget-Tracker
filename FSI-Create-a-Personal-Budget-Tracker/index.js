let weeklyExpenses = 0
let monthlyExpenses = 0
let annualExpenses = 0


window.prompt(weeklyExpenseQuestions[0])

let answer = window.prompt(weeklyExpenseQuestions[0])
console.log(answer)

for(let i = 0; i < weeklyExpenseQuestions.length; i++){
    let answer = parseFloat(window.prompt(weeklyExpenseQuestions[i]))
    weeklyExpenses = weeklyExpenses + answer
}
window.prompt(monthlyExpenseQuestions[0])

let answer2 = window.prompt(monthlyExpenseQuestions[0])
console.log(answer)

for(let i = 0; i < monthlyExpenseQuestions.length; i++){
    let answer2 = parseFloat(window.prompt(monthlyExpenseQuestions[i]))
    monthlyExpenses = monthlyExpenses + answer2
}


    let answer3 = window.prompt(annualExpenseQuestions[0])
console.log(answer)

for(let i = 0; i < annualExpenseQuestions.length; i++){
    let answer3 = parseFloat(window.prompt(annualExpenseQuestions[i]))
    annualExpenses = annualExpenses + answer3
}