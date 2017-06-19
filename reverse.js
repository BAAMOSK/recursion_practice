let str = ["Hey now, you're an all-star, get your game on, go play",
  "Hey now, you're a rock star, get the show on, get paid",
  "And all that glitters is gold",
  "Only shooting stars break the mold"
]

let reverser = (str) => {
  //console.log(str)
  if (str.length > 0) {
    return str[str.length - 1] + reverser(str.slice(0, str.length - 1));
  }
  return ""
}

//reverser(str[0]);

str.forEach(el => console.log(reverser(el)));
