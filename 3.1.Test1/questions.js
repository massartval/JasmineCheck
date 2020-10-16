let tailleString = (texte) => {
  return texte.length;
};
let remplaceECar = (texte) => {
  let a = texte.indexOf("e");
  let text = texte.substr(" ", a) + " " + texte.substr(a + 1, texte.length);
  return text;
};
let concatString = (texte1, texte2) => {
  let concatStr = `${texte1}${texte2}`;
  return concatStr;
};
let afficherCar5 = (texte) => {
  let car5 = texte.charAt(4);
  return car5;
};
let afficher9Car = (texte) => {
  let first9car = texte.substr(0, 9);
  return first9car;
};
let majusculeString = (texte) => {
  let majStr = texte.toUpperCase();
  return majStr;
};
let minusculeString = (texte) => {
  let minStr = texte.toLowerCase();
  return minStr;
};
let SupprEspaceString = (texte) => {
  texte = texte.trim();
  return texte;
};
let IsString = (texte) => {
  if (typeof texte === "string") {
    return true;
  }
};

let AfficherExtensionString = (texte) => {
  // Use the lastIndexOf method to find the last period in the string, and get the part of the string after that:
  let dot = texte.lastIndexOf(".");
  let ext = texte.substr(dot + 1);
  return ext;
};
let NombreEspaceString = (texte) => {
  // Use match(regex)
  let space = / /g;
  let spacesCount = texte.match(space);
  return spacesCount.length;
};
let InverseString = (texte) => {
  let etxet = "";
  for (i = texte.length - 1; i >= 0; i--) {
    etxet += texte[i];
  }
  return etxet;
};

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
let calculPuissance = (x, y) => {};
let valeurAbsolue = (nombre) => {};
let valeurAbsolueArray = (array) => {};
let sufaceCercle = (rayon) => {};
let hypothenuse = (ab, ac) => {};
let calculIMC = (poids, taille) => {};
