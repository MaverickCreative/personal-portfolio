var alanBtnInstance = alanBtn({
  key: "8911f2f36cb64d1df63ca4f3d4b864562e956eca572e1d8b807a3e2338fdd0dc/stage",
  onCommand: function (commandData) {
    if (commandData.command === "alertBox") {
      alertBox();
    }
  },
  rootEl: document.getElementById("alan-btn"),
});

var alertBox = () => {
  alert("alert generated using voice command");
};
