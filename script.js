// buttons & triggers
const startBtn = document.getElementById('startBtn');
const startmenu = document.querySelector('.startmenu');
const taskbartime = document.getElementById('taskbartime');
const calTime = document.getElementById('calTime');
const calDate = document.getElementById('calDate');


// Startmenu show/hide
startBtn.addEventListener('click', () => {
    startmenu.classList.toggle('startmenu--active');
})

// display current time
const months = ['January', 'February', 'March', 'April', 'May','June', 'July', 'August', 'September', 'October', 'November', 'December'];
const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const updateClock = () => {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    const weekday = weekdays[now.getDay() - 1];
    const date = now.getDate();
    const month = months[now.getMonth()];
    const year = now.getFullYear();

    taskbartime.textContent = `${hours}:${minutes}`
    calTime.textContent = `${hours}:${minutes}:${("0" + seconds).substr(-2,2)}`
    calDate.textContent = `${weekday}, ${date} ${month} ${year}`

    setTimeout(updateClock, 1000);
}

updateClock();


// Video Stream for camera
var video = document.getElementById("videoElement");

if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
      video.srcObject = stream;
    })
    .catch(function (err0r) {
      console.log("Something went wrong!");
    });
}

function stop(e) {
    var stream = video.srcObject;
    var tracks = stream.getTracks();
  
    for (var i = 0; i < tracks.length; i++) {
      var track = tracks[i];
      track.stop();
    }
  
    video.srcObject = null;
  }