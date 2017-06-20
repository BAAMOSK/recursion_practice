data = [
  {
    name: 'Zuckerberg',
    boss: null
  },
  {
    name: 'Schroepfer',
    boss: 'Zuckerberg'
  },
  {
    name: 'Bosworth',
    boss: 'Schroepfer'
  },
  {
    name: 'Steve',
    boss: 'Bosworth'
  },
  {
    name: 'Kyle',
    boss: 'Bosworth'
  },
  {
    name: 'Andra',
    boss: 'Bosworth'
  },
  {
    name: 'Zhao',
    boss: 'Schroepfer'
  },
  {
    name: 'Richie',
    boss: 'Zhao'
  },
  {
    name: 'Sofia',
    boss: 'Zhao'
  },
  {
    name: 'Jen',
    boss: 'Zhao'
  },
  {
    name: 'Schrage',
    boss: 'Zuckerberg'
  },
  {
    name: 'VanDyck',
    boss: 'Schrage'
  },
  {
    name: 'Sabrina',
    boss: 'VanDyck'
  },
  {
    name: 'Michelle',
    boss: 'VanDyck'
  },
  {
    name: 'Josh',
    boss: 'VanDyck'
  },
  {
    name: 'Swain',
    boss: 'Schrage'
  },
  {
    name: 'Blanch',
    boss: 'Swain'
  },
  {
    name: 'Tom',
    boss: 'Swain'
  },
  {
    name: 'Joe',
    boss: 'Swain'
  },

  {
    name: 'Sandberg',
    boss: 'Zuckerberg'
  },
  {
    name: 'Goler',
    boss: 'Sandberg'
  },
  {
    name: 'Eddie',
    boss: 'Goler'
  },
  {
    name: 'Julie',
    boss: 'Goler'
  },
  {
    name: 'Annie',
    boss: 'Goler'
  },
  {
    name: 'Hernandez',
    boss: 'Sandberg'
  },
  {
    name: 'Rowi',
    boss: 'Hernandez'
  },
  {
    name: 'Inga',
    boss: 'Hernandez'
  },
  {
    name: 'Morgan',
    boss: 'Hernandez'
  },
  {
    name: 'Moissinac',
    boss: 'Sandberg'
  },
  {
    name: 'Amy',
    boss: 'Moissinac'
  },
  {
    name: 'Chuck',
    boss: 'Moissinac'
  },
  {
    name: 'Vinni',
    boss: 'Moissinac'
  },
  {
    name: 'Kelley',
    boss: 'Sandberg'
  },
  {
    name: 'Eric',
    boss: 'Kelley'
  },
  {
    name: 'Ana',
    boss: 'Kelley'
  },
  {
    name: 'Wes',
    boss: 'Kelley'
  }
];

// function traverse(orgChart, boss) {
//   let node = {};

//   orgChart.filter(person => person.boss === boss)
//   .forEach(item => (node[item.name] = traverse(orgChart, item.name)));
//   return node;
// }

// const result = traverse(data, null);
// console.log(JSON.stringify(result, null, 2));

function orgThis(data) {
  let result = [{name:data[0].name}];

  result.push(data.map(function(person) {
    if(person.boss === 'Zuckerberg') {
      return person;
    }
  }).filter(Boolean));

  result[0][0].push(data.map(function(person) {
    if(person.boss === 'Schroepfer') {
      return person.name
    }
  }).filter(Boolean));
  //result.employee[0].employee[0] = data.filter(person => person.boss === 'Bosworth');
  return JSON.stringify(result, null, 10);
};

const orgChart = orgThis(data);
console.log(orgChart);