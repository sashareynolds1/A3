const phraseButton = document.querySelector("#phrase-button");

const phraseToAcronym = (phrase) => {
  if (typeof phrase !== "string") return "";

  return phrase

  .split(/-| /)

  .map((word) => word.substring(0,1))

  .join("")

  .toUpperCase();
};

phraseButton.addEventListener("click", () => {

  const phraseElement = document.querySelector('#phrase');
  const phrase = phraseElement.value || "";
  const acronymResultElement = document.querySelector("#acronym-made");

acronymResultElement.innerHTML = phraseToAcronym(phrase);

});
  
