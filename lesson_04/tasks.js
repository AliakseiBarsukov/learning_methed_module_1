'use strict;'

const rain = Math.round(Math.random() * 1);

if (rain === 1) {
  console.log('Пошёл дождь. Возьмите зонт!');
} else {
  console.log('Дождя нет!');
}


const mathematics = +prompt('Введите кол-во баллов по математике');
const language = +prompt('Введите кол-во баллов по русскому языку');
const informatics = +prompt('Введите кол-во баллов по информатике');

const count = mathematics + language + informatics;

if (count >= 265) {
  console.log(`Вы набрали ${count} балов. Поздравляю, вы поступили на бюджет!`);
} else {
  console.log(`Вы набрали ${count} балов. К сожалению, вы не поступили на бюджет`);
}

const sum = +prompt('Введите желаемую сумму для снятия');

if (sum % 100 === 0) {
  console.log(`Вы можете снять сумму ${sum} рублей`);
} else {
  console.log('Доступны банкноты номиналом 100рублей, измените сумму снятия');
}


const money = +prompt('Введите вашу сумму для расчета налога');

if (money <= 15000) {
  console.log(`С суммы ${money} налог составит ${money - (money - (money * 0.13))}`);
} else if (money > 15000 && money <= 50000) {
  console.log(`С суммы ${money} налог составит ${money - (money - (money * 0.2))}`);
} else if (money > 50000) {
  console.log(`С суммы ${money} с налог составит ${money - (money - (money * 0.3))}`);
}

