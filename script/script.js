const players = [
  {
    name: "Lars Larsen",
    character: "Lars Bandasj",
    playernumber: 14,
    image: "../Assets/imagem1.png",
  },
  {
    name: "Kjell Kjellsen",
    character: "Kjell Propell",
    playernumber: 10,
    image: "../Assets/imagem2.png",
  },
  {
    name: "Anna Andersson",
    character: "Anna Ballerina",
    playernumber: 8,
    image: "../Assets/imagef5.png",
  },
  {
    name: "Ola Olsen",
    character: "Ola Dunk",
    playernumber: 23,
    image: "../Assets/imagem3.png",
  },
  {
    name: "Ida Idassen",
    character: "Ida Måke",
    playernumber: 17,
    image: "../Assets/imagef1.png",
  },
  {
    name: "Per Persen",
    character: "Per Rakett",
    playernumber: 7,
    image: "../Assets/imagem4.png",
  },
  {
    name: "Maja Majassen",
    character: "Maja Hopp",
    playernumber: 11,
    image: "../Assets/imagef2.png",
  },
  {
    name: "Anders Andersen",
    character: "Anders Rask",
    playernumber: 2,
    image: "../Assets/imagem5.png",
  },
  {
    name: "Sara Svensson",
    character: "Sara Snurr",
    playernumber: 21,
    image: "../Assets/imagef3.png",
  },
  {
    name: "Erik Eriksen",
    character: "Erik Slalom",
    playernumber: 18,
    image: "../Assets/imagem6.png",
  },
  {
    name: "Ingrid Ingesson",
    character: "Ingrid Sprint",
    playernumber: 3,
    image: "../Assets/imagef4.png",
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