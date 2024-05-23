const calcDiscont = (money, productQuantity, promocod) => {
  const newMoney = money;
  const product = productQuantity;
  const promo = promocod;
  console.log('пришел промокод в начале : ', promo);

  const minDiscont = (money, product) => {
    if (product > 10) {
      const neWoney = (money * 0.03);
      return neWoney;
    } else {
      return `В корзине ${product} ед. продукта. Необходимо купить больше 10`;
    }
  }

  const dis1 = minDiscont(newMoney, product);

  const maxDiscont = (newMoney) => {
    if (newMoney > 30000) {
      const moneyDiscont = ((newMoney - 30000) * 0.15);
      return moneyDiscont;
    }
  }

  const dis2 = maxDiscont(money);

  const promoDiscont = (newMoney, promocod) => {
    console.log('newMoney: ', newMoney);
    console.log('promo: ', promocod);
    if (promocod === 'METHED') {
      const money = newMoney - 500;
      // console.log('promoDiscont: ', newMoney);
      return money;
    } else if (promocod === 'G3H2Z1') {
      const money = newMoney - 2000;
      return money;
    } else {
      console.log('не видет промокод, не могу понять почему');
    }
  }

const dis3 = promoDiscont(money);
// console.log('dis3: ', dis3);
}


const discontMethed = calcDiscont(45000, 11, 'METHED');
// console.log('discontMethed: ', discontMethed);
// const discontG3H2Z1 = calcDiscont(45000, 15, 'G3H2Z1');
// console.log('discont: ', discontG3H2Z1);