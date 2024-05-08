import {getUserInformation} from "../utils.js";

export const isValidReviewValues = ({rate, comment}) => {
  const isValidStarRate = isValidRate(rate);
  if (!isValidStarRate) return;

  if (!comment) {
    window.alert('내용을 입력해주세요');
    return;
  }

  return true;
};

export const isValidRate = (rate) => {
  if (isNaN(rate)) {
    window.alert('별을 눌러 이 영화의 별점을 매겨주세요');
    return;
  }

  return true;
}

export const isValidPassword = (value) => {
  if (!value) {
    window.alert('비밀번호를 입력해주세요');
    return;
  }

  const {password} = getUserInformation();

  if (value !== password) {
    window.alert('비밀번호가 일치하지 않아요, 다시 한 번 확인해주세요');
    return;
  }

  return true;
}