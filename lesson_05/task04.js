const calcDiscont = (money, productQuantity, promocod) => {
const product = productQuantity;

  const minDiscont = (money, product) => {
    const newMoney = money;
    if (product > 10) {
      const money = newMoney * 0.03;
      return money;
    } else {
      return `В корзине ${product} ед. продукта. Необходимо купить больше 10`;
    }
  }
  const dis1 = minDiscont(money, product);

  const maxDiscont = (money) => {
    if (money > 30000) {
      const moneyDiscont = ((money - 30000) * 0.15);
      return moneyDiscont;
    }
  }

  const dis2 = maxDiscont(money);

  const promoDiscont = (money, promocod) => {
    const newMoney = money;

    if (promocod === 'METHED') {
      const money = 500;
      return money;
    } else if (promocod === 'G3H2Z1') {
      const money = 2000;
      return money;
    } else {
      console.log('не видет промокод, не могу понять почему');
    }
  }

  const dis3 = promoDiscont(money, promocod);


  const calcDiscont = (money, dis1, dis2 = 0, dis3 = 0) => {
    const result = money - (dis1 + dis2 + dis3);
    return result;
  }

  const discont = calcDiscont(money, dis1, dis2, dis3);
  return discont;

}


const discontMethed = calcDiscont(45000, 11, 'METHED');
console.log('discontMethed: ', discontMethed);
const discontG3H2Z1 = calcDiscont(45000, 15, 'G3H2Z1');
console.log('discont: ', discontG3H2Z1);