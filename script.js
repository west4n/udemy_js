'use strict';


let question = prompt("Ваш бюджет на месяц?", ''),
    questionDate = prompt("Введите дату в формате YYYY-MM-DD", '');

let answer = {
    budget: question,
    timeData: questionDate,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let q1 = prompt("Введите обязательную статью расходов в этом месяце", '');
let q2 = prompt("Во сколько обойдется?", '');
let q3 = prompt("Введите обязательную статью расходов в этом месяце", '');
let q4 = prompt("Во сколько обойдется?", '');

answer.expenses.q1 = q2;
answer.expenses.q3 = q4;

alert(answer.budget / 30);