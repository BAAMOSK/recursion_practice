let countingSheep = (num) => {
  console.log(`There are ${num} sheep.  Another one jumps over the fence.`);
  return num > 1 ? countingSheep(num - 1) : console.log(
    "There are no more sheep.  Asleep yet?");
}

countingSheep(10);

//Iterative
let cs2 = (num) => {
  for (let i = num; i > 0; i--) {
    console.log(`Dude, there's ${i} sheep.  And another one's jumpin'...`)
  }
  console.log("All them sheep did jump that there fence.");
}

console.log(cs2(10));
