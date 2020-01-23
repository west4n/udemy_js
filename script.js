'use strict';


let question = +prompt("Ваш бюджет на месяц?", ''),
    questionDate = prompt("Введите дату в формате YYYY-MM-DD", '');

let answer = {
    budget: question,
    timeData: questionDate,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt("Во сколько обойдется?", '');

    if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null 
        && a != '' && b != '' && a.length < 50 && b.length < 50) {
        console.log("done");    
        answer.expenses[a] = b;
    } else {

    }
};

answer.moneyPerDay = answer.budget / 30

alert("Ежедневный бюджет: " +answer.moneyPerDay);

if(answer.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка")
} else if (answer.moneyPerDay > 100 && answer.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (answer.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка")
}