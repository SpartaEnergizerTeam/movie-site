import {
  getDetailComments,
  getExistingDetailComments,
  getMovieIdFromURL,
  setDetailComments
} from "../utils.js";

const submitReview = (values) => {
  const movieId = getMovieIdFromURL();
  let comments = getDetailComments();
  const {index, isExistingComments} = getExistingDetailComments({comments, movieId});

  if (isExistingComments) {
    comments = addCommentToExisting({comments, index, values});
  } else {
    comments = addNewComment({comments, movieId, values});
  }

  setDetailComments(comments);
  window.alert('작성이 완료되었어요');
};

const addNewComment = ({comments, movieId, values}) => [...comments, { movieId, results: [values] }];

const addCommentToExisting = ({comments, index, values}) => {
  const updatedComments = [...comments];
  updatedComments[index].results.push(values);
  return updatedComments;
};

export default submitReview;