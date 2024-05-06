const thresholdsPercent = [10, 20, 30, 40, 50, 60, 70, 80, 90];

const reviewRatingClickHandler = () => {
  document.querySelector('.write-rate-container .rate-box').addEventListener('click', function (e) {
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const width = rect.width;
    const percent = Math.floor((x / width) * 100);

    if (!(percent >= 0 && percent <= 100)) return;

    const newPercent = thresholdsPercent.find(threshold => {
      return percent <= threshold
    }) || 100;

    this.nextElementSibling.style.width = `${newPercent}%`;
    this.parentNode.dataset.rate = `${newPercent * 0.05}`;
  });
}

export default reviewRatingClickHandler;