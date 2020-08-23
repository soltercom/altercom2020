import { Injectable } from '@angular/core';

export interface IPrice {
  name: string;
  price: string;
}

export interface IProduct {
  name: string;
  img: string;
  desc: string;
  ref: string;
  prices: IPrice[];
}

const PRODUCTS: IProduct[] = [
  {
    name: '1С: Бухгалтерия',
    img: 'local_florist',
    desc: 'Предназначена для комплексной автоматизации бухгалтерского и налогового учета коммерческих предприятий.',
    ref: 'https://v8.1c.ru/buhv8/',
    prices: [
      { name: 'ПРОФ', price: '13 000' },
      { name: 'ПРОФ (Электронная поставка)', price: '13 000' },
      { name: 'ПРОФ (USB)', price: '16 200' },
      { name: 'КОРП', price: '33 600' },
      { name: 'КОРП (Электронная поставка)', price: '33 600' },
      { name: 'КОРП (USB)', price: '38 500' }]
  }, {
    name: '1С: Зарплата и управление персоналом',
    img: 'people',
    desc: 'Предназначена для комплексной автоматизации расчета зарплаты, кадрового учета и управления на предприятиях.',
    ref: 'https://v8.1c.ru/hrm/',
    prices: [
      { name: 'ПРОФ', price: '22 600' },
      { name: 'ПРОФ (Электронная поставка)', price: '22 600' },
      { name: 'ПРОФ (USB)', price: '27 300' },
      { name: 'КОРП', price: '109 000' },
      { name: 'КОРП (Электронная поставка)', price: '109 000' }]
  }, {
    name: '1С: Бухгалтерия государственного учреждения',
    img: 'account_balance',
    desc: 'Предназначена для автоматизации бухгалтерского учета государственных (муниципальных) учреждений.',
    ref: 'https://v8.1c.ru/stateacc/',
    prices: [
      { name: 'ПРОФ', price: '14 400' },
      { name: 'ПРОФ (Электронная поставка)', price: '14 400' },
      { name: 'ПРОФ (USB)', price: '17 700' }
    ]
  }, {
    name: '1С: Зарплата и кадры государственного учреждения',
    img: 'people_outline',
    desc: 'Предназначена для автоматизации кадрового учета и расчета заработной платы в государственных учреждениях.',
    ref: 'https://v8.1c.ru/statehrm/',
    prices: [
      { name: 'ПРОФ', price: '28 100' },
      { name: 'ПРОФ (Электронная поставка)', price: '28 100' },
      { name: 'КОРП', price: '136 000' }]
  }, {
    name: '1С: Управление торговлей',
    img: 'shopping_cart',
    desc: 'Предназначена для автоматизации оперативного и управленческого учета, анализа и планирования торговых операций, повышения эффективности управления современным торговым предприятием.',
    ref: 'https://v8.1c.ru/trade/',
    prices: [
      { name: 'ПРОФ', price: '22 600' },
      { name: 'ПРОФ (Электронная поставка)', price: '22 600' },
      { name: 'ПРОФ (USB)', price: '27 300' }]
  }, {
    name: '1С: Розница',
    img: 'point_of_sale',
    desc: 'Предназначена для автоматизации бизнес-процессов розничных торговых точек (магазинов).',
    ref: 'https://v8.1c.ru/retail/',
    prices: [
      { name: 'ПРОФ', price: '13 000' },
      { name: 'ПРОФ (Электронная поставка)', price: '13 000' },
      { name: 'ПРОФ (USB)', price: '16 200' }]
  }, {
    name: '1С: Документооборот',
    img: 'account_tree',
    desc: 'Предназначена для решения задач выстраивания методологии и автоматизации учета документов.',
    ref: 'https://v8.1c.ru/doc8/',
    prices: [ { name: 'ПРОФ', price: '36 000' }]
  }, {
    name: '1С:Документооборот государственного учреждения 8',
    img: 'qr_code_2',
    desc: 'Предназначена для решения задач выстраивания методологии и автоматизации учета документов в государственных и муниципальных учреждениях.',
    ref: 'https://v8.1c.ru/statedoc/',
    prices: [
      { name: 'ПРОФ', price: '117 600' },
      { name: 'ПРОФ (Электронная поставка)', price: '117 600' }
    ]
  }, {
    name: '1С:Договоры',
    img: 'receipt_long',
    desc: 'Предназначена для эффективной раоты с договорами.',
    ref: 'https://v8.1c.ru/contracts/',
    prices: [
      { name: 'ПРОФ', price: '13 000' },
      { name: 'ПРОФ (Электронная поставка)', price: '13 000' },
      { name: 'ПРОФ на 5 пользователей', price: '26 000' },
      { name: 'ПРОФ на 5 пользователей (Электронная поставка)', price: '26 000' }
    ]
  }, {
    name: '1С:ИТС Техно',
    img: 'explore',
    desc: 'Доступ к обновлениям и сервисам 1С:ИТС для коммерческих предприятий. Минимальный тариф для обеспечения официальной поддержки программных продуктов «1С:Предприятие» ПРОФ версий',
    ref: 'https://v8.1c.ru/its/tarify/its-tekhno/',
    prices: [
      { name: '6 мес. (Льготная цена)', price: '7 547' },
      { name: '6 мес.', price: '9 055' },
      { name: '12 мес. (Льготная цена)', price: '14 280' },
      { name: '12 мес.', price: '17 136' }]
  }, {
    name: '1С:ИТС Бюджет',
    img: 'explore',
    desc: 'Доступ к обновлениям и сервисам 1С:ИТС для бюджетных предприятий. Минимальный тариф для обеспечения официальной поддержки программных продуктов «1С:Предприятие» ПРОФ версий',
    ref: 'https://v8.1c.ru/its/tarify/its-byudzhet/',
    prices: [
      { name: '6 мес. (Льготная цена)', price: '8 588' },
      { name: '6 мес.', price: '10 309' },
      { name: '12 мес. (Льготная цена)', price: '16 248' },
      { name: '12 мес.', price: '19 512' }]
  }, {
    name: '1С:ИТС ПРОФ',
    img: 'fact_check',
    desc: 'Доступ к обновлениям, консультациям, сервисам 1С:ИТС для коммерческих предприятий. Включает услуги партнеров по регулярному обновлению программных продуктов «1С:Предприятие» и информационно-методическую поддержку бухгалтеров, кадровиков, руководителей и IT-специалистов.',
    ref: 'https://v8.1c.ru/its/tarify/its-prof/',
    prices: [
      { name: '1 мес. (Льготная цена)', price: '4 577' },
      { name: '1 мес.', price: '5 493' },
      { name: '3 мес. (Льготная цена)', price: '9 894' },
      { name: '3 мес.', price: '11 871' },
      { name: '6 мес. (Льготная цена)', price: '17 869' },
      { name: '6 мес.', price: '21 440' },
      { name: '12 мес. (Льготная цена)', price: '33 816' },
      { name: '12 мес.', price: '40 572' },
      { name: '24 мес. (Льготная цена)', price: '60 869' }]
  }, {
    name: '1С:ИТС Бюджет ПРОФ',
    img: 'fact_check',
    desc: 'Доступ к обновлениям, консультациям, сервисам 1С:ИТС для бюджетных предприятий. Включает услуги партнеров по регулярному обновлению программных продуктов «1С:Предприятие» и информационно-методическую поддержку бухгалтеров, кадровиков, руководителей и IT-специалистов.',
    ref: 'https://v8.1c.ru/its/tarify/its-budget-prof/',
    prices: [
      { name: '1 мес. (Льготная цена)', price: '4 577' },
      { name: '1 мес.', price: '5 493' },
      { name: '3 мес. (Льготная цена)', price: '9 894' },
      { name: '3 мес.', price: '11 871' },
      { name: '6 мес. (Льготная цена)', price: '17 869' },
      { name: '6 мес.', price: '21 440' },
      { name: '12 мес. (Льготная цена)', price: '33 816' },
      { name: '12 мес.', price: '40 572' },
      { name: '24 мес. (Льготная цена)', price: '60 869' }]
  }, {
    name: '1С:Предприятие 8. Клиентская лицензия на 1 рабочее место.',
    img: 'device_hub',
    desc: '',
    ref: 'https://v8.1c.ru/platforma/masshtabiruemost-i-proizvoditelnost/',
    prices: [
      { name: 'ПРОФ', price: '6 300' },
      { name: 'ПРОФ (Электронная поставка)', price: '6 300' },
      { name: 'ПРОФ (USB)', price: '8 200' }]
  }, {
    name: '1С:Предприятие 8. Клиентская лицензия на 5 рабочих мест.',
    img: 'device_hub',
    desc: '',
    ref: 'https://v8.1c.ru/platforma/masshtabiruemost-i-proizvoditelnost/',
    prices: [
      { name: 'ПРОФ', price: '21 600' },
      { name: 'ПРОФ (Электронная поставка)', price: '21 600' },
      { name: 'ПРОФ (USB)', price: '28 100' }]
  }, {
    name: '1С:Предприятие 8. Клиентская лицензия на 10 рабочих мест.',
    img: 'device_hub',
    desc: '',
    ref: 'https://v8.1c.ru/platforma/masshtabiruemost-i-proizvoditelnost/',
    prices: [
      { name: 'ПРОФ', price: '41 400' },
      { name: 'ПРОФ (Электронная поставка)', price: '41 400' },
      { name: 'ПРОФ (USB)', price: '51 900' }]
  }, {
    name: '1С:Предприятие 8. Клиентская лицензия на 20 рабочих мест.',
    img: 'memory',
    desc: '',
    ref: 'https://v8.1c.ru/platforma/masshtabiruemost-i-proizvoditelnost/',
    prices: [
      { name: 'ПРОФ', price: '78 000' },
      { name: 'ПРОФ (Электронная поставка)', price: '78 800' },
      { name: 'ПРОФ (USB)', price: '97 600' }]
  }, {
    name: '1С:Предприятие 8. Клиентская лицензия на 50 рабочих мест.',
    img: 'developer_board',
    desc: '',
    ref: 'https://v8.1c.ru/platforma/masshtabiruemost-i-proizvoditelnost/',
    prices: [
      { name: 'ПРОФ', price: '187 200' },
      { name: 'ПРОФ (Электронная поставка)', price: '187 200' },
      { name: 'ПРОФ (USB)', price: '224 700' }]
  }, {
    name: '1С:Предприятие 8.3. Лицензия на сервер',
    img: 'computer',
    desc: '',
    ref: 'https://v8.1c.ru/platforma/klient-servernyy-variant-raboty/',
    prices: [
      { name: 'ПРОФ', price: '50 400' },
      { name: 'ПРОФ (x86-64)', price: '86 400' },
      { name: 'ПРОФ (USB)', price: '60 500' },
      { name: 'ПРОФ (x86-64) (USB)', price: '103 700' }]
  }
];

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor() {}

  private cacheFilter = '';

  private static split(products: IProduct[], columnNumber: number): IProduct[] {
    const result = [];
    for (let i = 0; i < columnNumber; i++) {
      result.push([]);
    }
    for (let i = 0; i < products.length; i++) {
      result[i % columnNumber].push(products[i]);
    }
    return result;
  }

  getProducts(columnNumber: number, filter?: string): IProduct[] {
    if (filter === undefined) {
      filter = this.cacheFilter;
    } else {
      this.cacheFilter = filter;
    }
    let products = PRODUCTS.filter(p => !filter ? true : p.name.toLowerCase().includes(filter.toLowerCase()));
    products = products.length === 0 ? PRODUCTS : products;
    return ProductsService.split(products, columnNumber);
  }
}
