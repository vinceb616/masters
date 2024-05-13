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
      { name: "Brooks Koepka" },
      { name: "Xander Schauffele" },
      { name: "Ludvig Aberg" },
      { name: "Jon Rahm" },
      { name: "Joaquin Niemann" },
      { name: "Collin Morikawa" },
      { name: "Bryson DeChambeau" },
      { name: "Wyndham Clark" },
      { name: "Patrick Cantlay" },
      { name: "Cameron Smith" },
      { name: "Max Homa" },
      { name: "Viktor Hovland" },
      { name: "Hideki Matsuyama" },
      { name: "Will Zalatoris" },
      { name: "Justin Thomas" },
      { name: "Tommy Fleetwood" },
      { name: "Dustin Johnson" },
      { name: "Cameron Young" },
      { name: "Jason Day" },
      { name: "Matt Fitzpatrick" },
      { name: "Tyrrell Hatton" },
      { name: "Jordan Spieth" },
      { name: "Tony Finau" },
      { name: "Patrick Reed" },
      { name: "Byeong Hun An" },
      { name: "Sam Burns" },
      { name: "Shane Lowry" },
      { name: "Tom Kim" },
      { name: "Sungjae Im" },
      { name: "Dean Burmester" },
      { name: "Sahith Theegala" },
      { name: "Abraham Ancer" },
      { name: "Min Woo Lee" },
      { name: "Brian Harman" },
      { name: "Talor Gooch" },
      { name: "Keegan Bradley" },
      { name: "Akshay Bhatia" },
      { name: "Russell Henley" },
      { name: "Adam Scott" },
      { name: "Sepp Straka" },
      { name: "Si Woo Kim" },
      { name: "Tiger Woods" },
      { name: "David Puig" },
      { name: "Corey Conners" },
      { name: "Rickie Fowler" },
      { name: "Stephan Jaeger" },
      { name: "Denny McCarthy" },
      { name: "Phil Mickelson" },
      { name: "Jake Knapp" },
      { name: "Chris Kirk" },
      { name: "Billy Horschel" },
      { name: "Sergio Garcia" },
      { name: "Taylor Pendrith" },
      { name: "Adrian Meronk" },
      { name: "Austin Eckroat" },
      { name: "Mackenzie Hughes" },
      { name: "Alex Noren" },
      { name: "Harris English" },
      { name: "Matthieu Pavon" },
      { name: "Ryan Fox" },
      { name: "Adrian Otaegui" },
      { name: "Justin Rose" },
      { name: "Adam Schenk" },
      { name: "Keith Mitchell" },
      { name: "Mito Pereira" },
      { name: "Kurt Kitayama" },
      { name: "Daniel Berger" },
      { name: "Christiaan Bezuidenhout" },
      { name: "Emiliano Grillo" },
      { name: "Lucas Herbert" },
      { name: "Tom Hoge" },
      { name: "Victor Perez" },
      { name: "Erik Van Rooyen" },
      { name: "Lucas Glover" },
      { name: "Nicolai Hojgaard" },
      { name: "Eric Cole" },
      { name: "Jordan Smith" },
      { name: "Thomas Pieters" },
      { name: "J.T. Poston" },
      { name: "Thomas Detry" },
      { name: "Ryan Van Velzen" },
      { name: "Cam Davis" },
      { name: "Thriston Lawrence" },
      { name: "Beau Hossler" },
      { name: "Aaron Rai" },
      { name: "Ben Griffin" },
      { name: "Nick Taylor" },
      { name: "Alex Smalley" },
      { name: "Brendon Todd" },
      { name: "Maverick McNealy" },
      { name: "Luke List" },
      { name: "Nick Dunlap" },
      { name: "Davis Riley" },
      { name: "Adam Hadwin" },
      { name: "Marc Leishman" },
      { name: "Seamus Power" },
      { name: "Ryo Hisatsune" },
      { name: "Matt Wallace" },
      { name: "Andrew Putnam" },
      { name: "Andy Ogletree" },
      { name: "Patrick Rodgers" },
      { name: "Doug Ghim" },
      { name: "Taylor Moore" },
      { name: "Sebastian Soderberg" },
      { name: "Adam Svensson" },
      { name: "Rasmus Hojgaard" },
      { name: "Robert MacIntyre" },
      { name: "Gary Woodland" },
      { name: "Lee Hodges" },
      { name: "Ben Kohles" },
      { name: "K.H. Lee" },
      { name: "Camillo Villegas" },
      { name: "Alejandro Tosti" },
      { name: "Taylor Montgomery" },
      { name: "Vincent Norrman" },
      { name: "Jesper Svensson" },
      { name: "Tim Widing" },
      { name: "Charley Hoffman" },
      { name: "Mark Hubbard" },
      { name: "Keita Nakajima" },
      { name: "Zac Blair" },
      { name: "Francisco Molinari" },
      { name: "Joel Dahmen" },
      { name: "Peter Malnati" },
      { name: "Sami Valimaki" },
      { name: "Takumi Kanaya" },
      { name: "Grayson Murray" },
      { name: "Alexander Bjork" },
      { name: "Martin Kaymer" },
      { name: "Kazuma Kobori" },
      { name: "Brice Garnett" },
      { name: "Michael Block" },
      { name: "Padraig Harrington" },
      { name: "Luke Donald" },
      { name: "Jimmy Walker" },
      { name: "Y.E. Yang" },
      { name: "Jason Dufner" },
      { name: "John Daly" },
      { name: "Wyatt Worthington IV" },
      { name: "Tyler Collet" },
      { name: "Matt Dobyns" },
      { name: "Josh Speight" },
      { name: "Braden Shattuk" },
      { name: "Brad Marek" },
      { name: "Tracy Phillips" },
      { name: "Evan Bowser" },
      { name: "Josh Bevell" },
      { name: "Larkin Gross" },
      { name: "Rich Beem" },
      { name: "Zac Oakley" },
      { name: "Jeremy Wells" },
      { name: "Preston Cole" },
      { name: "John Somers" },
      { name: "Ben Polland" },
      { name: "Kyle Mendoza" },
      { name: "Jared Jones" },
      { name: "Shaun Micheel" },
      { name: "Jeff Kellen" },
      { name: "Jesse Mueller" },
      { name: "Andy Svoboda" },
    ],
  }),
});
