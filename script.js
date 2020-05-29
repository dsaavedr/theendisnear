possibilities = [
  {
    "name": "You'll get hit by a bulldozer on the way to work and die at 42.",
    "age": 42
  },
  {
    "name": "You'll be killed by a teenager on a cocaine-fueled rampage when you're 60.",
    "age": 60
  },
  {
    "name": "Your middle life crisis results in a heroin-fueled orgy in which you get HIV. You die a slow, agonizing death, after your entire family leaves you at 55.",
    "age": 55
  },
  {
    "name": "A way to transfer your conscience into a robot is found, you die when a software update goes wrong at 453.",
    "age": 453
  },
  {
    "name": "Your life is as average as your intellect and charisma. You die at 70, probably of boredom.",
    "age": 70
  },
  {
    "name": "You'll die by choking on gum at 30, you idiot.",
    "age": 30
  },
  {
    "name": "You'll die from a heart attack at 62.",
    "age": 62
  },
  {
    "name": "A meteor falls on your house and you die at 32. Your daughter watches in horror from the driveway. Oops.",
    "age": 32
  },
  {
    "name": "You die after an airline pilot decides to fly by his girlfriend's house and crashes. You die at 26",
    "age": 26
  },
  {
    "name": "You're in a car crash after sneezing so hard you veer right suddenly. You kill your mom who was lovingly waiting for you. You wake up in hell at 42.",
    "age": 42
  }
];

Date.daysBetween = function( date1, date2 ) {
  //Get 1 day in milliseconds
  var one_day=1000*60*60*24;

  // Convert both dates to milliseconds
  var date1_ms = date1.getTime();
  var date2_ms = date2.getTime();

  // Calculate the difference in milliseconds
  var difference_ms = date2_ms - date1_ms;

  // Convert back to days and return
  return Math.round(difference_ms/one_day);
}

theEndIsNear = function (date, s) {
  var day_ms = 1000*60*60*24;
  var day_s = day_ms*1000;

  var start = date;
  var now = new Date();
  var finish = start;

  // Sacar número de años de un conjunto aleatorio de posibilidades

  
  
  // Días en una vida de 70 años

  var tot_d = s*365.25;
  var tot_ms = tot_d*24*60*60*1000;
  var tot_s = tot_ms*1000;

  var vida = now.getTime() - start.getTime();
  var vida_s = vida * 1000;

  var p = (vida_s/tot_s)*100;

  return parseFloat(p.toFixed(7));
}

init = function () {
  var t = document.getElementById("time");
  var d = document.getElementById("date").value;
  var s = document.getElementById("scenario");

  d = new Date(d);

  var sc = Math.round(Math.random() * possibilities.length);

  t.innerHTML = "";
  t.classList.add("vertical-center");
  t.innerHTML = "<h1>" + theEndIsNear(d, parseInt(possibilities[sc].age)) + "%" + "</h1>";

  s.innerHTML = possibilities[sc].name;

  window.setInterval(function() {
    t.innerHTML = "<h1>" + theEndIsNear(d, parseInt(possibilities[sc].age)) + "%" + "</h1>";
  }, 1000);
}