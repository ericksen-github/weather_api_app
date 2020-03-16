import { apiFunctions } from "./components/apiCall";

apiFunctions.newCall("initial call");

document.getElementById("celsius").style.pointerEvents = "none";
document.getElementById("fahrenheit").style.background =
  "linear-gradient(to bottom, #000000 5%, #a34b59 100%)";
