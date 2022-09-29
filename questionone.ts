const wordsArr = [
  "AMOR",
  "XISELA",
  "JAMON",
  "ROMA",
  "OMAR",
  "MORA",
  "ESPONJA",
  "RAMO",
  "JAPONES",
  "ARMO",
  "MOJAN",
  "MARO",
  "ORAM",
  "MONJA",
  "ALEXIS",
];

//find the anagram of the word
function findAnagram(word: string, words: string[]): string[] {
  const sortedWord = word.split("").sort().join("");
  const anagrams = words.filter((w) => {
    return w.split("").sort().join("") === sortedWord;
  });
  return anagrams;
}

console.log(this.findAnagram("ESPONJA", wordsArr));
