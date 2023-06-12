import { defineStore } from "pinia";

export const useLeaderboardStore = defineStore("leaderboard", {
  state: () => ({
    eventKey: "401465508",
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
        name: "Justin Thomas",
      },
      {
        name: "Tony Finau",
      },
      {
        name: "Dustin Johnson",
      },
      {
        name: "Matt Fitzpatrick",
      },
      {
        name: "Hideki Matsuyama",
      },
      {
        name: "Jason Day",
      },
      {
        name: "Sungjae Im",
      },
      {
        name: "Shane Lowry",
      },
      {
        name: "Cameron Young",
      },
      {
        name: "Tyrrell Hatton",
      },
      {
        name: "Sam Burns",
      },
      {
        name: "Bryson DeChambeau",
      },
      {
        name: "Tommy Fleetwood",
      },
      {
        name: "Justin Rose",
      },
      {
        name: "Joaquin Niemann",
      },
      {
        name: "Corey Conners",
      },
      {
        name: "Wyndham Clark",
      },
      {
        name: "Tom Kim",
      },
      {
        name: "Patrick Reed",
      },
      {
        name: "Si Woo Kim",
      },
      {
        name: "Adam Scott",
      },
      {
        name: "Rickie Fowler",
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
        name: "Davis Riley",
      },
      {
        name: "Louis Oosthuizen",
      },
      {
        name: "Talor Gooch",
      },
      {
        name: "Kurt Kitayama",
      },
      {
        name: "Daniel Berger",
      },
      {
        name: "Cameron Davis",
      },
      {
        name: "Gary Woodland",
      },
      {
        name: "Seamus Power",
      },
      {
        name: "Russell Henley",
      },
      {
        name: "Ryan Fox",
      },
      {
        name: "Mito Pereira",
      },
      {
        name: "Abraham Ancer",
      },
      {
        name: "Jason Kokrak",
      },
      {
        name: "Denny McCarthy",
      },
      {
        name: "Billy Horschel",
      },
      {
        name: "Victor Perez",
      },
      {
        name: "Aaron Wise",
      },
      {
        name: "J.T. Poston",
      },
      {
        name: "Sergio Garcia",
      },
      {
        name: "Adam Hadwin",
      },
      {
        name: "Phil Mickelson",
      },
      {
        name: "Kyoung-Hoon Lee",
      },
      {
        name: "Thomas Pieters",
      },
      {
        name: "Harris English",
      },
      {
        name: "Keith Mitchell",
      },
      {
        name: "Harold Varner III",
      },
      {
        name: "Marc Leishman",
      },
      {
        name: "Brian Harman",
      },
      {
        name: "Mackenzie Hughes",
      },
      {
        name: "Sepp Straka",
      },
      {
        name: "Joel Dahmen",
      },
      {
        name: "Christiaan Bezuidenhout",
      },
      {
        name: "Robert MacIntyre",
      },
      {
        name: "Andrew Putnam",
      },
      {
        name: "Tom Hoge",
      },
      {
        name: "Michael Thorbjornsen",
      },
      {
        name: "Jordan Smith",
      },
      {
        name: "Danny Willett",
      },
      {
        name: "Sebastian Munoz",
      },
      {
        name: "Cameron Tringale",
      },
      {
        name: "Padraig Harrington",
      },
      {
        name: "Francesco Molinari",
      },
      {
        name: "Patrick Rodgers",
      },
      {
        name: "Austin Eckroat",
      },
      {
        name: "Eric Cole",
      },
      {
        name: "Aaron Rai",
      },
      {
        name: "Kevin Streelman",
      },
      {
        name: "Carlos Ortiz",
      },
      {
        name: "Gordon Sargent",
      },
      {
        name: "Martin Kaymer",
      },
      {
        name: "Sam Stevens",
      },
      {
        name: "Luke List",
      },
      {
        name: "Kevin Kisner",
      },
      {
        name: "Taylor Pendrith",
      },
      {
        name: "Wilco Nienaber",
      },
      {
        name: "Carson Young",
      },
      {
        name: "Nick Hardy",
      },
      {
        name: "Thirston Lawrence",
      },
      {
        name: "Vincent Norrman",
      },
      {
        name: "Romain Langasque",
      },
      {
        name: "Sam Bennett",
      },
      {
        name: "Stewart Cink",
      },
      {
        name: "Dylan Wu",
      },
      {
        name: "Michael Brennan",
      },
      {
        name: "Berry Henson",
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
        name: "Matthieu Pavon",
      },
      {
        name: "Davis Thompson",
      },
      {
        name: "Barclay Brown",
      },
      {
        name: "Frankie Capan III",
      },
      {
        name: "Nicolas Echevarria",
      },
      {
        name: "Deon Germishuys",
      },
      {
        name: "Paul Haley",
      },
      {
        name: "Karl Vilips",
      },
      {
        name: "Nick Dunlap",
      },
      {
        name: "David Nyfjall",
      },
      {
        name: "Mac Meissner",
      },
      {
        name: "Yuto Katsuragawa",
      },
      {
        name: "Austen Truslow",
      },
      {
        name: "Alejandro Del Rey",
      },
      {
        name: "Hank Lebioda",
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
        name: "Patrick Cover",
      },
      {
        name: "Paul Barjon",
      },
      {
        name: "Ryan Armour",
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
        name: "Brent Grant",
      },
      {
        name: "Jacob Solomon",
      },
      {
        name: "Aldrich Potgieter",
      },
      {
        name: "Andrew Svoboda",
      },
      {
        name: "Roger Sloan",
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
        name: "J.J. Grey",
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
            name: "Max Homa",
          },
          {
            name: "Tommy Fleetwood",
          },
          {
            name: "Abraham Ancer",
          },
          {
            name: "Danny Willett",
          },
          {
            name: "Cameron Champ",
          },
          {
            name: "K.H. Lee",
          },
          {
            name: "Sam Bennett",
          },
        ],
      },
      {
        teamName: "Team Audra",
        players: [
          {
            name: "Jon Rahm",
          },
          {
            name: "Corey Conners",
          },
          {
            name: "Tommy Fleetwood",
          },
          {
            name: "Talor Gooch",
          },
          {
            name: "Mito Pereira",
          },
          {
            name: "Harris English",
          },
          {
            name: "Kazuki Higa",
          },
          {
            name: "Larry Mize",
          },
        ],
      },
      {
        teamName: "Team Brad",
        players: [
          {
            name: "Rory Mcilroy",
          },
          {
            name: "Max Homa",
          },
          {
            name: "Adam Scott",
          },
          {
            name: "Séamus Power",
          },
          {
            name: "Chris Kirk",
          },
          {
            name: "Harris English",
          },
          {
            name: "Kevin Kisner",
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
            name: "Cameron Smith",
          },
          {
            name: "Will Zalatoris",
          },
          {
            name: "Patrick Reed",
          },
          {
            name: "Talor Gooch",
          },
          {
            name: "Billy Horschel",
          },
          {
            name: "Cameron Champ",
          },
          {
            name: "Bernhard Langer",
          },
          {
            name: "Vijay Singh",
          },
        ],
      },
      {
        teamName: "Team Adam",
        players: [
          {
            name: "Scottie Scheffler",
          },
          {
            name: "Cameron Young",
          },
          {
            name: "Tyrrell Hatton",
          },
          {
            name: "Talor Gooch",
          },
          {
            name: "Billy Horschel",
          },
          {
            name: "Kevin Na",
          },
          {
            name: "Kevin Kisner",
          },
          {
            name: "Larry Mize",
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
            name: "Will Zalatoris",
          },
          {
            name: "Min Woo Lee",
          },
          {
            name: "Abraham Ancer",
          },
          {
            name: "Billy Horschel",
          },
          {
            name: "Cameron Champ",
          },
          {
            name: "Kevin Kisner",
          },
          {
            name: "Fred Couples",
          },
        ],
      },
      {
        teamName: "Team Jeff",
        players: [
          {
            name: "Scottie Scheffler",
          },
          {
            name: "Will Zalatoris",
          },
          {
            name: "Justin Rose",
          },
          {
            name: "Talor Gooch",
          },
          {
            name: "Mito Pereira",
          },
          {
            name: "Cameron Champ",
          },
          {
            name: "Bernhard Langer",
          },
          {
            name: "Fred Couples",
          },
        ],
      },
      {
        teamName: "Team Seth",
        players: [
          {
            name: "Rory Mcilroy",
          },
          {
            name: "Sungjae Im",
          },
          {
            name: "Joaquin Niemann",
          },
          {
            name: "Abraham Ancer",
          },
          {
            name: "Mito Pereira",
          },
          {
            name: "Adam Svensson",
          },
          {
            name: "K.H. Lee",
          },
          {
            name: "Mateo Fernandez de Oliveira",
          },
        ],
      },
      {
        teamName: "Team Audrey",
        players: [
          {
            name: "Rory Mcilroy",
          },
          {
            name: "Max Homa",
          },
          {
            name: "Shane Lowry",
          },
          {
            name: "Louis Oosthuizen",
          },
          {
            name: "Mito Pereira",
          },
          {
            name: "Bubba Watson",
          },
          {
            name: "Sepp Straka",
          },
          {
            name: "Vijay Singh",
          },
        ],
      },
      {
        teamName: "Team Max",
        players: [
          {
            name: "Jordan Spieth",
          },
          {
            name: "Corey Conners",
          },
          {
            name: "Min Woo Lee",
          },
          {
            name: "Sahith Theegala",
          },
          {
            name: "Chris Kirk",
          },
          {
            name: "Gordon Sargent",
          },
          {
            name: "Harrison Crowe",
          },
          {
            name: "Adam Svensson",
          },
        ],
      },
      {
        teamName: "Team Ross",
        players: [
          {
            name: "Scottie Scheffler",
          },
          {
            name: "Cameron Young",
          },
          {
            name: "Tyrrell Hatton",
          },
          {
            name: "Keith Mitchell",
          },
          {
            name: "Chris Kirk",
          },
          {
            name: "J.T. Poston",
          },
          {
            name: "Scott Stallings",
          },
          {
            name: "Sam Bennett",
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
      const size = 10;

      while (this.tierPlayers.length > 0)
        this.tierGroups.push(this.tierPlayers.splice(0, size));
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

      console.log("P ", playerList);
      console.log("C ", cutPlayers);

      playerList = [...playerList, ...cutPlayers];

      console.log("PL ", playerList);

      return playerList;
    },
  },
});
