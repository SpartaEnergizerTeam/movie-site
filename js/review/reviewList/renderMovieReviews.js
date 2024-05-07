import getMovieReviews from "./getMovieReviews.js";
import {getUserInformation} from "../utils.js";

const renderMovieReviews = () => {
  const reviews = getMovieReviews();
  const $wrap = document.querySelector('#reviewList');
  const {username} = getUserInformation();

  if (reviews.length === 0) {
    $wrap.innerHTML = `<div class="empty-review">이 영화에 대한 감상평이 없어요<br/>지금 작성하시면, 첫번째로 남기실 수 있어요 😆</div>`;
    return;
  }
  
  const renderHtml = reviews.map((result, index) => {
    const isSameUser = result.name === username;
    return getReviewHtml(result, index, isSameUser);
  });

  $wrap.innerHTML = `<ul id="reviews">${renderHtml.join('')}</ul>`;
}

const getReviewHtml = (result, index, isSameUser) => {
  return `
    <li>
      <article class="user-group">
        <img src="${result.thumbnail}" alt=""/>
        <div>
          <div class="top-info">
            <strong class="name">${result.name}</strong>
            ${getStarRatingHtml(result.rate)}
          </div>
          <p>${result.comment}</p>
        </div>
        ${isSameUser ? `
          <ul class="comment-util" data-index="${index}">
            <li><button class="edit-btn" type="button">수정</button></li>
            <li><button class="delete-btn" type="button">삭제</button></li>
          </ul>
        ` : ''}
      </article>
    </li>
  `;
};

const getStarRatingHtml = (rate) => {
  const fullStars = Math.floor(rate);
  const hasHalfStar = rate % 1 !== 0;

  let stars = '<span class="star-fill"></span>'.repeat(fullStars);

  if (!!hasHalfStar) {
    stars += '<span class="star-half"></span>';
  }

  return `<div class="rate-box">${stars}</div>`;
}


export default renderMovieReviews;