export function tournamentWinner(competitions, results) {
  const teams = {};

  for (let i = 0; i < competitions.length; i++) {
    const homeTeam = competitions[i][0];
    const awayTeam = competitions[i][1];

    // Initialize the teams' scores if they don't exist
    if (!teams[homeTeam]) {
      teams[homeTeam] = 0;
    }
    if (!teams[awayTeam]) {
      teams[awayTeam] = 0;
    }

    if (results[i] === 0) {
      // Away team won
      teams[awayTeam] += 3;
    } else if (results[i] === 1) {
      // Home team won
      teams[homeTeam] += 3;
    }
  }

  let tourneyWinner = null;
  let tourneyWinnerScore = 0;
  for (const [team, score] of Object.entries(teams)) {
    if (score > tourneyWinnerScore) {
      tourneyWinnerScore = score;
      tourneyWinner = team;
    }
  }

  return tourneyWinner;
}
