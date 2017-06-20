const data = [
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
  const result = [{name: data[0].name}];
  //group all employees with same boss
  result.executives = data.map(person => {
    if(person.boss === 'Zuckerberg') {
      return person;
    }
  }).filter(Boolean);

  //Get all employees under Schroepfer
  result.executives[0].managers = data.map(person =>  {
    if(person.boss == 'Schroepfer') {
      return person
    }
  }).filter(Boolean);
  //Managers under Schroepfer
  result.executives[0].managers[0].employees = data.map(person =>  {
    if(person.boss == 'Bosworth') {
      return person
    }
  }).filter(Boolean);
  result.executives[0].managers[1].employees = data.map(person =>  {
    if(person.boss == 'Zhao') {
      return person
    }
  }).filter(Boolean);

  //Get all employees under Schrage
  result.executives[1].managers = data.map(person =>  {
    if(person.boss == 'Schrage') {
      return person
    }
  }).filter(Boolean);
  //Managers under Schrage
result.executives[1].managers[0].employees = data.map(person =>  {
    if(person.boss == 'VanDyck') {
      return person
    }
  }).filter(Boolean);
  result.executives[1].managers[1].employees = data.map(person =>  {
    if(person.boss == 'Swain') {
      return person
    }
  }).filter(Boolean);

  //Get all employees under Sandberg
  result.executives[2].managers = data.map(person =>  {
    if(person.boss == 'Sandberg') {
      return person
    }
  }).filter(Boolean);
  //Managers under Sandberg
  result.executives[2].managers[0].employees = data.map(person =>  {
    if(person.boss == 'Goler') {
      return person
    }
  }).filter(Boolean);
  result.executives[2].managers[1].employees = data.map(person =>  {
    if(person.boss == 'Hernandez') {
      return person
    }
  }).filter(Boolean);
  result.executives[2].managers[2].employees = data.map(person =>  {
    if(person.boss == 'Moissinac') {
      return person
    }
  }).filter(Boolean);
  result.executives[2].managers[3].employees = data.map(person =>  {
    if(person.boss == 'Kelley') {
      return person
    }
  }).filter(Boolean);

  result = result.map(ceo => ceo.map(execs => execs.map(managers => managers.employees.name)));
  return result;
}

console.log(JSON.stringify(orgThis(data), null, 14));