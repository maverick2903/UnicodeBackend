let prompt = require("prompt-sync")();
let n = prompt("Enter the value of n: ");
let words = [];
console.log("Enter the words:");
for (let i = 0; i < n; i++) {
  words[i] = prompt();
}
let distinct_ctr = 0;

for (let i = 0; i < words.length; i++) {
  let flag = 0;
  for (let j = i + 1; j < words.length; j++) {
    if (words[i] == words[j]) {
      flag = 1;
    }
  }
  if (flag != 1) {
    distinct_ctr++;
  }
}

console.log(distinct_ctr);

let repeat_ctr = {};
for (let word of words) {
  if (repeat_ctr[word]) repeat_ctr[word]++;
  else repeat_ctr[word] = 1;
}

console.log(repeat_ctr);
