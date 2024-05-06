import {
  getDetailComments,
  getExistingDetailComments,
  getMovieIdFromURL,
  setDetailComments
} from "../utils.js";

export const addReviewToLocalStorage = (values) => {
  const movieId = getMovieIdFromURL();
  let comments = getDetailComments();
  const {index, isExistingComments} = getExistingDetailComments({comments, movieId});

  if (isExistingComments) {
    comments = addCommentToExisting({comments, index, values});
  } else {
    comments = addNewComment({comments, movieId, values});
  }

  setDetailComments(comments);
};

const addNewComment = ({comments, movieId, values}) => [...comments, { movieId, results: [values] }];

const addCommentToExisting = ({comments, index, values}) => {
  const updatedComments = [...comments];
  updatedComments[index].results.push(values);
  return updatedComments;
};
