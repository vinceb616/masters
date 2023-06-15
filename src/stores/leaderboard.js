import { defineStore } from "pinia";

export const useLeaderboardStore = defineStore("leaderboard", {
  state: () => ({
    eventKey: "401465533",
    leaderboard: [],
    players: [],
    tierGroups: [],
    tierPlayers: [
      {
        name: "Scottie Scheffler",
      },
      {
        name: "Jon Rahm",
      },
      {
        name: "Rory McIlroy",
      },
      {
        name: "Brooks Koepka",
      },
      {
        name: "Patrick Cantlay",
      },
      {
        name: "Viktor Hovland",
      },
      {
        name: "Xander Schauffele",
      },
      {
        name: "Collin Morikawa",
      },
      {
        name: "Jordan Spieth",
      },
      {
        name: "Cameron Smith",
      },
      {
        name: "Max Homa",
      },
      {
        name: "Matt Fitzpatrick",
      },
      {
        name: "Tony Finau",
      },
      {
        name: "Tyrrell Hatton",
      },
      {
        name: "Justin Thomas",
      },
      {
        name: "Dustin Johnson",
      },
      {
        name: "Jason Day",
      },
      {
        name: "Cameron Young",
      },
      {
        name: "Justin Rose",
      },
      {
        name: "Hideki Matsuyama",
      },
      {
        name: "Bryson DeChambeau",
      },
      {
        name: "Tommy Fleetwood",
      },
      {
        name: "Sungjae Im",
      },
      {
        name: "Shane Lowry",
      },
      {
        name: "Rickie Fowler",
      },
      {
        name: "Sam Burns",
      },
      {
        name: "Corey Conners",
      },
      {
        name: "Wyndham Clark",
      },
      {
        name: "Patrick Reed",
      },
      {
        name: "Adam Scott",
      },
      {
        name: "Mito Pereira",
      },
      {
        name: "Joaquin Niemann",
      },
      {
        name: "Si Woo Kim",
      },
      {
        name: "Tom Kim",
      },
      {
        name: "Keegan Bradley",
      },
      {
        name: "Sahith Theegala",
      },
      {
        name: "Min Woo Lee",
      },
      {
        name: "Russell Henley",
      },
      {
        name: "Denny McCarthy",
      },
      {
        name: "Cameron Davis",
      },
      {
        name: "Harris English",
      },
      {
        name: "Keith Mitchell",
      },
      {
        name: "Matt Kuchar",
      },
      {
        name: "Adrian Meronk",
      },
      {
        name: "Chris Kirk",
      },
      {
        name: "Gary Woodland",
      },
      {
        name: "Ryan Fox",
      },
      {
        name: "Phil Mickelson",
      },
      {
        name: "Taylor Montgomery",
      },
      {
        name: "Taylor Moore",
      },
      {
        name: "Kurt Kitayama",
      },
      {
        name: "Seamus Power",
      },
      {
        name: "Sergio Garcia",
      },
      {
        name: "Kyoung-Hoon Lee",
      },
      {
        name: "Sebastian Munoz",
      },
      {
        name: "Patrick Rodgers",
      },
      {
        name: "Victor Perez",
      },
      {
        name: "Andrew Putnam",
      },
      {
        name: "Tom Hoge",
      },
      {
        name: "Eric Cole",
      },
      {
        name: "Lucas Herbert",
      },
      {
        name: "Emiliano Grillo",
      },
      {
        name: "J.T. Poston",
      },
      {
        name: "Jordan Smith",
      },
      {
        name: "Nick Taylor",
      },
      {
        name: "Adam Hadwin",
      },
      {
        name: "Thomas Pieters",
      },
      {
        name: "Brian Harman",
      },
      {
        name: "Sepp Straka",
      },
      {
        name: "Justin Suh",
      },
      {
        name: "Pablo Larrazabal",
      },
      {
        name: "Adam Schenk",
      },
      {
        name: "Adam Svensson",
      },
      {
        name: "Abraham Ancer",
      },
      {
        name: "Sam Stevens",
      },
      {
        name: "Alex Noren",
      },
      {
        name: "Billy Horschel",
      },
      {
        name: "Aaron Wise",
      },
      {
        name: "Mackenzie Hughes",
      },
      {
        name: "Francesco Molinari",
      },
      {
        name: "Austin Eckroat",
      },
      {
        name: "Carlos Ortiz",
      },
      {
        name: "Gordon Sargent",
      },
      {
        name: "Taylor Pendrith",
      },
      {
        name: "Hayden Buckley",
      },
      {
        name: "Padraig Harrington",
      },
      {
        name: "Luke List",
      },
      {
        name: "Romain Langasque",
      },
      {
        name: "Michael Kim",
      },
      {
        name: "Joel Dahmen",
      },
      {
        name: "Kevin Streelman",
      },
      {
        name: "Scott Stallings",
      },
      {
        name: "Vincent Norrman",
      },
      {
        name: "Michael Thorbjornsen",
      },
      {
        name: "Carson Young",
      },
      {
        name: "Nick Hardy",
      },
      {
        name: "Stewart Cink",
      },
      {
        name: "Dylan Wu",
      },
      {
        name: "Matthieu Pavon",
      },
      {
        name: "Davis Thompson",
      },
      {
        name: "Charley Hoffman",
      },
      {
        name: "Wilco Nienaber",
      },
      {
        name: "Thirston Lawrence",
      },
      {
        name: "Sam Bennett",
      },
      {
        name: "Nicolas Echevarria",
      },
      {
        name: "Hank Lebioda",
      },
      {
        name: "Simon Forsstrom",
      },
      {
        name: "Martin Kaymer",
      },
      {
        name: "Ryan Gerard",
      },
      {
        name: "David Puig",
      },
      {
        name: "Ross Fisher",
      },
      {
        name: "Frankie Capan III",
      },
      {
        name: "Deon Germishuys",
      },
      {
        name: "Paul Haley",
      },
      {
        name: "Alejandro Del Rey",
      },
      {
        name: "Ryan Armour",
      },
      {
        name: "Brent Grant",
      },
      {
        name: "Jacob Solomon",
      },
      {
        name: "Maxwell Moldovan",
      },
      {
        name: "Mac Meissner",
      },
      {
        name: "Patrick Cover",
      },
      {
        name: "Paul Barjon",
      },
      {
        name: "Roger Sloan",
      },
      {
        name: "Bastien Amat",
      },
      {
        name: "Michael Brennan",
      },
      {
        name: "Berry Henson",
      },
      {
        name: "Barclay Brown",
      },
      {
        name: "Karl Vilips",
      },
      {
        name: "Nicholas Dunlap",
      },
      {
        name: "David Nyfjall",
      },
      {
        name: "Yuto Katsuragawa",
      },
      {
        name: "Austen Truslow",
      },
      {
        name: "Ryo Ishikawa",
      },
      {
        name: "Isaac Simmons",
      },
      {
        name: "Christian Cavaliere",
      },
      {
        name: "Brendan Valdes",
      },
      {
        name: "Omar Morales",
      },
      {
        name: "David Horsey",
      },
      {
        name: "Jens Dantorp",
      },
      {
        name: "Aldrich Potgieter",
      },
      {
        name: "Andrew Svoboda",
      },
      {
        name: "Olin Browne",
      },
      {
        name: "Corey Pereria",
      },
      {
        name: "Kyle Mueller",
      },
      {
        name: "Jonathan James Grey",
      },
      {
        name: "Gunn Charoenkul",
      },
      {
        name: "Ryutaro Nagano",
      },
      {
        name: "Jesse Schutte",
      },
      {
        name: "Alex Schaake",
      },
      {
        name: "Alexander Yang",
      },
      {
        name: "Mateo Fernandez de Oliveira",
      },
      {
        name: "Ben Carr",
      },
      {
        name: "Matthew McClean",
      },
      {
        name: "Jordan Gumberg",
      },
      {
        name: "Preston Summerhays",
      },
      {
        name: "Wenyi Ding",
      },
    ],
    createdTeams: [],
    eligibleTeams: [],
    cutTeams: [],
    tournament: null,
    teams: [
      {
        teamName: "Team Vince",
        players: [
          {
            name: "Scottie Scheffler",
          },
          {
            name: "Hideki Matsuyama",
          },
          {
            name: "Si Woo Kim",
          },
          {
            name: "Kurt Kitayama",
          },
          {
            name: "Sepp Straka",
          },
          {
            name: "Luke List",
          },
          {
            name: "Dylan Wu",
          },
          {
            name: "Hank Lebioda",
          },
          {
            name: "Nicholas Dunlap",
          },
          {
            name: "Omar Morales",
          },
        ],
      },
      {
        teamName: "Team Audrey",
        players: [
          {
            name: "Rory McIlroy",
          },
          {
            name: "Jason Day",
          },
          {
            name: "Tom Kim",
          },
          {
            name: "Phil Mickelson",
          },
          {
            name: "Lucas Herbert",
          },
          {
            name: "Carlos Ortiz",
          },
          {
            name: "Scott Stallings",
          },
          {
            name: "Ross Fisher",
          },
          {
            name: "Patrick Cover",
          },
          {
            name: "David Horsey",
          },
        ],
      },
      {
        teamName: "Team Jeff",
        players: [
          {
            name: "Xander Schauffele",
          },
          {
            name: "Justin Rose",
          },
          {
            name: "Mito Pereira",
          },
          {
            name: "Phil Mickelson",
          },
          {
            name: "Adam Hadwin",
          },
          {
            name: "Padraig Harrington",
          },
          {
            name: "Kevin Streelman",
          },
          {
            name: "Hank Lebioda",
          },
          {
            name: "Nicholas Dunlap",
          },
          {
            name: "Omar Morales",
          },
        ],
      },
      {
        teamName: "Team Adam",
        players: [
          {
            name: "Jon Rahm",
          },
          {
            name: "Dustin Johnson",
          },
          {
            name: "Cam Davis",
          },
          {
            name: "Taylor Montgomery",
          },
          {
            name: "Abraham Ancer",
          },
          {
            name: "Billy Horschel",
          },
          {
            name: "Carson Young",
          },
          {
            name: "Simon Forsström",
          },
          {
            name: "Roger Sloan",
          },
          {
            name: "Brendan Valdes",
          },
        ],
      },
      {
        teamName: "Team Brad",
        players: [
          {
            name: "Brooks Koepka",
          },
          {
            name: "Dustin Johnson",
          },
          {
            name: "Denny McCarthy",
          },
          {
            name: "Eric Cole",
          },
          {
            name: "Justin Suh",
          },
          {
            name: "Joel Dahmen",
          },
          {
            name: "Stewart Cink",
          },
          {
            name: "Martin Kaymer",
          },
          {
            name: "Bastien Amat",
          },
          {
            name: "Mateo Fernandez de Oliveira",
          },
        ],
      },
      {
        teamName: "Team Jason",
        players: [
          {
            name: "Scottie Scheffler",
          },
          {
            name: "Rickie Fowler",
          },
          {
            name: "Sahith Theegala",
          },
          {
            name: "Andrew Putnam",
          },
          {
            name: "Emiliano Grillo",
          },
          {
            name: "Joel Dahmen",
          },
          {
            name: "Sam Bennett",
          },
          {
            name: "Alejandro del Rey",
          },
          {
            name: "Yuto Katsuragawa",
          },
          {
            name: "Mateo Fernandez de Oliveira",
          },
        ],
      },
      {
        teamName: "Team Scott",
        players: [
          {
            name: "Cameron Smith",
          },
          {
            name: "Shane Lowry",
          },
          {
            name: "Keegan Bradley",
          },
          {
            name: "Kurt Kitayama",
          },
          {
            name: "Sepp Straka",
          },
          {
            name: "Aaron Wise",
          },
          {
            name: "Stewart Cink",
          },
          {
            name: "Simon Forsström",
          },
          {
            name: "Berry Henson",
          },
          {
            name: "Jens Dantorp",
          },
        ],
      },
      {
        teamName: "Team Max",
        players: [
          {
            name: "Brooks Koepka",
          },
          {
            name: "Dustin Johnson",
          },
          {
            name: "Sahith Theegala",
          },
          {
            name: "Ryan Fox",
          },
          {
            name: "Adam Hadwin",
          },
          {
            name: "Billy Horschel",
          },
          {
            name: "Scott Stallings",
          },
          {
            name: "Simon Forsström",
          },
          {
            name: "Jonathan James Grey",
          },
          {
            name: "Ben Carr",
          },
        ],
      },
      {
        teamName: "Team Emily",
        players: [
          {
            name: "Scottie Scheffler",
          },
          {
            name: "Cameron Young",
          },
          {
            name: "Matt Kuchar",
          },
          {
            name: "Kurt Kitayama",
          },
          {
            name: "Sepp Straka",
          },
          {
            name: "Francesco Molinari",
          },
          {
            name: "Stewart Cink",
          },
          {
            name: "Hank Lebioda",
          },
          {
            name: "Roger Sloan",
          },
          {
            name: "Jesse Schutte",
          },
        ],
      },
      {
        teamName: "Team Bobby",
        players: [
          {
            name: "Scottie Scheffler",
          },
          {
            name: "Rickie Fowler",
          },
          {
            name: "Min Woo Lee",
          },
          {
            name: "Taylor Montgomery",
          },
          {
            name: "Sepp Straka",
          },
          {
            name: "Billy Horschel",
          },
          {
            name: "Sam Bennett",
          },
          {
            name: "Martin Kaymer",
          },
          {
            name: "Nicholas Dunlap",
          },
          {
            name: "David Horsey",
          },
        ],
      },
      {
        teamName: "Team Seth",
        players: [
          {
            name: "Scottie Scheffler",
          },
          {
            name: "Dustin Johnson",
          },
          {
            name: "Si Woo Kim",
          },
          {
            name: "Kurt Kitayama",
          },
          {
            name: "Sepp Straka",
          },
          {
            name: "Billy Horschel",
          },
          {
            name: "Stewart Cink",
          },
          {
            name: "Hank Lebioda",
          },
          {
            name: "Paul Barjon",
          },
          {
            name: "Mateo Fernandez de Oliveira",
          },
        ],
      },
    ],
  }),
  actions: {
    async fetchLeaderboard() {
      try {
        const response = await fetch(
          `https://site.api.espn.com/apis/site/v2/sports/golf/leaderboard?event=${this.eventKey}`
        );
        const data = await response.json();
        this.players = data.events[0].competitions[0].competitors;
        this.tournament = data.events[0].tournament;
        this.createTeams();
        this.createLeaderboard();
      } catch (error) {
        console.log(error);
      }
    },
    createTiers() {
      const size = 15;

      while (this.tierPlayers.length > 0)
        this.tierGroups.push(this.tierPlayers.splice(0, size));

      if (this.tierGroups[10]) {
        this.tierGroups[9] = [...this.tierGroups[9], ...this.tierGroups[10]];
        this.tierGroups.splice(10, 1);
      }
    },
    createLeaderboard() {
      let leaderboard = [];
      leaderboard = this.eligibleTeams.sort((a, b) =>
        a.totalScore > b.totalScore ? 1 : -1
      );
      leaderboard = [...leaderboard, ...this.cutTeams];

      this.leaderboard = leaderboard;
    },
    createTeams() {
      this.teams.forEach((team) => {
        let newTeam = {};

        newTeam.teamName = team.teamName;
        newTeam.players = this.getPlayersList(team.players);
        newTeam.totalScore = this.getTeamScore(team.players);

        if (newTeam.totalScore === "CUT") {
          this.cutTeams = [...this.cutTeams, newTeam];
        } else {
          this.eligibleTeams = [...this.eligibleTeams, newTeam];
        }

        newTeam.players.reverse();

        this.createdTeams = [...this.createdTeams, newTeam];
      });
    },
    getTeamScore(list) {
      let totalScore = 0;
      let count = 0;
      const playerList = this.getPlayersList(list);

      playerList.forEach((player, i) => {
        if (i < 4) {
          if (
            player &&
            player.status?.displayValue !== "WD" &&
            player.status?.displayValue !== "CUT"
          ) {
            totalScore += player.statistics[0]?.value;
            count++;
          }
        }
      });

      if (count !== 4) {
        totalScore = "CUT";
      }

      return totalScore;
    },
    getPlayersList(list) {
      const players = this.players;
      let playerList = [];
      let cutPlayers = [];

      list.forEach((item) => {
        const filterPlayer = players.find(
          (player) =>
            player.athlete?.displayName?.toLowerCase() ===
            item?.name?.toLowerCase()
        );

        console.log(filterPlayer);

        if (
          filterPlayer.status?.displayValue === "WD" ||
          filterPlayer.status?.displayValue === "CUT"
        ) {
          cutPlayers = [...cutPlayers, filterPlayer];
        } else {
          playerList = [...playerList, filterPlayer];
        }
      });

      playerList.sort((a, b) =>
        a.statistics[0].value > b.statistics[0].value ? 1 : -1
      );

      playerList = [...playerList, ...cutPlayers];

      return playerList;
    },
  },
});
