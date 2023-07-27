import { getScore, generateStamps } from "./gameCounter";

describe("Тесты на функцию getScore", () => {
  it("Начало игры с оффесетом = 0 где оба счета должны быть равны 0", () => {
    const stamps = generateStamps();
    const testOffset = 0;
    const testScores = { home: 0, away: 0 };
    expect(testScores).toEqual(getScore(stamps, testOffset));
  });

  it("Работоспособность функции на первновоначальных значениях", () => {
    const stamps = generateStamps();
    const testOffset = stamps[0].offset;
    const testScores = stamps[0].score;
    const score = getScore(stamps, testOffset);
    expect(testScores).toEqual(score);
  });

  it("Работоспособность функции на последних значениях",
    () => {
      const stamps = generateStamps();
      const testOffset = stamps[stamps.length - 1].offset;
      const testScores = stamps[stamps.length - 1].score;
      const score = getScore(stamps, testOffset);
      expect(score).toEqual(testScores);
    });
  
});
