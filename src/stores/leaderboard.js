import { defineStore } from 'pinia';

export const useLeaderboardStore = defineStore('leaderboard', {
    state: () => ({
        eventKey: '401465508',
        leaderboard: [],
        players: [],
        createdTeams: [],
        tournament: null,
        teams: [
            {
                teamName: 'Team Vince',
                players: [
                    {
                        name: 'Scottie Scheffler'
                    },
                    {
                        name: 'Max Homa'
                    },
                    {
                        name: 'Tommy Fleetwood'
                    },
                    {
                        name: 'Abraham Ancer'
                    },
                    {
                        name: 'Danny Willett'
                    },
                    {
                        name: 'Cameron Champ'
                    },
                    {
                        name: 'K.H. Lee'
                    },
                    {
                        name: 'Sam Bennett'
                    }
                ]
            },
            {
                teamName: 'Team Audra',
                players: [
                    {
                        name: 'Jon Rahm'
                    },
                    {
                        name: 'Corey Conners'
                    },
                    {
                        name: 'Tommy Fleetwood'
                    },
                    {
                        name: 'Talor Gooch'
                    },
                    {
                        name: 'Mito Pereira'
                    },
                    {
                        name: 'Harris English'
                    },
                    {
                        name: 'Kazuki Higa'
                    },
                    {
                        name: 'Larry Mize'
                    }
                ]
            },
            {
                teamName: 'Team Brad',
                players: [
                    {
                        name: 'Rory Mcilroy'
                    },
                    {
                        name: 'Max Homa'
                    },
                    {
                        name: 'Adam Scott'
                    },
                    {
                        name: 'Séamus Power'
                    },
                    {
                        name: 'Chris Kirk'
                    },
                    {
                        name: 'Harris English'
                    },
                    {
                        name: 'Kevin Kisner'
                    },
                    {
                        name: 'Mateo Fernandez de Oliveira'
                    }
                ]
            },
            {
                teamName: 'Team Jason',
                players: [
                    {
                        name: 'Cameron Smith'
                    },
                    {
                        name: 'Will Zalatoris'
                    },
                    {
                        name: 'Patrick Reed'
                    },
                    {
                        name: 'Talor Gooch'
                    },
                    {
                        name: 'Billy Horschel'
                    },
                    {
                        name: 'Cameron Champ'
                    },
                    {
                        name: 'Bernhard Langer'
                    },
                    {
                        name: 'Vijay Singh'
                    }
                ]
            },
            {
                teamName: 'Team Adam',
                players: [
                    {
                        name: 'Scottie Scheffler'
                    },
                    {
                        name: 'Cameron Young'
                    },
                    {
                        name: 'Tyrrell Hatton'
                    },
                    {
                        name: 'Talor Gooch'
                    },
                    {
                        name: 'Billy Horschel'
                    },
                    {
                        name: 'Kevin Na'
                    },
                    {
                        name: 'Kevin Kisner'
                    },
                    {
                        name: 'Larry Mize'
                    }
                ]
            },
            {
                teamName: 'Team Bobby',
                players: [
                    {
                        name: 'Scottie Scheffler'
                    },
                    {
                        name: 'Will Zalatoris'
                    },
                    {
                        name: 'Min Woo Lee'
                    },
                    {
                        name: 'Abraham Ancer'
                    },
                    {
                        name: 'Billy Horschel'
                    },
                    {
                        name: 'Cameron Champ'
                    },
                    {
                        name: 'Kevin Kisner'
                    },
                    {
                        name: 'Fred Couples'
                    }
                ]
            },
            {
                teamName: 'Team Jeff',
                players: [
                    {
                        name: 'Scottie Scheffler'
                    },
                    {
                        name: 'Will Zalatoris'
                    },
                    {
                        name: 'Justin Rose'
                    },
                    {
                        name: 'Talor Gooch'
                    },
                    {
                        name: 'Mito Pereira'
                    },
                    {
                        name: 'Cameron Champ'
                    },
                    {
                        name: 'Bernhard Langer'
                    },
                    {
                        name: 'Fred Couples'
                    }
                ]
            },
            {
                teamName: 'Team Seth',
                players: [
                    {
                        name: 'Rory Mcilroy'
                    },
                    {
                        name: 'Sungjae Im'
                    },
                    {
                        name: 'Joaquin Niemann'
                    },
                    {
                        name: 'Abraham Ancer'
                    },
                    {
                        name: 'Mito Pereira'
                    },
                    {
                        name: 'Adam Svensson'
                    },
                    {
                        name: 'K.H. Lee'
                    },
                    {
                        name: 'Mateo Fernandez de Oliveira'
                    }
                ]
            },
            {
                teamName: 'Team Audrey',
                players: [
                    {
                        name: 'Rory Mcilroy'
                    },
                    {
                        name: 'Max Homa'
                    },
                    {
                        name: 'Shane Lowry'
                    },
                    {
                        name: 'Louis Oosthuizen'
                    },
                    {
                        name: 'Mito Pereira'
                    },
                    {
                        name: 'Bubba Watson'
                    },
                    {
                        name: 'Sepp Straka'
                    },
                    {
                        name: 'Vijay Singh'
                    }
                ]
            },
            {
                teamName: 'Team Max',
                players: [
                    {
                        name: 'Jordan Spieth'
                    },
                    {
                        name: 'Corey Conners'
                    },
                    {
                        name: 'Min Woo Lee'
                    },
                    {
                        name: 'Sahith Theegala'
                    },
                    {
                        name: 'Chris Kirk'
                    },
                    {
                        name: 'Gordon Sargent'
                    },
                    {
                        name: 'Harrison Crowe'
                    },
                    {
                        name: 'Adam Svensson'
                    }
                ]
            },
            {
                teamName: 'Team Ross',
                players: [
                    {
                        name: 'Scottie Scheffler'
                    },
                    {
                        name: 'Cameron Young'
                    },
                    {
                        name: 'Tyrrell Hatton'
                    },
                    {
                        name: 'Keith Mitchell'
                    },
                    {
                        name: 'Chris Kirk'
                    },
                    {
                        name: 'J.T. Poston'
                    },
                    {
                        name: 'Scott Stallings'
                    },
                    {
                        name: 'Sam Bennett'
                    }
                ]
            },
        ]
    }),
    actions: {
        async fetchLeaderboard() {
            try {
                const response = await fetch(`https://site.api.espn.com/apis/site/v2/sports/golf/leaderboard?event=${this.eventKey}`);
                const data = await response.json();
                
                this.players = data.events[0].competitions[0].competitors;
                this.tournament = data.events[0].tournament;
                this.createTeams();
                this.createLeaderboard();
            } catch (error) {
                console.log(error)
            }
        },
        createLeaderboard() {
            let leaderboard = [];
            leaderboard = this.createdTeams.sort((a, b) => (a.totalScore > b.totalScore) ? 1 : -1);

            this.leaderboard = leaderboard;
        },
        createTeams() {
            this.teams.forEach(team => {
                let newTeam = {};

                newTeam.teamName = team.teamName;
                newTeam.players = this.getPlayersList(team.players);
                newTeam.totalScore = this.getTeamScore(team.players);

                this.createdTeams = [...this.createdTeams, newTeam];
            });
        },
        getTeamScore(list) {
            let totalScore = 0;
            const playerList = this.getPlayersList(list);

            playerList.forEach((player, i) => {
                if (i < 4) {
                    if (player && player.status?.displayValue !== 'WD') {
                        totalScore += player.statistics[0]?.value;
                    }
                }
            });

            return totalScore;
        },
        getPlayersList(list) {
            const players = this.players;
            let playerList = [];
            let cutPlayers = [];

            list.forEach(item => {
                const filterPlayer = players.find(player => player.athlete?.displayName?.toLowerCase() === item?.name?.toLowerCase());

                if (filterPlayer.status?.displayValue === 'WD') {
                    cutPlayers = [...cutPlayers, filterPlayer]
                } else {
                    playerList = [...playerList, filterPlayer];
                }
            });

            playerList.sort((a, b) => (a.statistics[0].value > b.statistics[0].value) ? 1 : -1);

            playerList = [...playerList, ...cutPlayers]

            return playerList;
        }
    },
});
