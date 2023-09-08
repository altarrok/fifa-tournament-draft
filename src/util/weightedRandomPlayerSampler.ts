import { TPlayer } from "~/components/dataset/DatasetUploader";


function weightedRandom(players: TPlayer[]): TPlayer | null {
  const totalWeight = players.reduce((sum, currentPlayer) => sum + currentPlayer.Overall, 0);
  if (totalWeight <= 0) {
    return null; // No valid items to choose from.
  }

  const randomValue = Math.random() * totalWeight;
  let cumulativeWeight = 0;

  for (let i = 0; i < players.length; i++) {
    const player = players[i]!;
    cumulativeWeight += player.Overall;
    if (randomValue <= cumulativeWeight) {
      players.splice(i, 1);
      return player;
    }
  }

  return null; // Fallback, shouldn't reach here in most cases.
}


export const randomNWeightedPlayerSampler = (players: TPlayer[], n: number): TPlayer[] => {
  const selectedPlayers: TPlayer[] = [];
  for (let i = 0; i < n; i++) {
    const selectedPlayer = weightedRandom(players);
    if (selectedPlayer !== null) {
      selectedPlayers.push(selectedPlayer);
    }
  }
  return selectedPlayers;
}