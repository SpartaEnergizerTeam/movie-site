import starRatingHandler from './reviewForm/starRatingHandler.js';
import writeReviewHandler from './reviewForm/writeReviewHandler.js';
import renderMovieReviews from "./reviewList/renderMovieReviews.js";
import deleteReviewHandler from "./reviewForm/deleteReviewHandler.js";
import editReviewHandler from "./reviewForm/editReviewHandler.js";

renderMovieReviews();
starRatingHandler('.write-button-container .rate-box');
writeReviewHandler();
deleteReviewHandler();
editReviewHandler();
