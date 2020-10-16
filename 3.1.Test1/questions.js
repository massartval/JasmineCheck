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
let SupprEspaceString = (texte) => {};
let IsString = (texte) => {};

let AfficherExtensionString = (texte) => {};
let NombreEspaceString = (texte) => {};
let InverseString = (texte) => {};

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
let calculPuissance = (x, y) => {};
let valeurAbsolue = (nombre) => {};
let valeurAbsolueArray = (array) => {};
let sufaceCercle = (rayon) => {};
let hypothenuse = (ab, ac) => {};
let calculIMC = (poids, taille) => {};
