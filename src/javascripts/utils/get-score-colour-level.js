import scoreColourLevelConstants from '../constants/score-colour-levels';

export default function getScoreColourLevel(score) {
  let colourLevel = scoreColourLevelConstants.GREAT;

  if (score <= 300) {
    colourLevel = scoreColourLevelConstants.POOR;
  } else if (score > 300 && score <= 500) {
    colourLevel = scoreColourLevelConstants.AVERAGE;
  }

  return colourLevel;
}
