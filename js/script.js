function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();

  m = checkTime(m);
  s = checkTime(s);

  document.getElementById("clock").innerHTML = h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
}
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  } //
  return i;
}

const myobjArray = [ 
  { 
    name: "Hugo Oliver Keto",
    Posisjon: "Keeper",
    jerseyNumber: 1,

  },
  {
    name: "Andreas brede Albertsen",
    Posisjon: "Keeper",
    jerseyNumber: 54,

  },
  {
    name: "Fredrik Mani Pålerud",
    Posisjon: "Forsvarspiller",
    jerseyNumber: 2,

  },

  {
    name: "Quint Arie Jansen",
    Posisjon: "Forsvarspiller",
    jersyNumber: 3,

  },
  {
    name: "lan Smeulers",
    Posisjon: "Forsvarspiller",
    jersyNumber: 4,

  },
 {
  name: "Lara Markmanrud",
  Posisjon: "Forsvarspiller",
  jersyNumber: 13,
 },
{
  name: "Jesper Taaje",
  Posisjon: "Forsvarspiller",
  jersyNumber: 15,
}, 
] 