const data = {
  Zuckerberg: { boss: null },
  Schroepfer: { boss: Zuckerberg },
};

function traverse(orgChart, boss) {
  let node = {};

  orgChart
    .filter(person => person.boss === boss)
    //
    .forEach(item => (node[item] = traverse(orgChart, item)));
  return node;
}
console.log(traverse(data, null));
