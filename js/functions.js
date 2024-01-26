/* eslint-disable no-console */

function checkPalindrom (phrase) {
  //split('х') разбивает строку на массив по заданному разделителю х, если его не указать - разбивает  на буквы
  //reverse() меняет порядок элементов в массиве на обратный
  //join('х') создает строку из элементов массива, вставляя х между ними
  //replaceAll('x', 'y') возвращает новую строку заменив все х на у
  const newPhrase = phrase.replaceAll(' ', '').split('').reverse().join('');
  if (phrase.replaceAll(' ', '').toLowerCase() === newPhrase.toLowerCase()) {
    return console.log(true);
  }
  return console.log(false);
}
checkPalindrom('топот');
checkPalindrom('ДовОд');
checkPalindrom('Кекс');
checkPalindrom('Лёша на полке клопа нашёл ');

function extractNumbers (phrase) {
  // выражение [0-9] используется для поиска любого числа в промежутке от 0 до 9 (первое совпадение)
  // выражение [0-9]/g используется для поиска всех чисел в промежутке от 0 до 9
  // выражение [^0-9]/g используется для поиска всех "нечисел"
  const newString = phrase.toString().replaceAll(/[^0-9]/g, '');
  return console.log(parseInt(newString, 10));
}
extractNumbers('2023 год');
extractNumbers('ECMAScript 2022');
extractNumbers('1 кефир, 0.5 батона');
extractNumbers('агент 007');
extractNumbers('а я томат');
extractNumbers(2023);
extractNumbers(-1);
extractNumbers(1.5);

function creationAddress (phrase, minLength, addition) {
  if (phrase.length >= minLength) {
    return console.log(phrase);
  }
  //узнаем сколько символов нужно добавить
  const count = minLength - phrase.length;
  if (addition.length === count) {
    return console.log(addition + phrase);
  }
  if (addition.length > count) {
    //substring(begin, end) отдает часть строки между индексами begin (не включая) и end
    const newAddition = addition.substring(0, count);
    return console.log(newAddition + phrase);
  }
  if (addition.length < count) {
    phrase = addition + phrase;
    creationAddress (phrase, minLength, addition);
  }
}
creationAddress('1', 2, '0');
creationAddress('1', 4, '0');
creationAddress('q', 4, 'werty');
creationAddress('q', 4, 'we');
creationAddress('qwerty', 4, '0');

function checkLength (phrase, maxLength) {
  if (phrase.length <= maxLength) {
    return console.log(true);
  }
  return console.log(false);
}
checkLength('проверяемая строка', 20);
checkLength('проверяемая строка', 18);
checkLength('проверяемая строка', 10);
