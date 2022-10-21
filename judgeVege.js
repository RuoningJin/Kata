const judgeVegetable = function (vegetables, metric) {
  let num = 0;
  for (const vegetable of vegetables) {
    if (vegetable[metric] > num) {
      num = vegetable[metric];
    }
  } 
  for (const vegetable of vegetables) {
    if (vegetable[metric] === num) {
      return vegetable.submitter;
    }
  }
}
const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'plumpness'
console.log(judgeVegetable(vegetables, metric))
