'use strict';

let question, questionDate;

function start(){
    question = +prompt("Ваш бюджет на месяц?", '');
    questionDate = prompt("Введите дату в формате YYYY-MM-DD", '');

    while(isNaN(question) ||  question == "" || question == null) {
        question = +prompt("Ваш бюджет на месяц?", '');
    }
}
start();

let answer = {
    budget: question,
    timeData: questionDate,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function chooseExpenes() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
            b = prompt("Во сколько обойдется?", '');
    
        if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null 
            && a != '' && b != '' && a.length < 50 && b.length < 50) {
            console.log("done");    
            answer.expenses[a] = b;
        } else {
            i = i - 1;
        }
    }
}
chooseExpenes();

function detectDayBudget() {
    answer.moneyPerDay = (answer.budget / 30).toFixed(2);
    alert("Ежедневный бюджет: " +answer.moneyPerDay);
}
detectDayBudget();

function detectLevel() {
    if(answer.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка")
    } else if (answer.moneyPerDay > 100 && answer.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
    } else if (answer.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Произошла ошибка");
    }
}
detectLevel();


function checkSavings() {
    if (answer.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");

        answer.monthIncome = save/100/12*percent;
        alert("Доход в месяц с вашего депозита: " + answer.monthIncome);
    }
}
checkSavings();

function chooseOptExpenses() {
    for (let i = 1; i <= 3; i++) {
        let questionOptExpenses = prompt("Статья необязательных расходов?");
        answer.optionalExpenses[i] = questionOptExpenses;
        console.log(answer.optionalExpenses);
    }
}
chooseOptExpenses();