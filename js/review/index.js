import starRatingHandler from './reviewForm/starRatingHandler.js';
import writeReviewHandler from './reviewForm/writeReviewHandler.js';
import renderMovieReviews from "./reviewList/renderMovieReviews.js";
import deleteReviewHandler from "./reviewForm/deleteReviewHandler.js";

renderMovieReviews();
starRatingHandler();
writeReviewHandler();
deleteReviewHandler();