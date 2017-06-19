const data = [
  Zuckerberg: {
    parent: null
  },
  Schroepfer: {
    parent: Zuckerberg
  },
  Bosworth: {
    parent: Schroepfer
  },
  Steve: {
    parent: Bosworth
  },
  Kyle: {
    parent: Bosworth
  },
  Andra: {
    parent: Bosworth
  },
  Zhao: {
    parent: Schroepfer
  },
  Richie: {
    parent: Zhao
  },
  Sofia: {
    parent: Zhao
  },
  Jen: {
    parent: Zhao
  },
  Schrage: {
    parent: Zuckerberg
  },
  VanDyck: {
    parent: Schrage
  },
  Sabrina: {
    parent: VanDyck
  },
  Michelle: {
    parent: VanDyck
  },
  Josh: {
    parent: VanDyck
  },
  Swain: {
    parent: Schrage
  },
  Blanch: {
    parent: Swain
  },
  Tom: {
    parent: Swain
  },
  Joe: {
    parent: Swain
  },

  Sandberg: {
    parent: Zuckerberg
  },
  Goler: {
    parent: Sandberg
  },
  Eddie: {
    parent: Goler
  },
  Julie: {
    parent: Goler
  },
  Annie: {
    parent: Goler
  },
  Hernandez: {
    parent: Sandberg
  },
  Rowi: {
    parent: Hernandez
  },
  Inga: {
    parent: Hernandez
  },
  Morgan: {
    parent: Hernandez
  },
  Moissinac: {
    parent: Sandberg
  },
  Amy: {
    parent: Moissinac
  },
  Chuck: {
    parent: Moissinac
  },
  Vinni: {
    parent: Moissinac
  },
  Kelley: {
    parent: Sandberg
  },
  Eric: {
    parent: Kelley
  },
  Ana: {
    parent: Kelley
  },
  Wes: {
    parent: Kelley
  }
]

function traverse(orgChart, boss) {
  let node = {};

  orgChart.filter(person => person.boss === boss)
  .forEach(item => (node[item.name] = traverse(orgChart, item.name)));
  return node;
}

const result = traverse(data, null);
console.log(JSON.stringify(result, null, 2));