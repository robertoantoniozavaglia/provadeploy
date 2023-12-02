document.querySelector('.user').addEventListener('click', function() {
  var dropdown = this.querySelector('.dropdown');
  dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";
});

function changeVideo(videoSrc, videoTitle) {
  var videoElement = document.getElementById("myVideo");
  videoElement.src = videoSrc;

  var videoTitleElement = document.getElementById("videoTitle");
  videoTitleElement.textContent = videoTitle;
}

var videoIndex = 0; // Indice del video corrente
var videoList = [
  "SerieTv/Jujutsu Kaisen 1/JujutsuKaisen_Ep_01_ITA.mp4",
  "SerieTv/Jujutsu Kaisen 1/JujutsuKaisen_Ep_02_ITA.mp4",
  "SerieTv/Jujutsu Kaisen 1/JujutsuKaisen_Ep_03_ITA.mp4",
  "SerieTv/Jujutsu Kaisen 1/JujutsuKaisen_Ep_04_ITA.mp4",
  "SerieTv/Jujutsu Kaisen 1/JujutsuKaisen_Ep_05_ITA.mp4",
  "SerieTv/Jujutsu Kaisen 1/JujutsuKaisen_Ep_06_ITA.mp4",
  "SerieTv/Jujutsu Kaisen 1/JujutsuKaisen_Ep_07_ITA.mp4",
  "SerieTv/Jujutsu Kaisen 1/JujutsuKaisen_Ep_08_ITA.mp4",
  "SerieTv/Jujutsu Kaisen 1/JujutsuKaisen_Ep_09_ITA.mp4",
  "SerieTv/Jujutsu Kaisen 1/JujutsuKaisen_Ep_10_ITA.mp4",
  "SerieTv/Jujutsu Kaisen 1/JujutsuKaisen_Ep_11_ITA.mp4",
  "SerieTv/Jujutsu Kaisen 1/JujutsuKaisen_Ep_12_ITA.mp4",
  "SerieTv/Jujutsu Kaisen 1/JujutsuKaisen_Ep_13_ITA.mp4",
  "SerieTv/Jujutsu Kaisen 1/JujutsuKaisen_Ep_14_ITA.mp4",
  "SerieTv/Jujutsu Kaisen 1/JujutsuKaisen_Ep_15_ITA.mp4",
  "SerieTv/Jujutsu Kaisen 1/JujutsuKaisen_Ep_16_ITA.mp4",
  "SerieTv/Jujutsu Kaisen 1/JujutsuKaisen_Ep_17_ITA.mp4",
  "SerieTv/Jujutsu Kaisen 1/JujutsuKaisen_Ep_18_ITA.mp4",
  "SerieTv/Jujutsu Kaisen 1/JujutsuKaisen_Ep_19_ITA.mp4",
  "SerieTv/Jujutsu Kaisen 1/JujutsuKaisen_Ep_20_ITA.mp4",
  "SerieTv/Jujutsu Kaisen 1/JujutsuKaisen_Ep_21_ITA.mp4",
  "SerieTv/Jujutsu Kaisen 1/JujutsuKaisen_Ep_22_ITA.mp4",
  "SerieTv/Jujutsu Kaisen 1/JujutsuKaisen_Ep_23_ITA.mp4",
  "SerieTv/Jujutsu Kaisen 1/JujutsuKaisen_Ep_24_ITA.mp4",
  // Aggiungi gli altri video nella lista
];

var videoElement = document.getElementById("myVideo");
videoElement.src = videoList[videoIndex];
videoElement.addEventListener("ended", playNextVideo);

function playNextVideo() {
  videoIndex++; // Passa al video successivo
  if (videoIndex >= videoList.length) {
    videoIndex = 0; // Torna al primo video se si è raggiunta la fine della lista
  }
  videoElement.src = videoList[videoIndex];
  videoElement.play();
  
  var videoTitleElement = document.getElementById("videoTitle");
  videoTitleElement.textContent = "Jujutsu Kaisen 1 Stagione - Episodio " + (videoIndex + 1);
  
  // Mostra il countdown 10 secondi prima della fine del video

  var countdownElement = document.getElementById("countdown");
  countdownElement.classList.add("hidden"); 

  setTimeout(showCountdown, (videoElement.duration - 10) * 1000);
}

function showCountdown() {
  var countdownElement = document.createElement("div");
  countdownElement.classList.add("countdown");
  document.body.appendChild(countdownElement);
  
  var countdown = 10;
  var countdownInterval = setInterval(function() {
    countdownElement.textContent = "Prossimo video tra... " + countdown + " secondi";
    countdown--;
    if (countdown < 0) {
      clearInterval(countdownInterval);
      document.body.removeChild(countdownElement);
    }
  }, 1000);
}

videoElement.addEventListener("timeupdate", showCountdown);

function showCountdown() {
  var currentTime = videoElement.currentTime;
  var duration = videoElement.duration;
  var remainingTime = duration - currentTime;
  
  if (remainingTime <= 10) {
    var countdownElement = document.getElementById("countdown");
    countdownElement.textContent = "Prossimo video tra " + Math.ceil(remainingTime) + " secondi";
    countdownElement.classList.remove("hidden");
  }
}

function goToNextVideo() {
  playNextVideo(); // Chiamata alla funzione per passare al video successivo
}