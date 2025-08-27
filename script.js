'use strict';

let title = "Мой первый проект на JS";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 3565;
let rollback = 20;
let fullPrice = 200000;
let adaptive = true;

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens.length);
console.log("Стоимость верстки экранов " + screenPrice + " рублей");
console.log("Стоимость разработки сайта " + fullPrice + " рублей");
screens.toLowerCase();
console.log(screens.split(", "));
console.log("Процент отката посреднику за работу " + fullPrice * (rollback / 100) + " рублей");

title = prompt('Как называется ваш проект?');
console.log(title);
screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');
console.log(screens);
screenPrice = +prompt('Сколько будет стоить данная работа?', '12000');
console.log(screenPrice);
adaptive = confirm('Нужен ли адаптив на сайте?');
console.log(adaptive);
let service1 = prompt('Какой дополнительный тип услуги нужен?');
console.log(service1);
let servicePrice1 = +prompt('Сколько это будет стоить?');
console.log(servicePrice1);
let service2 = prompt('Какой дополнительный тип услуги нужен?');
console.log(service2);
let servicePrice2 = +prompt('Сколько это будет стоить?');
console.log(servicePrice2);

fullPrice = screenPrice + servicePrice1 + servicePrice2;
console.log(fullPrice);

let servicePercentPrice = fullPrice - (fullPrice * (rollback / 100));
console.log(servicePercentPrice);

switch (true) {
    case fullPrice => 0 && fullPrice <= 15000:
        console.log('Скидка не предусмотрена');
        break
    case fullPrice > 30000:
        console.log('Даем скидку в 10%');
        break
    case fullPrice > 15000 && fullPrice <= 30000:
        console.log('Даем скидку в 5%');
        break
    default:
        console.log('Что то пошло не так');
}