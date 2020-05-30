var possibilities;

$.getJSON('./possibilities.json', function(e) {
  possibilities = e;
});

log = function (s) {
  console.log(s);
}

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

  window.setInterval(function() {
    t.innerHTML = "<p>" + possibilities[sc].name + "</p>" + "<h1>" + theEndIsNear(d, parseInt(possibilities[sc].age)) + "%" + "</h1>";
  }, 1000);
}