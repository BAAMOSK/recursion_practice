let countingSheep = (num) => {
  console.log(`There are ${num} sheep.  Another one jumps over the fence.`);
  return num > 1 ? countingSheep(num - 1) : console.log(
    "There are no more sheep.  Asleep yet?");
}

countingSheep(10);
