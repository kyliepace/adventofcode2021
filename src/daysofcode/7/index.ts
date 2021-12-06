import { loadAndSplit } from "../../utilities/load-data"

export function seven(filename: string = 'src/input/6.test.tx'){
  const data = loadAndSplit(filename)[0].split(',').map(val => parseInt(val))
  // part1(data)
  part2(data)
}

function part1(data: number[]){
  const sortedData = sortAndUnique([...data])
  const answer = findLowestCost(data, sortedData)
  console.log('answer: ', answer)
  // 340052
}

function part2(data: number[]){
  const sortedData = sortAndUnique([...data])
  const answer = findLowestCost(data, sortedData)
  console.log('answer: ', answer)
}

function sortAndUnique(data: number[]): number[]{
  const sorted = data
    .sort((a, b) => a - b)

  const max = sorted[data.length - 1]
  return [...new Array(max).keys()]
    // .reduce((acc, val) => {
    //   if (acc.includes(val)){ return acc }
    //   acc.push(val)
    //   return acc
    // }, [])
}

function findLowestCost(data: number[], sortedData: number[], fuelCost?: number){
  const middleIndex = Math.ceil(sortedData.length / 2)
  return compareToOtherSides(data, sortedData, middleIndex, fuelCost)
}

function goLeft(data, sortedData, index, fuelCost){
  const splitData = sortedData.slice(0, index)
  return findLowestCost(data, splitData, fuelCost)
}

function goRight(data, sortedData, index, fuelCost){
  const splitData = sortedData.slice(index)
  return findLowestCost(data, splitData, fuelCost)
}

function compareToOtherSides(data: number[], sortedData: number[], index: number, fuelCost: number){
  const rightSideCost = calculateCost(sortedData[index], data, fuelCost)
  const leftSideCost = calculateCost(sortedData[index - 1], data, fuelCost)
  if (sortedData.length === 2){
    return rightSideCost < leftSideCost ? rightSideCost : leftSideCost
  }
  if (rightSideCost < leftSideCost){
    return goRight(data, sortedData, index, rightSideCost)
  }
  else if (leftSideCost < rightSideCost){
    return goLeft(data, sortedData, index, leftSideCost)
  }
  else {
    return compareToOtherSides(data, sortedData, index, fuelCost)
  }
}


// // part1 solution
// function calculateCost(destination: number, sortedData: number[], lowestFuelCost?: number): number {
//   let fuelCost = 0
//   sortedData.find(val => {
//     const diff = Math.abs(val - destination)
//     fuelCost += diff 
//     if (fuelCost > lowestFuelCost){
//       return
//     }
//   })
//   return fuelCost
// }

// part2 solution
function calculateCost(destination: number, sortedData: number[], lowestFuelCost?: number): number {
  let fuelCost = 0
  sortedData.find(val => {
    const diff = Math.abs(val - destination);
    let stepCost = 0
    const arrayOfSteps = [...new Array(diff).keys()]
    arrayOfSteps.forEach(step => {
      stepCost += (step + 1)
    })
    fuelCost += stepCost 
    if (fuelCost > lowestFuelCost){
      return
    }
  })
  return fuelCost
}