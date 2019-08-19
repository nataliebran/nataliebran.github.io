function log_hours_slept() {
  var number = document.getElementById("hours").value.toString();

  var hours_slept = document.getElementById("hours_slept");
  var log = document.createElement("p");
  log.textContent = number + " hours is not enough!";

  hours_slept.appendChild(log);


}
