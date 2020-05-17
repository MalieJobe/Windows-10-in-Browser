// buttons & triggers
const startBtn = document.getElementById('startBtn');
const startmenu = document.querySelector('.startmenu');
const taskbartime = document.getElementById('taskbartime');


// Startmenu show/hide
startBtn.addEventListener('click', () => {
    startmenu.classList.toggle('startmenu--active');
})

// display current time
const months = ['January', 'February', 'March', 'April', 'Mai','June', 'July', 'August', 'September', 'October', 'November', 'December'];
const updateClock = () => {
    let now = new Date();
    let seconds = now.getSeconds();
    let minutes = now.getMinutes();
    let hours = now.getHours();
    let weekday = now.getDay();
    let date = now.getDate();
    let month = months[now.getMonth()];
    let year = now.getFullYear();

    taskbartime.textContent = `${hours}:${minutes}`

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