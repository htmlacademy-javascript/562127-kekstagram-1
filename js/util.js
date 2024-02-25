//получаем рандомное число в диапазоне от а до b:
const getRandomNumber = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};
//получаем уникальный id в диапазоне от x до y:
const getRandomId = (x, y) => {
  const valuesArray = [];
  return function () {
    valuesArray[0] = getRandomNumber(x, y);
    let value = getRandomNumber(x, y);
    while (valuesArray.includes(value)) {
      value = getRandomNumber(x, y);
    }
    valuesArray.push(value);
    return value;
  };
};
//создаем порядковый уникальный id:
const createId = () => {
  let lastId = 0;
  return function () {
    lastId += 1;
    return lastId;
  };
};
//получаем случайный элемент переданного массива:
const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];

export {getRandomNumber, getRandomId, createId, getRandomArrayElement};
