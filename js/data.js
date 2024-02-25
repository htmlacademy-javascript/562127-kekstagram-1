import {getRandomNumber, getRandomId, createId, getRandomArrayElement} from './util.js';
import {countOfObjects, countOfPhotoMin, countOfPhotoMax, countOfCommentsMin, countOfCommentsMax,
  countOfLikesMin, countOfLikesMax, countAvatarMin, countAvatarMax} from './setup.js';

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

//идентификаторы комментария, фото и адреса картинки:
const commentId = createId();
const photoID = getRandomId(countOfPhotoMin, countOfPhotoMax);
const urlId = getRandomId(countOfPhotoMin, countOfPhotoMax);

//создаем объект комментарий:
const createComment = () => ({
  id: commentId(),
  avatar: `img/avatar-${ getRandomNumber(countAvatarMin, countAvatarMax) }.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES),
});
//создаем объект описание фото:
const createOnePhoto = () => ({
  id: photoID(),
  url: `photos/${ urlId() }.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomNumber(countOfLikesMin, countOfLikesMax),
  comments: Array.from({length: getRandomNumber(countOfCommentsMin, countOfCommentsMax)}, createComment),
});

//создаем массив из необходимого числа сгенерированных объектов:
const createPhotos = () => Array.from({length: countOfObjects}, createOnePhoto);

export {createPhotos};

