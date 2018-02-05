/**
 * @url https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem
 */
export interface Score {
  highestScore: number[];
  lowestScore: number[];
}

export function breakingRecords(score: number[]) {
  // Complete this function
  const { highestScore, lowestScore } = getHighestandLowestScore(score);

  const nbBrokeHighestscore = highestScore.reduce(
    countBrokeRecords(highestScore),
    0
  );

  const nbBrokeLowestscore = lowestScore.reduce(
    countBrokeRecords(lowestScore),
    0
  );

  return [nbBrokeHighestscore, nbBrokeLowestscore];
}

function countBrokeRecords(score: number[]) {
  return (acc: number, e: number, index: number) => {
    let res = acc;
    if (index > 0 && e !== score[index - 1]) {
      res = res + 1;
    }

    return res;
  };
}

export function getHighestandLowestScore(score: number[]) {
  return score.reduce(
    (acc: Score, e: number) => {
      const highestScore = acc.highestScore[acc.highestScore.length - 1];
      if (highestScore === undefined || e > highestScore) {
        acc.highestScore.push(e);
      } else {
        acc.highestScore.push(highestScore);
      }

      const lowestScore = acc.lowestScore[acc.lowestScore.length - 1];
      if (lowestScore === undefined || e < lowestScore) {
        acc.lowestScore.push(e);
      } else {
        acc.lowestScore.push(lowestScore);
      }

      return acc;
    },
    { highestScore: [], lowestScore: [] }
  );
}
