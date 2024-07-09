const firstLayout = document.querySelector(".first-layout");
const Backsound = document.getElementById("Backsound");
function playGame() {
  firstLayout.style.display = "none";
  Backsound.play();
  Backsound.loop = "true";
}
// Actions Halaman index.html
function showResultAngka() {
  const result = document.getElementById("result-angka");
  result.style.transform = "scale(1)";
  const select = document.getElementById("select");
  select.play();
}
function showResultHuruf() {
  const result = document.getElementById("result-huruf");
  result.style.transform = "scale(1)";
  const select = document.getElementById("select");
  select.play();
}
function showResultBuah() {
  const result = document.getElementById("result-buah");
  result.style.transform = "scale(1)";
  const select = document.getElementById("select");
  select.play();
}
function showResultSayur() {
  const result = document.getElementById("result-sayur");
  result.style.transform = "scale(1)";
  const select = document.getElementById("select");
  select.play();
}
function showResultHewan() {
  const result = document.getElementById("result-hewan");
  result.style.transform = "scale(1)";
  const select = document.getElementById("select");
  select.play();
}
function closeResult() {
  const close = document.querySelectorAll("#close-result");
  const result = document.querySelectorAll(".box-questions");
  for (let i = 0; i < close.length; i++) {
    for (let j = 0; j < result.length; j++) {
      result[i].style.transform = "scale(0)";
    }
  }
}
// ======================================================================================//
// ======================================================================================//
// ======================================================================================//
// Navigations
function mengenalAngka() {
  const select = document.getElementById("select");
  select.play();
  setTimeout(() => {
    window.location.href = "../Design-Game/mengenal/angka.html";
  }, 1000);
}
function mengenalHuruf() {
  const select = document.getElementById("select");
  select.play();
  setTimeout(() => {
    window.location.href = "../Design-Game/mengenal/huruf.html";
  }, 1000);
}
function mengenalBuah() {
  const select = document.getElementById("select");
  select.play();
  setTimeout(() => {
    window.location.href = "../Design-Game/mengenal/buah.html";
  }, 1000);
}
function mengenalSayur() {
  const select = document.getElementById("select");
  select.play();
  setTimeout(() => {
    window.location.href = "../Design-Game/mengenal/sayur.html";
  }, 1000);
}
function mengenalHewan() {
  const select = document.getElementById("select");
  select.play();
  setTimeout(() => {
    window.location.href = "../Design-Game/mengenal/hewan.html";
  }, 1000);
}
function pertanyaanAngka() {
  const select = document.getElementById("select");
  select.play();
  setTimeout(() => {
    window.location.href = "../Design-Game/pertanyaan/angka.html";
  }, 1000);
}

function pertanyaanHuruf() {
  const select = document.getElementById("select");
  select.play();
  setTimeout(() => {
    window.location.href = "../Design-Game/pertanyaan/huruf.html";
  }, 1000);
}
function pertanyaanBuah() {
  const select = document.getElementById("select");
  select.play();
  setTimeout(() => {
    window.location.href = "../Design-Game/pertanyaan/buah.html";
  }, 1000);
}
function pertanyaanSayur() {
  const select = document.getElementById("select");
  select.play();
  setTimeout(() => {
    window.location.href = "../Design-Game/pertanyaan/sayur.html";
  }, 1000);
}
function pertanyaanHewan() {
  const select = document.getElementById("select");
  select.play();
  setTimeout(() => {
    window.location.href = "../Design-Game/pertanyaan/hewan.html";
  }, 1000);
}
function kembali() {
  window.location.href = "../index.html";
}
// ======================================================================================//
// ======================================================================================//
// ======================================================================================//
// Jika Jawaban Benar
function soundBenar() {
  const suara = document.getElementById("sound-yeay");
  suara.play();
  const resultBenar = document.getElementById("result-benar");
  resultBenar.style.display = "flex";
}
// Jika Jawaban Salah
function soundSalah() {
  const suara = document.getElementById("sound-salah");
  suara.play();
  const resultSalah = document.getElementById("result-salah");
  resultSalah.style.display = "flex";
}
// ======================================================================================//
// ======================================================================================//
// ======================================================================================//
// Clear Notif Benar
function clearNotif() {
  const resultBenar = document.getElementById("result-benar");
  resultBenar.style.display = "none";
}
// Clear Notif Salah
function clearNotifSalah() {
  const resultBenar = document.getElementById("result-salah");
  resultBenar.style.display = "none";
}
// ======================================================================================//
// ======================================================================================//
// ======================================================================================//
// Actions Halaman Mengenal Huruf
function btnA() {
  const suara = document.getElementById("sound1");
  suara.play();
}
function btnB() {
  const suara = document.getElementById("sound2");
  suara.play();
}
function btnC() {
  const suara = document.getElementById("sound3");
  suara.play();
}
function btnD() {
  const suara = document.getElementById("sound4");
  suara.play();
}
function btnE() {
  const suara = document.getElementById("sound5");
  suara.play();
}

function btnG() {
  const suara = document.getElementById("sound7");
  suara.play();
}
function btnH() {
  const suara = document.getElementById("sound8");
  suara.play();
}
function btnI() {
  const suara = document.getElementById("sound9");
  suara.play();
}
function btnJ() {
  const suara = document.getElementById("sound10");
  suara.play();
}
// ======================================================================================//
// ======================================================================================//
// ======================================================================================//
