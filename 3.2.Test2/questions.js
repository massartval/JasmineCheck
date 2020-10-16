let CreationTableauLangages = () => {
  let langages = ["Html", "CSS", "Java", "PHP"];
  return langages;
};

let CreationTableauNombres = () => {
  let nombres = [0, 1, 2, 3, 4, 5];
  return nombres;
};

let RemplacementElement = (langages) => {
  let i = langages.indexOf("Java");
  langages[i] = "Javascript";
  return langages;
};

let AjoutElementLangages = (langages) => {
  langages.push("Ruby");
  langages.push("Python");
  return langages;
};

let AjoutElementNombres = (nombres) => {
  nombres.unshift(-1);
  nombres.unshift(-2);
  return nombres;
};

let SuppressionPremierElement = (langages) => {
  langages.shift();
  return langages;
};

let SuppressionDernierElement = (langages) => {
  langages.pop();
  return langages;
};

let ConversionChaineTableau = (reseaux_sociaux_chaine) => {
  let reseaux_sociaux = reseaux_sociaux_chaine.split(",");
  return reseaux_sociaux;
};

let ConversionTableauChaine = (langages) => {};

let TriTableau = (reseaux_sociaux) => {};

let InversionTableau = (reseaux_sociaux) => {};
