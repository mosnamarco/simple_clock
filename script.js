function showTime() {
  const date = new Date()
  var hours = date.getHours()
  var minutes = date.getMinutes()
  var seconds = date.getSeconds()
  // var milliseconds = date.getMilliseconds()
  
  if (minutes < 10) {
    minutes = "0" + minutes
  }
  
  if (seconds < 10) {
    seconds = "0" + seconds
  }

  // if (milliseconds < 1000) {
  //   milliseconds = "0" + milliseconds
  //   if (milliseconds < 100) {
  //     milliseconds = "0" + milliseconds
  //     if (milliseconds < 10)
  //       milliseconds = "0" + milliseconds
  //   }
  // }

  var period
  if (hours > 12) {
    period = "PM"
    if ((hours - 12) < 10)
      hours = "0" + (hours - 12)
    else
      hours -= 12
  }
  else
    period = "AM"

  // document.getElementById("MyClockDisplay").innerText = `${hours} : ${minutes} : ${seconds} : ${milliseconds} ${period}`;
  document.getElementById("MyClockDisplay").innerText = `${hours} : ${minutes} : ${seconds} ${period}`;


  setTimeout(() => showTime(), 1);
}

showTime();
