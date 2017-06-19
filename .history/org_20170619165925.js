data = [
  {
    name: Zuckerberg,
    parent: null
  },
  {
    name: Schroepfer,
    parent: Zuckerberg
  },
  {
    name: Bosworth,
    parent: Schroepfer
  },
  {
    name: Steve,
    parent: Bosworth
  },
  {
    name: Kyle,
    parent: Bosworth
  },
  {
    name: Andra,
    parent: Bosworth
  },
  {
    name: Zhao,
    parent: Schroepfer
  },
  {
    name: Richie,
    parent: Zhao
  },
  {
    name: Sofia,
    parent: Zhao
  },
  {
    name: Jen,
    parent: Zhao
  },
  {
    name: Schrage,
    parent: Zuckerberg
  },
  {
    name: VanDyck,
    parent: Schrage
  },
  {
    name: Sabrina,
    parent: VanDyck
  },
  {
    name: Michelle,
    parent: VanDyck
  },
  {
    name: Josh,
    parent: VanDyck
  },
  {
    name: Swain,
    parent: Schrage
  },
  {
    name: Blanch,
    parent: Swain
  },
  {
    name: Tom,
    parent: Swain
  },
  {
    name: Joe,
    parent: Swain
  },

  {
    name: Sandberg,
    parent: Zuckerberg
  },
  {
    name: Goler,
    parent: Sandberg
  },
  {
    name: Eddie,
    parent: Goler
  },
  {
    name: Julie,
    parent: Goler
  },
  {
    name: Annie,
    parent: Goler
  },
  {
    name: Hernandez,
    parent: Sandberg
  },
  {
    name: Rowi,
    parent: Hernandez
  },
  {
    name: Inga,
    parent: Hernandez
  },
  {
    name: Morgan,
    parent: Hernandez
  },
  {
    name: Moissinac,
    parent: Sandberg
  },
  {
    name: Amy,
    parent: Moissinac
  },
  {
    name: Chuck,
    parent: Moissinac
  },
  {
    name: Vinni,
    parent: Moissinac
  },
  {
    name: Kelley,
    parent: Sandberg
  },
  {
    name: Eric,
    parent: Kelley
  },
  {
    name: Ana,
    parent: Kelley
  },
  {
    name: Wes,
    parent: Kelley
  }
];

function traverse(orgChart, boss) {
  let node = {};

  orgChart.filter(person => person.boss === boss)
  .forEach(item => (node[item.name] = traverse(orgChart, item.name)));
  return node;
}

const result = traverse(data, null);
console.log(JSON.stringify(result, null, 2));