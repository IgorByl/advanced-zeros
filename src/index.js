module.exports = function getZerosCount(number, base) {
  let baseSystem = base;
  for (let i = 2; i <= base; i++) {
      if (baseSystem % i === 0) {
          let power = 0;
          while (baseSystem % i === 0) {
              baseSystem = baseSystem / i;
              power++;
          }
          let result = 0;
          let iterationCount = Math.floor(number / i);
          while (iterationCount > 0) {
              result += iterationCount;
              iterationCount = Math.floor(iterationCount / i);
          }
        count = Math.floor(result / power);
      }
  }
  return count;
}