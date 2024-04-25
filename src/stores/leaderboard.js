import { defineStore } from "pinia";
import { usePlayersListStore } from "@/stores/players-list";
import { useViewsStore } from "@/stores/views";

export const useLeaderboardStore = defineStore("leaderboard", {
  state: () => ({
    eventKey: "401580344",
    date: "",
    leaderboard: [],
    players: [],
    tierGroups: [],
    createdTeams: [],
    eligibleTeams: [],
    cutTeams: [],
    tournament: null,
    status: null,
  }),
  actions: {
    resetState() {
      this.leaderboard = [];
      this.players = [];
      this.tierGroups = [];
      this.createdTeams = [];
      this.eligibleTeams = [];
      this.cutTeams = [];
      this.tournament = null;
      this.status = null;
    },
    async fetchLeaderboard() {
      try {
        const response = await fetch(
          `https://site.api.espn.com/apis/site/v2/sports/golf/leaderboard?event=${this.eventKey}`
        );
        const data = await response.json();
        this.resetState();
        this.date = data.events[0].date;
        this.players = data.events[0].competitions[0].competitors;
        this.tournament = data.events[0].tournament;
        this.status = data.events[0].status;
        this.createTeams();
        this.createLeaderboard();
      } catch (error) {
        console.log(error);
      }
    },
    createTiers() {
      const tierPlayers = usePlayersListStore().tournamentPlayers;
      const size = 11;

      while (tierPlayers.length > 0)
        this.tierGroups.push(tierPlayers.splice(0, size));

      if (this.tierGroups[8]) {
        this.tierGroups[7] = [...this.tierGroups[7], ...this.tierGroups[8]];
        this.tierGroups.splice(8, 1);
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
      const teams = usePlayersListStore().teams;

      teams.forEach((team) => {
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
            player?.status?.displayValue !== "WD" &&
            player?.status?.displayValue !== "CUT"
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
          (player) => player.athlete?.id === item?.id
        );

        if (
          filterPlayer?.status?.displayValue === "WD" ||
          filterPlayer?.status?.displayValue === "CUT"
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
