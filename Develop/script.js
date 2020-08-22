$(document).ready(function () {
  var NowMoment = moment();
  var eDisplayMoment = document.getElementById("currentDay");
  eDisplayMoment.innerHTML = NowMoment.format("MMMM Do, YYYY");
  //when user types in the text box it will save
  //when user hits the save button it will go to local storage
  //change the colors of the text boxes based on what time it is
  $("#saveBtn8am").on("click", function () {
    var Event8am = $("#text8am").val();
    localStorage.setItem("userStor8am", Event8am);
  });
  var Saved8am = localStorage.getItem("userStor8am");
  console.log(Saved8am);
  $("#text8am").val(Saved8am);

  $("#saveBtn9am").on("click", function () {
    var Event9am = $("#text9am").val();
    localStorage.setItem("userStor9am", Event9am);
  });
  var Saved9am = localStorage.getItem("userStor9am");
  console.log(Saved9am);
  $("#text9am").val(Saved9am);

  $("#saveBtn10am").on("click", function () {
    var Event10am = $("#text10am").val();
    localStorage.setItem("userStor10am", Event10am);
  });
  var Saved10am = localStorage.getItem("userStor10am");
  console.log(Saved10am);
  $("#text10am").val(Saved10am);

  $("#saveBtn11am").on("click", function () {
    var Event11am = $("#text11am").val();
    localStorage.setItem("userStor11am", Event11am);
  });
  var Saved11am = localStorage.getItem("userStor11am");
  console.log(Saved9am);
  $("#text11am").val(Saved11am);

  $("#saveBtn12pm").on("click", function () {
    var Event12pm = $("#text12pm").val();
    localStorage.setItem("userStor12pm", Event12pm);
  });
  var Saved12pm = localStorage.getItem("userStor12pm");
  console.log(Saved12pm);
  $("#text12pm").val(Saved12pm);

  $("#saveBtn1pm").on("click", function () {
    var Event1pm = $("#text1pm").val();
    localStorage.setItem("userStor1pm", Event1pm);
  });
  var Saved1pm = localStorage.getItem("userStor1pm");
  console.log(Saved1pm);
  $("#text1pm").val(Saved1pm);

  $("#saveBtn2pm").on("click", function () {
    var Event2pm = $("#text2pm").val();
    localStorage.setItem("userStor2pm", Event2pm);
  });
  var Saved2pm = localStorage.getItem("userStor2pm");
  console.log(Saved2pm);
  $("#text2pm").val(Saved2pm);

  $("#saveBtn3pm").on("click", function () {
    var Event3pm = $("#text3pm").val();
    localStorage.setItem("userStor3pm", Event3pm);
  });
  var Saved3pm = localStorage.getItem("userStor3pm");
  console.log(Saved3pm);
  $("#text3pm").val(Saved3pm);

  $("#saveBtn4pm").on("click", function () {
    var Event4pm = $("#text4pm").val();
    localStorage.setItem("userStor4pm", Event4pm);
  });
  var Saved4pm = localStorage.getItem("userStor4pm");
  console.log(Saved4pm);
  $("#text4pm").val(Saved4pm);

  $("#saveBtn5pm").on("click", function () {
    var Event5pm = $("#text5pm").val();
    localStorage.setItem("userStor5pm", Event5pm);
  });
  var Saved5pm = localStorage.getItem("userStor5pm");
  console.log(Saved5pm);
  $("#text5pm").val(Saved5pm);





});