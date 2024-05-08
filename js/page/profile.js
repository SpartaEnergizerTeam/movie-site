// 이미지를 랜덤하게 조건을 걸어서 생성한다.
// 생성한 이미지 값을 유저가 선택하면 로컬스토리지에 저장한다.

let disabled = false;
// 배포시에 맞는 url로 변경 필!
const returnUrl = "../index.html";
let IMAGE_URL =
  "https://t4.ftcdn.net/jpg/00/64/67/27/240_F_64672736_U5kpdGs9keUll8CRQ3p3YaEv2M6qkVY5.jpg";

const background_color_list = [
  "00acc1",
  "1e88e5",
  "5e35b1",
  "6d4c41",
  "7cb342",
  "8e24aa",
  "039be5",
  "43a047",
  "546e7a",
  "00897b",
  "3949ab",
  "757575",
  "c0ca33",
  "d81b60",
  "e53935",
  "f4511e",
  "fb8c00",
  "fdd835",
  "ffb300",
];

const eyes_list = [
  "bulging",
  "dizzy",
  "eva",
  "frame1",
  "frame2",
  "glow",
  "happy",
  "hearts",
  "robocop",
  "round",
  "roundFrame01",
  "roundFrame02",
  "sensor",
  "shade01",
];
const mouth_list = [
  "bite",
  "diagram",
  "grill01",
  "grill02",
  "grill03",
  "smile01",
  "smile02",
  "square01",
  "square02",
];

const getRandomAvatar = () => {
  // backgroundColor 19
  // eyes 14
  // mouth 9
  const randomNum_1 = Math.random();
  const randomNum_2 = Math.random();
  const randomNum_3 = Math.random();
  const backgroundColor = Math.floor(randomNum_1 * 19);
  const eyes = Math.floor(randomNum_2 * 14);
  const mouth = Math.floor(randomNum_3 * 9);
  const tempImageUrl = `https://api.dicebear.com/8.x/bottts-neutral/svg?backgroundColor=${background_color_list[backgroundColor]}&eyes=${eyes_list[eyes]}&mouth=${mouth_list[mouth]}`;
  document.getElementById("imgUrl").src = tempImageUrl;
};

document
  .getElementById("animate__zoomInDown")
  .addEventListener("animationend", function () {
    this.className = "animate__animated";
    disabled = false;
    document.getElementById("createRandomBtn").disabled = false;
  });

document
  .getElementById("createRandomBtn")
  .addEventListener("click", function () {
    if (disabled) {
      return;
    }
    this.disabled = true;
    disabled = true;
    // 이미지 바꾸기
    getRandomAvatar();
    // 짜잔 나타나기
    document.getElementById("animate__zoomInDown").className =
      "animate__animated animate__zoomInDown";
  });

document.getElementById("content").addEventListener("submit", function (e) {
  e.preventDefault();
  const userObj = {
    username: this.username.value,
    password: this.password.value,
    imageUrl: this.imgUrl.src,
  };
  window.localStorage.setItem("userObj", JSON.stringify(userObj));
  // 여기서 다른 url로 이동하면 된다.
  window.location.href = returnUrl;
});

// 맨 처음 로컬스토리지 가져와서 값 넣기
const fistData = localStorage.getItem("userObj");
if (fistData) {
  const userObj = JSON.parse(fistData);

  document.getElementById("username").value = userObj.username;
  document.getElementById("password").value = userObj.password;
  document.getElementById("imgUrl").src = userObj.imageUrl;
}
