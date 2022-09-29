//remove the () and reverse the word inside () function eg foo(bar) => foorab
function reverseWord(word: string): string {
  const regex = /\(([^)]+)\)/;
  const found = word.match(regex);
  if (found) {
    const reversedWord = found[1].split("").reverse().join("");
    return word.replace(regex, reversedWord);
  }
  return word;
}

//remove the () and reverse the word inside () without using regex eg foo(bar) => foorab
function reverseWord2(word: string): string {
  let reversedWord = "";
  let result = "";
  let isInsideParenthesis = false;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === "(") {
      isInsideParenthesis = true;
    } else if (word[i] === ")") {
      isInsideParenthesis = false;
      result += reversedWord.split("").reverse().join("");
    } else if (isInsideParenthesis) {
      reversedWord = reversedWord + word[i];
    } else {
      result += word[i];
    }
  }
  return result;
}

console.log(this.reverseTest("foo(bar)"));
console.log(this.reverseTest("(bar)"));
