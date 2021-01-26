// localStorage에 있는 설정관련 key-value들 //
// isIntervaling : T(알림 켜진 상태) / F(꺼진 상태)
// cycleInterval: 확인하는 시간 간격

const okBtn = document.querySelector("#ok_btn");
const nbBtn = document.querySelector("#nb_switch");
const cycleSelector = document.querySelector("#checkcycle");

okBtn.addEventListener("click", function () {
  location.href = "popup.html";
});

nbBtn.addEventListener("change", function () {
  if (this.checked) {
    console.log("check");
    localStorage.setItem("isIntervaling", "T");
  } else {
    console.log("uncheck");
    localStorage.setItem("isIntervaling", "F");
  }
  //change cycle setting message
  chrome.runtime.sendMessage({
    type: "changeCycleSetting",
  });
});

cycleSelector.addEventListener("change", function (e) {
  console.log("change cycle interval" + e.target.value);
  localStorage.setItem("cycleInterval", e.target.value);
  //change cycle setting message
  chrome.runtime.sendMessage({
    type: "changeCycleSetting",
  });
});