import {getRandomInteger, getRandomValue} from "../utils";
import {names, surnames, comment, DaysDuration, emotions} from "./constant";

const getDate = () => {
  const date = new Date();

  date.setDate(
    date.getDate() - getRandomInteger(DaysDuration.MIN, DaysDuration.MAX)
  );

  return date.toISOString();
};

const generateComment = () => ({
  author: `${getRandomValue(names)} ${getRandomValue(surnames)}`,
  comment,
  date: getDate(),
  emotion: getRandomValue(emotions),
});

const getCommentCount = (films) =>
  films.reduce((count, film) => count + film.comments.length, 0);
  //(films = 5);

const generateComments = (films) => {
  const commentCount = getCommentCount(films);

  return Array.from({ length: commentCount }, (_value, index) => {
    const commentItem = generateComment();

    return {
      id: String(index + 1),
      ...commentItem,
    };
  });
};

export {generateComments};
