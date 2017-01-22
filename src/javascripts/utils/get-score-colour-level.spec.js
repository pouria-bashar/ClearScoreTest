import getScoreColourLevel from './get-score-colour-level';
import scoreColourLevelConstants from '../constants/score-colour-levels';

describe('getScoreColourLevel', () => {
  it('should return the GREAT color level for scores over 500', () => {
    expect(getScoreColourLevel(501)).to.equal(scoreColourLevelConstants.GREAT);
  });

  it('should return the AVERAGE color level for scores over 300 but less than 501', () => {
    expect(getScoreColourLevel(301)).to.equal(scoreColourLevelConstants.AVERAGE);
    expect(getScoreColourLevel(500)).to.equal(scoreColourLevelConstants.AVERAGE);
  });

  it('should return the POOR color level for scores less than or equal to 300', () => {
    expect(getScoreColourLevel(300)).to.equal(scoreColourLevelConstants.POOR);
  });
});
