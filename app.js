const team = {
    _players: [
        {firstName: 'James', lastName: 'Reece', age: 23},
        {firstName: 'Chilwell', lastName: 'Ben', age: 27},
        {firstName: 'Mount', lastName: 'Mason', age: 23}
    ],
    _games: [
        {opponent: 'Milan', teamPoints: 3, opponentPoints: 0},
        {opponent: 'Crystal Palace', teamPoints: 2, opponentPoints: 1},
        {opponent: 'Tottenham', teamPoints: 2, opponentPoints: 2},
    ],
    get players() {
        return this._players;
    },
    get games() {
        return this._games;
    },
    addPlayer(newFirstName, newLastName, newAge) {
        let player = {
            firstName: newFirstName,
            lastName: newLastName,
            age: newAge,
        };
        this._players.push(player)
    },
    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
        let game = {
            opponent: newOpponent,
            teamPoints: newTeamPoints,
            opponentPoints: newOpponentPoints,
        }
        this._games.push(game)
    }
}
team.addPlayer('Bugs', 'Bunny', 76)
team.addGame('Titans', 100, 98)
console.log(team._games)