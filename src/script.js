let images = [
  "src/img/img1.jpg",
  "src/img/img2.jpg",
  "src/img/img3.jpg",
  "src/img/img4.jpg",
  "src/img/img5.jpg",
  "src/img/img6.jpg",
  "src/img/img7.jpg",
  "src/img/img8.jpg",
  "src/img/img9.jpg",
  "src/img/img10.jpg",
  "src/img/img11.jpg",
  "src/img/img12.jpg",
  "src/img/img13.jpg",
];

let currentIndex = 0; // Aktueller Index des Bildes

function render() {
  // In dieser Funktion werden die Bilder generiert und in einzelne DIV Container gepackt
  // Zusätzlich wird jedem erstellten DIV die Klasse "imgs" und die onclick Funktion "openImage()" hinzugefügt
  for (let i = 0; i < images.length; i++) {
    document.getElementById("pictures").innerHTML += `     
       <div class="imgs" onclick="openImage(${i})" ><img src="${images[i]}"></div> 
    `;
  }
}

function openImage(i) {
  currentIndex = i; // Setzt den aktuellen Index auf den ausgewählten Index

  // Hier werden die Bilder angeklickt und geöffnet
  document.getElementById("pictures").innerHTML = `
    <div onclick="closeImage()" id="close" class="close-btn"><img src="src/icons/close-btn.png"/></div>

    <div class="openImgs"><img src="${images[i]}"</div>

    <div class="leftRight">
      <img onclick="moveImageLeft()" src="src/icons/left.png" />
      <img onclick="moveImageRight()" src="src/icons/right.png" />
    </div>
  `;
}

function closeImage() {
  // Hier wird das Bild geschlossen und die render Funktion aufgerufen, sodass man am Startpunkt ist
  document.getElementById("pictures").innerHTML = "";
  render();
}

function moveImageRight() {
  // Durch currentIndex wird das Aktuelle Bild ermittelt
  // durch currentIndex + 1 wird der Aktuelle Index um 1 erhöht um zum nächsten Bild zu gelangen
  // durch den Operator % images.length wird die Anzahl des Arrays geprüft um ggf. zum Anfang zu Switchen
  // openImage(currentIndex) Öffnet dann das Bild
  currentIndex = (currentIndex + 1) % images.length;
  openImage(currentIndex);
}

function moveImageLeft() {
  // Hier wird das was in der Funktion moveImageRight ausgeführt wird umgekehrt ausgeführt
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  openImage(currentIndex);
}
