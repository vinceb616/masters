import { defineStore } from "pinia";

export const usePlayersListStore = defineStore("playersListStore", {
  state: () => ({
    teams: [
      {
        teamName: "Team Vince*",
        players: [
          {
            name: "Scottie Scheffler",
          },
          {
            name: "Dustin Johnson",
          },
          {
            name: "Corey Conners",
          },
          {
            name: "Sepp Straka",
          },
          {
            name: "Tom Hoge",
          },
          {
            name: "Lee Hodges",
          },
          {
            name: "Rikuya Hoshino",
          },
          {
            name: "Thriston Lawrence",
          },
          {
            name: "Trey Mullinax",
          },
          {
            name: "Oliver Wilson",
          },
        ],
      },
      {
        teamName: "Team Adam*",
        players: [
          {
            name: "Rory McIlroy",
          },
          {
            name: "Dustin Johnson",
          },
          {
            name: "Corey Conners",
          },
          {
            name: "Phil Mickelson",
          },
          {
            name: "Billy Horschel",
          },
          {
            name: "Abraham Ancer",
          },
          {
            name: "Alex Fitzpatrick",
          },
          {
            name: "Stewart Cink",
          },
          {
            name: "Marc Warren",
          },
          {
            name: "Connor McKinney",
          },
        ],
      },
      {
        teamName: "Team Scott*",
        players: [
          {
            name: "Cameron Smith",
          },
          {
            name: "Cameron Young",
          },
          {
            name: "Adam Scott",
          },
          {
            name: "Nicolai Højgaard",
          },
          {
            name: "Christiaan Bezuidenhout",
          },
          {
            name: "Abraham Ancer",
          },
          {
            name: "David Lingmerth",
          },
          {
            name: "Jazz Janewattananond",
          },
          {
            name: "Marc Warren",
          },
          {
            name: "Hiroshi Iwata",
          },
        ],
      },
      {
        teamName: "Team Marek*",
        players: [
          {
            name: "Rory McIlroy",
          },
          {
            name: "Min Woo Lee",
          },
          {
            name: "Denny McCarthy",
          },
          {
            name: "Gary Woodland",
          },
          {
            name: "Ewen Ferguson",
          },
          {
            name: "Yannik Paul",
          },
          {
            name: "Joost Luiten",
          },
          {
            name: "Marcel Siem",
          },
          {
            name: "Christo Lamprecht",
          },
          {
            name: "Hiroshi Iwata",
          },
        ],
      },
      {
        teamName: "Team Audra*",
        players: [
          {
            name: "Scottie Scheffler",
          },
          {
            name: "Justin Thomas",
          },
          {
            name: "Jason Day",
          },
          {
            name: "Harris English",
          },
          {
            name: "Victor Perez",
          },
          {
            name: "Francesco Molinari",
          },
          {
            name: "Matthew Southgate",
          },
          {
            name: "Ben Griffin",
          },
          {
            name: "Zack Fischer",
          },
          {
            name: "Mateo Fernandez de Oliveira",
          },
        ],
      },
      {
        teamName: "Team Bobby",
        players: [
          {
            name: "Collin Morikawa",
          },
          {
            name: "Min Woo Lee",
          },
          {
            name: "Sungjae Im",
          },
          {
            name: "Kurt Kitayama",
          },
          {
            name: "Christiaan Bezuidenhout",
          },
          {
            name: "K.H. Lee",
          },
          {
            name: "Rikuya Hoshino",
          },
          {
            name: "Seungsu Han",
          },
          {
            name: "Taiga Semikawa",
          },
          {
            name: "Hiroshi Iwata",
          },
        ],
      },
      {
        teamName: "Team Jason*",
        players: [
          {
            name: "Scottie Scheffler",
          },
          {
            name: "Dustin Johnson",
          },
          {
            name: "Denny McCarthy",
          },
          {
            name: "Emiliano Grillo",
          },
          {
            name: "Billy Horschel",
          },
          {
            name: "Lee Hodges",
          },
          {
            name: "Alex Fitzpatrick",
          },
          {
            name: "Zach Johnson",
          },
          {
            name: "Nacho Elvira",
          },
          {
            name: "Connor McKinney",
          },
        ],
      },
      {
        teamName: "Team Audrey*",
        players: [
          {
            name: "Rory McIlroy",
          },
          {
            name: "Tom Kim",
          },
          {
            name: "Russell Henley",
          },
          {
            name: "Sepp Straka",
          },
          {
            name: "Alex Noren",
          },
          {
            name: "K.H. Lee",
          },
          {
            name: "Guido Migliozzi",
          },
          {
            name: "Jazz Janewattananond",
          },
          {
            name: "Hurly Long",
          },
          {
            name: "Darren Clarke",
          },
        ],
      },
      {
        teamName: "Team Jeff*",
        players: [
          {
            name: "Rory McIlroy",
          },
          {
            name: "Cameron Young",
          },
          {
            name: "Adam Scott",
          },
          {
            name: "Gary Woodland",
          },
          {
            name: "Christiaan Bezuidenhout",
          },
          {
            name: "Abraham Ancer",
          },
          {
            name: "Danny Willett",
          },
          {
            name: "Stewart Cink",
          },
          {
            name: "Marc Warren",
          },
          {
            name: "Harrison Crowe",
          },
        ],
      },
      {
        teamName: "Team RJ",
        players: [
          {
            name: "Cameron Smith",
          },
          {
            name: "Tony Finau",
          },
          {
            name: "Sahith Theegala",
          },
          {
            name: "Phil Mickelson",
          },
          {
            name: "Billy Horschel",
          },
          {
            name: "Henrik Stenson",
          },
          {
            name: "Alex Fitzpatrick",
          },
          {
            name: "Charl Schwartzel",
          },
          {
            name: "Ernie Els",
          },
          {
            name: "John Daly",
          },
        ],
      },
      {
        teamName: "Team Brad",
        players: [
          {
            name: "Rory McIlroy",
          },
          {
            name: "Dustin Johnson",
          },
          {
            name: "Denny McCarthy",
          },
          {
            name: "Gary Woodland",
          },
          {
            name: "Billy Horschel",
          },
          {
            name: "Francesco Molinari",
          },
          {
            name: "Danny Willett",
          },
          {
            name: "Zach Johnson",
          },
          {
            name: "Ernie Els",
          },
          {
            name: "John Daly",
          },
        ],
      },
      {
        teamName: "Team Max*",
        players: [
          {
            name: "Scottie Scheffler",
          },
          {
            name: "Dustin Johnson",
          },
          {
            name: "Sungjae Im",
          },
          {
            name: "Nicolai Højgaard",
          },
          {
            name: "Alexander Björk",
          },
          {
            name: "K.H. Lee",
          },
          {
            name: "Danny Willett",
          },
          {
            name: "Thriston Lawrence",
          },
          {
            name: "Zack Fischer",
          },
          {
            name: "Kyle Barker",
          },
        ],
      },
      {
        teamName: "Team Ross*",
        players: [
          {
            name: "Scottie Scheffler",
          },
          {
            name: "Cameron Young",
          },
          {
            name: "Sahith Theegala",
          },
          {
            name: "J.T. Poston",
          },
          {
            name: "Jordan Smith",
          },
          {
            name: "Michael Kim",
          },
          {
            name: "Richie Ramsay",
          },
          {
            name: "Scott Stallings",
          },
          {
            name: "Trey Mullinax",
          },
          {
            name: "Darren Clarke",
          },
        ],
      },
      {
        teamName: "Team Seth*",
        players: [
          {
            name: "Collin Morikawa",
          },
          {
            name: "Max Homa",
          },
          {
            name: "Sungjae Im",
          },
          {
            name: "Kurt Kitayama",
          },
          {
            name: "Tom Hoge",
          },
          {
            name: "Abraham Ancer",
          },
          {
            name: "Danny Willett",
          },
          {
            name: "Charl Schwartzel",
          },
          {
            name: "Trey Mullinax",
          },
          {
            name: "Mateo Fernandez de Oliveira",
          },
        ],
      },
      {
        teamName: "Team Matt",
        players: [
          {
            name: "Scottie Scheffler",
          },
          {
            name: "Tom Kim",
          },
          {
            name: "Corey Conners",
          },
          {
            name: "Sepp Straka",
          },
          {
            name: "Rasmus Højgaard",
          },
          {
            name: "K.H. Lee",
          },
          {
            name: "Adrian Otaegui",
          },
          {
            name: "Jazz Janewattananond",
          },
          {
            name: "Hurly Long",
          },
          {
            name: "Oliver Farr",
          },
        ],
      },
      {
        teamName: "Team Emily",
        players: [
          {
            name: "Jon Rahm",
          },
          {
            name: "Wyndham Clark",
          },
          {
            name: "Sungjae Im",
          },
          {
            name: "Branden Grace",
          },
          {
            name: "Matthew Jordan",
          },
          {
            name: "Andrew Putnam",
          },
          {
            name: "Joost Luiten",
          },
          {
            name: "Stewart Cink",
          },
          {
            name: "Hurly Long",
          },
          {
            name: "Kyle Barker",
          },
        ],
      },
    ],
    tournamentPlayers: [
      {
        name: "Scottie Scheffler",
      },
      {
        name: "Rory McIlroy",
      },
      {
        name: "Jon Rahm",
      },
      {
        name: "Cameron Smith",
      },
      {
        name: "Viktor Hovland",
      },
      {
        name: "Brooks Koepka",
      },
      {
        name: "Xander Schauffele",
      },
      {
        name: "Tyrrell Hatton",
      },
      {
        name: "Tommy Fleetwood",
      },
      {
        name: "Patrick Cantlay",
      },
      {
        name: "Rickie Fowler",
      },
      {
        name: "Collin Morikawa",
      },
      {
        name: "Shane Lowry",
      },
      {
        name: "Matthew Fitzpatrick",
      },
      {
        name: "Jordan Spieth",
      },
      {
        name: "Dustin Johnson",
      },
      {
        name: "Joohyung Kim",
      },
      {
        name: "Wyndham Clark",
      },
      {
        name: "Tony Finau",
      },
      {
        name: "Max Homa",
      },
      {
        name: "Cameron Young",
      },
      {
        name: "Justin Rose",
      },
      {
        name: "Sam Burns",
      },
      {
        name: "Min Woo Lee",
      },
      {
        name: "Robert MacIntyre",
      },
      {
        name: "Justin Thomas",
      },
      {
        name: "Bryson DeChambeau",
      },
      {
        name: "Talor Gooch",
      },
      {
        name: "Patrick Reed",
      },
      {
        name: "Hideki Matsuyama",
      },
      {
        name: "Corey Conners",
      },
      {
        name: "Adam Scott",
      },
      {
        name: "Sungjae Im",
      },
      {
        name: "Ryan Fox",
      },
      {
        name: "Russell Henley",
      },
      {
        name: "Jason Day",
      },
      {
        name: "Keegan Bradley",
      },
      {
        name: "Brian Harman",
      },
      {
        name: "Denny McCarthy",
      },
      {
        name: "Si Woo Kim",
      },
      {
        name: "Louis Oosthuizen",
      },
      {
        name: "Padraig Harrington",
      },
      {
        name: "Joaquin Niemann",
      },
      {
        name: "Byeong Hun An",
      },
      {
        name: "Sahith Theegala",
      },
      {
        name: "Nicolai Hojgaard",
      },
      {
        name: "Harris English",
      },
      {
        name: "Branden Grace",
      },
      {
        name: "Sepp Straka",
      },
      {
        name: "Lucas Herbert",
      },
      {
        name: "Kurt Kitayama",
      },
      {
        name: "J.T. Poston",
      },
      {
        name: "Gary Woodland",
      },
      {
        name: "Adrian Meronk",
      },
      {
        name: "Thomas Pieters",
      },
      {
        name: "Thomas Detry",
      },
      {
        name: "Seamus Power",
      },
      {
        name: "Emiliano Grillo",
      },
      {
        name: "Chris Kirk",
      },
      {
        name: "Phil Mickelson",
      },
      {
        name: "Rasmus Hojgaard",
      },
      {
        name: "Alexander Bjork",
      },
      {
        name: "Matthew Jordan",
      },
      {
        name: "Ewen Ferguson",
      },
      {
        name: "Thorbjorn Olesen",
      },
      {
        name: "Alex Noren",
      },
      {
        name: "Adam Schenk",
      },
      {
        name: "Victor Perez",
      },
      {
        name: "Jordan Smith",
      },
      {
        name: "Christiaan Bezuidenhout",
      },
      {
        name: "Tom Hoge",
      },
      {
        name: "Taylor Moore",
      },
      {
        name: "Nick Taylor",
      },
      {
        name: "Billy Horschel",
      },
      {
        name: "Daniel Hillier",
      },
      {
        name: "Yannik Paul",
      },
      {
        name: "Davis Riley",
      },
      {
        name: "Andrew Putnam",
      },
      {
        name: "Brendon Todd",
      },
      {
        name: "K.H. Lee",
      },
      {
        name: "Abraham Ancer",
      },
      {
        name: "Pablo Larrazabal",
      },
      {
        name: "Lee Hodges",
      },
      {
        name: "Michael Kim",
      },
      {
        name: "Keita Nakajima",
      },
      {
        name: "Henrik Stenson",
      },
      {
        name: "Matt Wallace",
      },
      {
        name: "Francesco Molinari",
      },
      {
        name: "Richard Bland",
      },
      {
        name: "Laurie Canter",
      },
      {
        name: "Rikuya Hoshino",
      },
      {
        name: "Takumi Kanaya",
      },
      {
        name: "Joost Luiten",
      },
      {
        name: "Richie Ramsay",
      },
      {
        name: "Guido Migliozzi",
      },
      {
        name: "Adrian Otaegui",
      },
      {
        name: "Antoine Rozner",
      },
      {
        name: "Matthew Southgate",
      },
      {
        name: "David Lingmerth",
      },
      {
        name: "Danny Willett",
      },
      {
        name: "Kalle Samooja",
      },
      {
        name: "Jorge Campillo",
      },
      {
        name: "Alex Fitzpatrick",
      },
      {
        name: "Romain Langasque",
      },
      {
        name: "Kyungnam Kang",
      },
      {
        name: "Thriston Lawrence",
      },
      {
        name: "Charl Schwartzel",
      },
      {
        name: "Stewart Cink",
      },
      {
        name: "Dan Bradbury",
      },
      {
        name: "Ben Griffin",
      },
      {
        name: "Zach Johnson",
      },
      {
        name: "Jazz Janewattananond",
      },
      {
        name: "David Micheluzzi",
      },
      {
        name: "Marcel Siem",
      },
      {
        name: "Scott Stallings",
      },
      {
        name: "Connor Syme",
      },
      {
        name: "Sami Valimaki",
      },
      {
        name: "Adri Arnaus",
      },
      {
        name: "Alejandro Canizares",
      },
      {
        name: "Seungsu Han",
      },
      {
        name: "Ernie Els",
      },
      {
        name: "Bio Kim",
      },
      {
        name: "Hurly Long",
      },
      {
        name: "Trey Mullinax",
      },
      {
        name: "Taiga Semikawa",
      },
      {
        name: "Callum Shinkwin",
      },
      {
        name: "Nacho Elvira",
      },
      {
        name: "Kazuki Higa",
      },
      {
        name: "Christo Lamprecht",
      },
      {
        name: "Travis Smyth",
      },
      {
        name: "Shubhankar Sharma",
      },
      {
        name: "Brandon Robinson Thompson",
      },
      {
        name: "Marc Warren",
      },
      {
        name: "Zack Fischer",
      },
      {
        name: "Jose Luis Ballester",
      },
      {
        name: "Oliver Wilson",
      },
      {
        name: "Tiger Christensen",
      },
      {
        name: "Kyle Barker",
      },
      {
        name: "Haydn Barron",
      },
      {
        name: "Harrison Crowe",
      },
      {
        name: "Darren Clarke",
      },
      {
        name: "Oliver Farr",
      },
      {
        name: "Kensei Hirata",
      },
      {
        name: "Hiroshi Iwata",
      },
      {
        name: "Mateo Fernandez de Oliveira",
      },
      {
        name: "Taichi Kho",
      },
      {
        name: "Alex Maguire",
      },
      {
        name: "Marco Penge",
      },
      {
        name: "Connor McKinney",
      },
      {
        name: "Martin Rohwer",
      },
      {
        name: "Ockie Strydom",
      },
      {
        name: "Kazuki Yasumori",
      },
      {
        name: "John Daly",
      },
      {
        name: "Graeme Robertson",
      },
      {
        name: "Michael Stewart",
      },
      {
        name: "Gunner Wiebe",
      },
    ],
  }),
});
