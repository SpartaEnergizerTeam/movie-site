const renderMovieReviews = (reviews = []) => {
  const $wrap = document.querySelector('#reviewContainer');

  if (reviews.length === 0) {
    $wrap.innerHTML = `<div class="empty-review">이 영화에 대한 감상평이 없어요<br/>지금 작성하시면, 첫번째로 남기실 수 있어요 😆</div>`;
    return;
  }
  
  let html = '';

  reviews.forEach((result) => {
    html += getReviewHtml(result);
  });

  $wrap.innerHTML = `<ul id="reviews">${html}</ul>`;
}

const getReviewHtml = (result) => {
  return `
    <li>
      <article class="user-group">
        <img src="./img/detail/user.png" alt=""/>
        <div>
          <div class="top-info">
            <strong class="name">${result.name}</strong>
            ${getStarRatingHtml(result.rate)}
          </div>
          <p>${result.comment}</p>
        </div>
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