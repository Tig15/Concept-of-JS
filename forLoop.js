const fruitsMaze = ["Apple", "Melon", "Mango", "PineApple", "Guava", "Banana"];
const onlyMfruit = [];

for (let i = 0; i < fruitsMaze.length; i++) {
  if (fruitsMaze[i].includes("M")) {
    onlyMfruit.push(fruitsMaze[i]);
    console.log(onlyMfruit);
  }
}

// While and Do-while loops

let i = 0;

while (i < fruitsMaze.length) {
  console.log(fruitsMaze[i].slice(1, 3));
  i++;
}
