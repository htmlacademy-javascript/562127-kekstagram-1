//необходимое количество сгенерированных обьектов в массиве (по ТЗ):
const countOfObjects = 25;
//количество фотографий (по ТЗ):
const countOfPhotoMin = 1;
const countOfPhotoMax = 25;
//количество комментариев под каждым фото (на свое усмотрение):
const countOfCommentsMin = 1;
const countOfCommentsMax = 4;
//количество лайков (по ТЗ):
const countOfLikesMin = 15;
const countOfLikesMax = 200;
////количество аватаров (по ТЗ):
const countAvatarMin = 1;
const countAvatarMax = 6;

const DESCRIPTIONS = [
  'Вся красота мира в одной картинке',
  'Моменты, которые запечатлены навсегда',
  'Когда слова не нужны, достаточно фотографии',
  'Остановить время в одном кадре',
  'Сегодня — самый лучший день',
  'Сделано объективом и любовью',
  'Зарядитесь нашим теплом',
  'Счастье в каждом кадре',
  'История, рассказанная через объектив',
  'Было сложно, но зато как вышло!',
];
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const NAMES = [
  'Феликс',
  'Шкода',
  'Пират',
  'Шанти',
  'Стрелка',
  'Мята',
];
//получаем рандомное число в диапазоне от а до b:
const getRandomNumber = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};
//получаем уникальный id в диапазоне от countOfPhotoMin до countOfPhotoMax:
const getRandomId = () => {
  const valuesArray = [];
  return function () {
    valuesArray[0] = getRandomNumber(countOfPhotoMin, countOfPhotoMax);
    let value = getRandomNumber(countOfPhotoMin, countOfPhotoMax);
    while (valuesArray.includes(value)) {
      value = getRandomNumber(countOfPhotoMin, countOfPhotoMax);
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
//идентификаторы комментария, фото и адреса картинки:
const commentId = createId();
const photoID = getRandomId();
const urlId = getRandomId();
//получаем случайный элемент переданного массива:
const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];
//создаем объект комментарий:
const createComment = () => ({
  id: commentId(),
  avatar: `img/avatar-${ getRandomNumber(countAvatarMin, countAvatarMax) }.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES),
});
//создаем объект описание фото:
const createPhoto = () => ({
  id: photoID(),
  url: `photos/${ urlId() }.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomNumber(countOfLikesMin, countOfLikesMax),
  comments: Array.from({length: getRandomNumber(countOfCommentsMin, countOfCommentsMax)}, createComment),
});

//создаем массив из необходимого числа сгенерированных объектов:
const photos = Array.from({length: countOfObjects}, createPhoto);


