'use strict';

const money = +prompt('Введите сумму для расчета налогового вычета');


if (money <= 15000) {
  console.log(`С суммы ${money} налог составит ${money * 0.13}`);

} else if (money > 15000 && money <= 50000) {
  const fix = 15000;
  const procentFix = fix * 0.13;

  const newMoney = money - fix;
  const procentNewMoney = newMoney * 0.2;

  const newSum = procentNewMoney + procentFix;
  console.log(`С суммы ${money} налог составит ${newSum}`);

} else if (money > 50000) {
  const fix = 15000;
  const procentFix = fix * 0.13;

  const newMoney = money - fix;
  const procentNewMoney = newMoney - (newMoney - (newMoney * 0.2));

  const fix2 = money - 50000;
  const procentFix2 = fix2 * 0.3;
  const newSum = procentFix + procentNewMoney + procentFix2
  console.log(`С суммы ${money} с налог составит ${newSum}`);
}

//  В условии нет описания что делать с суммой которая до лимита когда процентная ставка меняется, сделал подсчет исходя из того что процент просто суммируется от граничной суммы