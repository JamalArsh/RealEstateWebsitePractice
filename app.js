const { useImageDimensions } = require("@react-native-community/hooks");

let people = document.getElementById("people");
let peopleLess = document.getElementById("people-less");
let peopleMore = document.getElementById("people-more");

let peopleIndex = 4;

peopleLess.addEventListener("click", () => {
  peopleIndex--;

  if (peopleIndex <= 0) {
    peopleIndex = 1;
    people.value = peopleIndex + " People";
  } else {
    people.value = peopleIndex + " People";
  }
});

peopleMore.addEventListener("click", () => {
  peopleIndex++;

  if (peopleIndex >= 4) {
    peopleIndex = 4;
    people.value = peopleIndex + " People";
  } else {
    people.value = peopleIndex + " People";
  }
});

let checkinData = document.getElementById("checkin-data");
let checkin = document.getElementById("checkin");
let checkoutData = document.getElementById("checkout-data");
let checkout = document.getElementById("checkout");

checkin.addEventListener("change", () => {
  let checkinValue = checkin.value;
  let dates = new Date(checkinValue);
  let dates2 = new Date();

  const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = week[dates.getDay()];

  let date = checkinValue.slice(8, 10);
  console.log(date);

  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let month = months[dates.getMonth()];
  console.log(month);

  if (dates < dates2) {
    console.log("No date");
  } else {
    checkinData.innerText = day + ", " + date + " " + month;
  }
});

checkout.addEventListener("change", () => {
  let checkoutValue = checkout.value;
  let dates = new Date(checkoutValue);
  let dates2 = new Date();

  const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = week[dates.getDay()];

  let date = checkoutValue.slice(8, 10);
  console.log(date);

  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let month = months[dates.getMonth()];
  console.log(month);

  if (dates < dates2) {
    console.log("No date");
  } else {
    checkoutData.innerText = day + ", " + date + " " + month;
  }
});

let checkinMore = document.getElementById("checkin-more");
let checkinLess = document.getElementById("checkin-less");
let checkoutMore = document.getElementById("checkout-more");
let checkoutLess = document.getElementById("checkout-less");

checkinMore.addEventListener("click", () => {
  const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let today = new Date();
  let tomorrow = new Date(today);

  tomorrow.setDate(tomorrow.getDate() + 1);

  let day = week[tomorrow.getDay()];
  let date = tomorrow.getDate();
  let month = months[tomorrow.getMonth()];

  checkinData.innerText = day + ", " + date + " " + month;
});

checkinLess.addEventListener("click", () => {
  const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let today = new Date();
  //   let tomorrow = new Date(today);

  //   tomorrow.setDate(tomorrow.getDate() + 1);

  let day = week[today.getDay()];
  let date = today.getDate();
  let month = months[today.getMonth()];

  checkinData.innerText = day + ", " + date + " " + month;
});

checkoutMore.addEventListener("click", () => {
  const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let today = new Date();
  let tomorrow = new Date(today);

  tomorrow.setDate(tomorrow.getDate() + 2);

  let day = week[tomorrow.getDay()];
  let date = tomorrow.getDate();
  let month = months[tomorrow.getMonth()];

  checkoutData.innerText = day + ", " + date + " " + month;
});

checkoutLess.addEventListener("click", () => {
  const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let today = new Date();
  //   let tomorrow = new Date(today);

  //   tomorrow.setDate(tomorrow.getDate() + 1);

  let day = week[today.getDay()];
  let date = today.getDate();
  let month = months[today.getMonth()];

  checkoutData.innerText = day + ", " + date + " " + month;
});

const images = [
  "url(img/bg.png) no-repeat center/cover",
  "url(img/bg2.jpg) no-repeat center/cover",
  "url(img/bg3.jpeg) no-repeat center/cover",
];
let index = 1;

let h6 = document.getElementById("h6");

h6.innerText = "+" + useImageDimensions.length;

let btnLeft = document.getElementbyId("btn-left");
let btnRight = document.getElementbyId("btn-right");
let style = document.getElementsByClassName("content")[0].style;
btnLeft.addEventListener("click", () => {
  index--;
  if (index < 0) {
    index = images.length - 1;
  }
  style.setProperty("--background", images[index]);
});

btnRight.addEventListener("click", () => {
  index++;
  if (index > images.length - 1) {
    index = 0;
  }
  style.setProperty("--background", images[index]);
});
