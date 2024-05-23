const convertMoney = (money) => {
  let newMoney = money;
  
  newMoney = (newMoney * 1.2) * 64;

  return newMoney;
}

const moneyRub = convertMoney(1000);
console.log('moneyRub: ', moneyRub);