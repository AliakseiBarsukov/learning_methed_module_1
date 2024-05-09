'use strict';

// {
//   const productName = 'laptop';
//   const productCount = 20;
//   const productCategory = 'technique';
//   const productPrice = 420;

//   console.log('productName: ', productName);
//   console.log('Общая стоимость товара: ', productCount * productPrice);
// }

// {
//   const productName = 'iPhone 15 pro max 512mb';
//   const productCount = 12;
//   const productCategory = 'phone';
//   const productPrice = 1350;

//   console.log('productName: ', productName);
//   console.log('Общая стоимость товара: ', productCount * productPrice);
// }

{
  const productName = prompt("Введите имя товара");
  const productCount = prompt("Введите колличество товара");

  if (isNaN(productCount)) {
    console.log("Вы ввели некорректные данные");
  }
  else {
    const productCategory = prompt("Введите имя категории товара");
    const productPrice = +prompt("Введите стоимость товара");
    console.log('productName: ', typeof productName);
    console.log('productCount: ', typeof productCount);
    console.log('productCategory: ', typeof productCategory);
    console.log('productPrice: ', typeof productPrice);

    console.log(`На складе ${productCount} шт. товара "${productName}" из категории "${productCategory}" на сумму ${productCount * productPrice} $`);
  }
}

