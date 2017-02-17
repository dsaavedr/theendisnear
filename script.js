$(document).ready(function () {
  p = theEndIsNear();

  $("#time h1")[0].innerHTML=p + "%";
  window.setInterval(function () {
    p = theEndIsNear();

    $("#time h1")[0].innerHTML=p + "%";
  },1500)
});

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

theEndIsNear = function () {
  var day_ms = 1000*60*60*24;
  var day_s = day_ms*1000;

  var start = new Date(1997,3,14);
  var now = new Date();
  var finish = start;

  // Días en una vida de 70 años

  var tot_d = 70*365.25;
  var tot_ms = tot_d*24*60*60*1000;
  var tot_s = tot_ms*1000;

  var vida = now.getTime() - start.getTime();
  var vida_s = vida * 1000;

  var p = (vida_s/tot_s)*100;

  return parseFloat(p.toFixed(10));
}
