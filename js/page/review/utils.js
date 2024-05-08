import getUrlParamValue from "../../utils/getUrlParamValue.js";
import {getLocalStorage, setLocalStorage} from "../../utils/localStorage.js";

const LOCALSTORAGE_COMMENTS = 'comments';
const LOCALSTORAGE_USER_INFO = 'userObj';

export const getMovieIdFromURL = () => getUrlParamValue('movieId') || '';

export const getDetailComments = () => JSON.parse(getLocalStorage(LOCALSTORAGE_COMMENTS) || '[]');

export const setDetailComments = (comments) => setLocalStorage(LOCALSTORAGE_COMMENTS, JSON.stringify(comments));

export const getExistingDetailComments = ({comments = [], movieId}) => {
  const index = comments.findIndex((comment) => comment.movieId === movieId);

  return {
    index,
    isExistingComments: index !== -1
  };
};

export const getUser = () => JSON.parse(getLocalStorage(LOCALSTORAGE_USER_INFO) || '[]');

export const getUserInformation = () => {
  const { username, password, imageUrl } = getUser();
  return { username, password, imageUrl }
}

export const notifyAndReload = (message) => {
  window.alert(message);
  window.location.reload();
};