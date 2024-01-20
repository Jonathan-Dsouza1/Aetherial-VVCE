// SUBSCRIPTION PLANS
document.addEventListener("DOMContentLoaded", function () {
  const plansSwitch = document.querySelector(".plans-switch");

  const monthlyPrices = {
    basic: "₹69",
    professional: "₹149",
    business: "₹99",
  };

  const yearlyPrices = {
    basic: "₹799",
    professional: "₹1699",
    business: "₹1099",
  };

  plansSwitch.addEventListener("change", () => {
    const planIds = ["basic-plan", "professional-plan", "business-plan"];
    const prices = plansSwitch.checked ? yearlyPrices : monthlyPrices;

    planIds.forEach((id) => {
      const plan = document.getElementById(id);
      const priceElement = plan.querySelector(".price");
      const durationElement = plan.querySelector(".plan-duration");

      priceElement.innerText = prices[id.split("-")[0]]; // Extract plan name from id
      durationElement.innerText = plansSwitch.checked ? "/ year" : "/ month";
    });
  });
});

//SCROLL TO TOP

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // This provides a smooth scrolling effect
  });
}

//NAVBARR
$(".expandHome").mouseover(function () {
  $(".sub-home").css({
    display: "block",
  });
});
$(".subnavbtn").mouseover(function () {
  $(".sub-home").css({
    display: "none",
  });
});

$("#trapezoid")
  .mouseleave(function () {
    $("#trapezoid").css({
      "margin-top": "-53px",
    });
    $(".sub-home").css({
      display: "none",
    });
  })
  .mouseenter(function () {
    $("#trapezoid").css({
      "margin-top": "0px",
    });
  });

// TEST NOW BUTTON

function redirectMe() {
  window.location.href = "http://192.168.172.245"; //Redirection for IR Sensor
  return;
}
function redirectToLogin() {
  window.location.href = "/login";
  return;
}
function redirectToHPLogin() {
  window.location.href = "/login-hp";
  return;
}
// Dialog to open
function openLoginModal() {
  const loginModal = document.getElementById("dialog");
  loginModal.showModal();
}

function redirectToUserLogin() {
  // Add logic to redirect to user login page
  console.log("Redirecting to user login");
  closeLoginModal();
}

function redirectToHospitalLogin() {
  // Add logic to redirect to hospital login page
  console.log("Redirecting to hospital login");
  closeLoginModal();
}

// SIMULATION PAGE
function loadCan() {
  const iframe = document.getElementById("webpageFrame");
  iframe.src = "./map.html";
}
