/**
 * @url https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem
 */

export interface Score {
  highestScore: number[];
  lowestScore: number[];
}

export function breakingRecords(score: number[]): number[] {
  // Complete this function
  const { highestScore, lowestScore }: Score = getHighestandLowestScore(score);

  const nbBrokeHighestscore: number = highestScore.reduce(
    countBrokeRecords(highestScore),
    0
  );

  const nbBrokeLowestscore: number = lowestScore.reduce(
    countBrokeRecords(lowestScore),
    0
  );

  return [nbBrokeHighestscore, nbBrokeLowestscore];
}

function countBrokeRecords(
  score: number[]
): (acc: number, e: number, index: number) => number {
  return (acc: number, e: number, index: number): number => {
    let res: number = acc;
    if (index > 0 && e !== score[index - 1]) {
      res = res + 1;
    }

    return res;
  };
}

export function getHighestandLowestScore(score: number[]): Score {
  return score.reduce(
    (acc: Score, e: number) => {
      const highestScore: number =
        acc.highestScore[acc.highestScore.length - 1];
      if (highestScore === undefined || e > highestScore) {
        acc.highestScore.push(e);
      } else {
        acc.highestScore.push(highestScore);
      }

      const lowestScore: number = acc.lowestScore[acc.lowestScore.length - 1];
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
