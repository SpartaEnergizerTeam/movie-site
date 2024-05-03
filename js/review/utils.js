import getUrlParamValue from "../utils/getUrlParamValue.js";
import {getLocalStorage, setLocalStorage} from "../utils/localStorage.js";

const LOCALSTORAGE_COMMENTS = 'comments';
const TEST_VALUE = '123';
console.log('@@ TODO: 테스트 값 꼭 삭제하기');

export const getMovieIdFromURL = () => getUrlParamValue('movie_id') || TEST_VALUE;

export const getDetailComments = () => JSON.parse(getLocalStorage(LOCALSTORAGE_COMMENTS) || '[]');

export const setDetailComments = (comments) => setLocalStorage(LOCALSTORAGE_COMMENTS, JSON.stringify(comments));

export const getExistingDetailComments = ({comments = [], movieId}) => {
  const index = comments.findIndex((comment) => comment.movieId === movieId);

  return {
    index,
    isExistingComments: index !== -1
  };
};