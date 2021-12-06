import { loadAndSplit } from "../../utilities/load-data";

export function six(filename: string = 'src/inputs/6.txt'){
  const data = loadAndSplit(filename)[0].split(',')
  // part1(data)
  // 319114
  part2(data)
}


/**
 * how many fish would there be after 256 days?
 * first solution won't work, or will take too long rather.
 * 
 * I cheated slightly for this part, googled for similar situations and was reminded of histograms
 */
function part2(data: string[]){
  const daysLeft = 256

  // populate an array of 9 integers. each index represents the number of days a fish can have left before creating
  // another lanternfish, and the value at that index is the number of fish with that status (a histogram)
  const histogram = buildDistribution(data)
  const shiftedHistogram = shiftedDistribution(histogram, daysLeft)

  const answer = shiftedHistogram.reduce((sum, value) => sum + value)
  console.log('answer: ', answer)
  return answer
}

function buildDistribution(data: string[]): number[] {
  const distribution = new Array(9).fill(0) // statuses 0-8 means 9 possible values
  data.forEach(status => distribution[status]++)
  return distribution
}

// part 2 solution
function shiftedDistribution([...histogram]: number[], daysLeft: number): number[] {
  // is there a better way to figure this out rather than going one by one through the days?
  // probably but I'm not that smart at least not for this
  for(let i = 0; i < daysLeft; i++){
    const newFishes = histogram[0] // every fish with status 0 has now created a new fish
    histogram[0] = histogram[1]
    histogram[1] = histogram[2]
    histogram[2] = histogram[3]
    histogram[3] = histogram[4]
    histogram[4] = histogram[5]
    histogram[5] = histogram[6]
    histogram[6] = histogram[7] + newFishes // actually these are the fish from histogram[0] but they are the same number as newFishes
    histogram[7] = histogram[8]
    histogram[8] = newFishes
  }
  return histogram
}

function part1(data: string[]){
  const daysLeft = 80
  buildFish(data, daysLeft, false)
  console.log('answer: ', counter)
}

// part 1 solution
let counter = 0
function buildFish(data: string[], days = 80, isStaggered = true){
  counter += data.length

  data.forEach((reminainingDaysInCycle, index) => {

    const daysToNextFish = parseInt(reminainingDaysInCycle) + 1
    const numberOfDays = isStaggered ? getStaggeredDays(days, index) : days 

    if (daysToNextFish > numberOfDays){
      return
    }
    else {
      const remainingBlockOfDays = numberOfDays - daysToNextFish
      const numberOfNewFish = Math.floor((remainingBlockOfDays) / 7) + 1
      const newFish = new Array(Math.floor(numberOfNewFish)).fill(8)
      return buildFish(newFish, (remainingBlockOfDays) )
    }
  })
}

function getStaggeredDays(days: number, index: number){
  return days - (7 * index)
}