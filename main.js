function calculate() {
  var dobinput = document.getElementById("dob").value;

  var dob = new Date(dobinput);
  const today = new Date();
  var age = today.getFullYear() - dob.getFullYear();
  document.getElementById("result").innerText = `You are ${age} years old.`;
  const now = new Date();
  var date = now.toLocaleDateString();
  var time = now.toLocaleTimeString();
  document.getElementById("time").innerHTML = `<strong>The local time and data are ${date}</strong>`;
  document.getElementById("date").innerHTML = `<strong>${time}</strong>`;
//   new Date() creates a new Date object that represents the current date and time.
// now is a variable that holds this Date object.
//   now.toLocaleDateString() converts the Date object into a string that shows just the date part (e.g., "7/22/2024" in the format MM/DD/YYYY).
}
s