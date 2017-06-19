const data = [
  {name: 'Zuckerberg', boss: null },
  {name: 'Schroepfer', boss: 'Zuckerberg'}
];

function traverse(orgChart, boss) {
  let node = {};

  orgChart.filter(person => person.boss === boss)
  .forEach(item => (node[item.name] = traverse(orgChart, item.name)));
  return node;
}

const result = traverse(data, null);
console.log(JSON.stringify(result, null, 2));