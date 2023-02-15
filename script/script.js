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

players.forEach(player => {
document.getElementById("playersContainer").innerHTML += 
    `<div class="playerCard" id="playerCard">
    <h2>${player.name}</h2>
    <h3>${player.character}</h3>
    <p>${player.playernumber}</p>
    <img src="${player.image}">
    </div>`;
   
    
});
