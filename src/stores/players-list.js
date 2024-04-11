import { defineStore } from "pinia";

export const usePlayersListStore = defineStore("playersListStore", {
  state: () => ({
    teams: [
      {
        teamName: "Vince",
        players: [
          {
            id: "9478",
          },
          {
            id: "5539",
          },
          {
            id: "8973",
          },
          {
            id: "4419142",
          },
          {
            id: "3449",
          },
          {
            id: "10505",
          },
          {
            id: "1097",
          },
          {
            id: "5462",
          },
        ],
      },
      {
        teamName: "Adam",
        players: [
          {
            id: "9478",
          },
          {
            id: "4848",
          },
          {
            id: "4587",
          },
          {
            id: "9938",
          },
          {
            id: "3702",
          },
          {
            id: "308",
          },
          {
            id: "4832046",
          },
          {
            id: "11395",
          },
        ],
      },
      {
        teamName: "Max",
        players: [
          {
            id: "10140",
          },
          {
            id: "11119",
          },
          {
            id: "1225",
          },
          {
            id: "11382",
          },
          {
            id: "10839",
          },
          {
            id: "308",
          },
          {
            id: "10863",
          },
          {
            id: "5462",
          },
        ],
      },
      {
        teamName: "Jeff",
        players: [
          {
            id: "9478",
          },
          {
            id: "10980",
          },
          {
            id: "5579",
          },
          {
            id: "158",
          },
          {
            id: "3449",
          },
          {
            id: "10664",
          },
          {
            id: "1059",
          },
          {
            id: "91",
          },
        ],
      },
      {
        teamName: "Bobby",
        players: [
          {
            id: "9478",
          },
          {
            id: "11119",
          },
          {
            id: "7081",
          },
          {
            id: "4419142",
          },
          {
            id: "3702",
          },
          {
            id: "5882",
          },
          {
            id: "10863",
          },
          {
            id: "11395",
          },
        ],
      },
      {
        teamName: "Emily",
        players: [
          {
            id: "10140",
          },
          {
            id: "9877",
          },
          {
            id: "8973",
          },
          {
            id: "10054",
          },
          {
            id: "3702",
          },
          {
            id: "10372",
          },
          {
            id: "5692",
          },
          {
            id: "4304",
          },
        ],
      },
      {
        teamName: "Scott",
        players: [
          {
            id: "4364873",
          },
          {
            id: "5539",
          },
          {
            id: "4425906",
          },
          {
            id: "4410932",
          },
          {
            id: "10364",
          },
          {
            id: "10505",
          },
          {
            id: "3550",
          },
          {
            id: "5462",
          },
        ],
      },
      {
        teamName: "Jason",
        players: [
          {
            id: "9478",
          },
          {
            id: "3448",
          },
          {
            id: "4425906",
          },
          {
            id: "10054",
          },
          {
            id: "6937",
          },
          {
            id: "4425898",
          },
          {
            id: "676",
          },
          {
            id: "11000",
          },
        ],
      },
      {
        teamName: "Seth",
        players: [
          {
            id: "9478",
          },
          {
            id: "11119",
          },
          {
            id: "4587",
          },
          {
            id: "9938",
          },
          {
            id: "3702",
          },
          {
            id: "9843",
          },
          {
            id: "4832046",
          },
          {
            id: "5462",
          },
        ],
      },
      {
        teamName: "Mackenzie",
        players: [
          {
            id: "6798",
          },
          {
            id: "11119",
          },
          {
            id: "4425906",
          },
          {
            id: "11382",
          },
          {
            id: "8961",
          },
          {
            id: "308",
          },
          {
            id: "676",
          },
          {
            id: "4412531",
          },
        ],
      },
      {
        teamName: "RJ",
        players: [
          {
            id: "9478",
          },
          {
            id: "9131",
          },
          {
            id: "8973",
          },
          {
            id: "4602673",
          },
          {
            id: "4513",
          },
          {
            id: "308",
          },
          {
            id: "3550",
          },
          {
            id: "392",
          },
        ],
      },
      {
        teamName: "M.Kaiser",
        players: [
          {
            id: "9478",
          },
          {
            id: "11119",
          },
          {
            id: "4425906",
          },
          {
            id: "9938",
          },
          {
            id: "3449",
          },
          {
            id: "10372",
          },
          {
            id: "1097",
          },
          {
            id: "392",
          },
        ],
      },
      {
        teamName: "Joe K",
        players: [
          {
            id: "9478",
          },
          {
            id: "2230",
          },
          {
            id: "4587",
          },
          {
            id: "9938",
          },
          {
            id: "3702",
          },
          {
            id: "4425898",
          },
          {
            id: "10863",
          },
          {
            id: "5462",
          },
        ],
      },
      {
        teamName: "Brad",
        players: [
          {
            id: "9478",
          },
          {
            id: "11119",
          },
          {
            id: "8973",
          },
          {
            id: "4602673",
          },
          {
            id: "3792",
          },
          {
            id: "4425898",
          },
          {
            id: "5692",
          },
          {
            id: "11395",
          },
        ],
      },
    ],
    tournamentPlayers: [
      { name: "Scottie Scheffler" },
      { name: "Rory McIlroy" },
      { name: "Jon Rahm" },
      { name: "Xander Schauffele" },
      { name: "Hideki Matsuyama" },
      { name: "Brooks Koepka" },
      { name: "Jordan Spieth" },
      { name: "Joaquin Niemann" },
      { name: "Ludvig Aberg" },
      { name: "Viktor Hovland" },
      { name: "Matt Fitzpatrick" },
      { name: "Bryson DeChambeau" },
      { name: "Tony Finau" },
      { name: "Patrick Cantlay" },
      { name: "Dustin Johnson" },
      { name: "Will Zalatoris" },
      { name: "Wyndham Clark" },
      { name: "Tommy Fleetwood" },
      { name: "Justin Thomas" },
      { name: "Cameron Smith" },
      { name: "Sahith Theegala" },
      { name: "Collin Morikawa" },
      { name: "Cameron Young" },
      { name: "Tyrrell Hatton" },
      { name: "Russell Henley" },
      { name: "Max Homa" },
      { name: "Si Woo Kim" },
      { name: "Shane Lowry" },
      { name: "Brian Harman" },
      { name: "Jason Day" },
      { name: "Corey Conners" },
      { name: "Patrick Reed" },
      { name: "Adam Scott" },
      { name: "Sam Burns" },
      { name: "Min Woo Lee" },
      { name: "Denny McCarthy" },
      { name: "Byeong Hun An" },
      { name: "Akshay Bhatia" },
      { name: "Sungjae Im" },
      { name: "Sergio Garcia" },
      { name: "Justin Rose" },
      { name: "Harris English" },
      { name: "Tom Kim" },
      { name: "Tiger Woods" },
      { name: "Rickie Fowler" },
      { name: "Chris Kirk" },
      { name: "Adrian Meronk" },
      { name: "Stephan Jaeger" },
      { name: "Sepp Straka" },
      { name: "Kurt Kitayama" },
      { name: "Keegan Bradley" },
      { name: "Adam Hadwin" },
      { name: "Nicolai Hojgaard" },
      { name: "Nick Taylor" },
      { name: "Erik Van Rooyen" },
      { name: "Thorbjorn Olesen" },
      { name: "Austin Eckroat" },
      { name: "Matthieu Pavon" },
      { name: "Taylor Moore" },
      { name: "Ryan Fox" },
      { name: "Phil Mickelson" },
      { name: "J.T. Poston" },
      { name: "Eric Cole" },
      { name: "Emiliano Grillo" },
      { name: "Adam Schenk" },
      { name: "Jake Knapp" },
      { name: "Gary Woodland" },
      { name: "Lucas Glover" },
      { name: "Cam Davis" },
      { name: "Nick Dunlap" },
      { name: "Luke List" },
      { name: "Charl Schwartzel" },
      { name: "Bubba Watson" },
      { name: "Lee Hodges" },
      { name: "Ryo Hisatsune" },
      { name: "Peter Malnati" },
      { name: "Zach Johnson" },
      { name: "Grayson Murray" },
      { name: "Danny Willett" },
      { name: "Camilo Villegas" },
      { name: "Christo Lamprecht" },
      { name: "Stewart Hagestad" },
      { name: "Santiago De la Fuente" },
      { name: "Vijay Singh" },
      { name: "Mike Weir" },
      { name: "Jose Maria Olazabal" },
      { name: "Fred Couples" },
      { name: "Neal Shipley" },
      { name: "Jasper Stubbs " },
    ],
  }),
});
