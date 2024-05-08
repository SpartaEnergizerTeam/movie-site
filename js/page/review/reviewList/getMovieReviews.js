import {getDetailComments, getExistingDetailComments, getMovieIdFromURL} from "../utils.js";

const getMovieReviews = () => {
  let comments = getDetailComments();
  const movieId = getMovieIdFromURL();
  const {index, isExistingComments} = getExistingDetailComments({comments, movieId});
  let results;

  if (isExistingComments) {
    results = getDetailCommentsToExisting({comments, index});
  }

  return results || [];
}

const getDetailCommentsToExisting = ({comments, index}) => comments[index].results;

export default getMovieReviews;