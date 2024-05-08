let checked = false;

function setCookie(name, value, days) {
  let date = new Date();
  date.setDate(date.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie =
    name + "=" + value + "; expires=" + date.toGMTString() + "; path=/;";
}

function getCookie() {
  let cookiedata = document.cookie;
  if (cookiedata.indexOf("popupSeen=checked") < 0) {
    // 없으면?
    document.getElementById("popup_back").style.display = "block";
  } else {
    document.getElementById("popup_back").style.display = "none";
  }
}

function closePop() {
  // 7일 동안 안보기
  if (checked) {
    setCookie("popupSeen", "checked", 7);
  }
  document.getElementById("popup_back").style.display = "none";
}

// 페이지 로드 시 팝업 확인
window.onload = function () {
  getCookie();
};
if (document.getElementById("popup_close")) {
  document.getElementById("popup_close").addEventListener("click", function () {
    closePop();
  });
}
document
  .getElementById("popup_checkbox")
  .addEventListener("click", function () {
    checked = this.checked;
  });
