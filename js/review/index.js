import reviewRatingClickHandler from './reviewForm/reviewRatingClickHandler.js';
import reviewFormSubmitHandler from './reviewForm/reviewFormSubmitHandler.js';
import renderMovieReviews from "./reviewList/renderMovieReviews.js";
import getMovieReviews from "./reviewList/getMovieReviews.js";

const reviews = getMovieReviews();
renderMovieReviews(reviews);
reviewRatingClickHandler();
reviewFormSubmitHandler();