const players = [
  {
    name: "Lars Larsen",
    character: "Lars Bandasj",
    playernumber: 14,
    image: "",
  },
  {
    name: "Kjell Kjellsen",
    character: "Kjell Propell",
    playernumber: 10,
    image: "",
  },
  {
    name: "Anna Andersson",
    character: "Anna Ballerina",
    playernumber: 8,
    image: "",
  },
  {
    name: "Ola Olsen",
    character: "Ola Dunk",
    playernumber: 23,
    image: "",
  },
  {
    name: "Ida Idassen",
    character: "Ida Måke",
    playernumber: 17,
    image: "",
  },
  {
    name: "Per Persen",
    character: "Per Rakett",
    playernumber: 7,
    image: "",
  },
  {
    name: "Maja Majassen",
    character: "Maja Hopp",
    playernumber: 11,
    image: "",
  },
  {
    name: "Anders Andersen",
    character: "Anders Rask",
    playernumber: 2,
    image: "",
  },
  {
    name: "Sara Svensson",
    character: "Sara Snurr",
    playernumber: 21,
    image: "",
  },
  {
    name: "Erik Eriksen",
    character: "Erik Slalom",
    playernumber: 18,
    image: "",
  },
  {
    name: "Ingrid Ingesson",
    character: "Ingrid Sprint",
    playernumber: 3,
    image: "",
  },
];

for (let i = 0; i < players.length; i++) {
    document.getElementById("playersContainer").innerHTML += `<div id="playerCards">
    <h2>${players[i].name}</h2>
    <h3>${players[i].character}</h3>
    <p>${players[i].playernumber}</p>
    <img src="${players[i].image}">
    </div>`;
    console.log(players[i].name);
    console.log(players[i].playernumber);
    console.log(players[i].image);
    }