const isValidReviewValues = ({rate, comment, password}) => {
  if (isNaN(rate)) {
    window.alert('별을 눌러 이 영화의 별점을 매겨주세요');
    return;
  }

  if (!comment) {
    window.alert('내용을 입력해주세요');
    return;
  }

  return true;
};

export default isValidReviewValues;