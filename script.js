
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();

  if (email === "" || message === "") {
    alert("Veuillez remplir tous les champs.");
  } else if (!email.includes("@")) {
    alert("Veuillez entrer un email valide.");
  } else {
    alert("Merci pour votre message !");
    document.getElementById("contactForm").reset();
  }
});


function ouvrirJeu(num) {
  document.getElementById("modalJeu").style.display = "block";
  let zone = document.getElementById("zoneJeu");
  zone.innerHTML = ""; 

  if (num === 1) {
    lancerNombreMystere(zone);
  } else if (num === 2) {
    lancerPierreFeuilleCiseaux(zone);
  } else if (num === 3) {
    lancerQuiz(zone);
  }
}

function fermerJeu() {
  document.getElementById("modalJeu").style.display = "none";
}



function lancerNombreMystere(container) {
  let secret = Math.floor(Math.random() * 20) + 1;
  container.innerHTML = `
    <h3>Devine le nombre mystère (1 à 20)</h3>
    <input type="number" id="guess" placeholder="Votre nombre">
    <button onclick="verifierNombre(${secret})">Vérifier</button>
    <p id="resultat"></p>
  `;
}

function verifierNombre(secret) {
  let val = parseInt(document.getElementById("guess").value);
  let res = document.getElementById("resultat");
  if (val === secret) res.textContent = "Bravo 🎉 Vous avez trouvé !";
  else if (val < secret) res.textContent = "C'est plus grand !";
  else res.textContent = "C'est plus petit !";
}


function lancerPierreFeuilleCiseaux(container) {
  container.innerHTML = `
    <h3>Pierre – Feuille – Ciseaux</h3>
    <button onclick="jouer('pierre')">Pierre</button>
    <button onclick="jouer('feuille')">Feuille</button>
    <button onclick="jouer('ciseaux')">Ciseaux</button>
    <p id="resultatPFC"></p>
  `;
}

function jouer(choix) {
  let options = ["pierre", "feuille", "ciseaux"];
  let ordi = options[Math.floor(Math.random() * 3)];
  let res = document.getElementById("resultatPFC");

  if (choix === ordi) res.textContent = "Égalité  (" + ordi + ")";
  else if (
    (choix === "pierre" && ordi === "ciseaux") ||
    (choix === "feuille" && ordi === "pierre") ||
    (choix === "ciseaux" && ordi === "feuille")
  ) {
    res.textContent = "Vous avez Gagné  (" + ordi + ")";
  } else {
    res.textContent = "Vous avez Perdu  (" + ordi + ")";
  }
}


function lancerQuiz(container) {
  container.innerHTML = `
    <h3>Mini Quiz</h3>
    <p>1. Quelle balise sert à afficher une image en HTML ?</p>
    <input type="text" id="q1">
    <p>2. Quelle propriété CSS change la couleur du texte ?</p>
    <input type="text" id="q2">
    <p>3. Quelle instruction JS affiche un message dans la console ?</p>
    <input type="text" id="q3">
    <button onclick="corrigerQuiz()">Valider</button>
    <p id="resultatQuiz"></p>
  `;
}

function corrigerQuiz() {
  let score = 0;
  if (document.getElementById("q1").value.toLowerCase().includes("img")) score++;
  if (document.getElementById("q2").value.toLowerCase().includes("color")) score++;
  if (document.getElementById("q3").value.toLowerCase().includes("console.log")) score++;

  document.getElementById("resultatQuiz").textContent = "Score : " + score + "/3";
}
