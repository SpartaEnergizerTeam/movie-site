import starRatingHandler from './reviewForm/starRatingHandler.js';
import writeReviewHandler from './reviewForm/writeReviewHandler.js';
import renderMovieReviews from "./reviewList/renderMovieReviews.js";
import getMovieReviews from "./reviewList/getMovieReviews.js";
import deleteReviewHandler from "./reviewForm/deleteReviewHandler.js";

const reviews = getMovieReviews();
renderMovieReviews(reviews);
starRatingHandler();
writeReviewHandler();
deleteReviewHandler();