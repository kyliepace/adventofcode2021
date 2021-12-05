import { loadAndSplit } from "../../utilities/load-data"
import { straightLinesOnly } from "./straight-lines-only"

export async function five(filename: string = 'src/inputs/5.txt'){
  const data = loadAndSplit(filename) // ['822,976 -> 822,117', '387,419 -> 387,468]

  part1(data)
}


function part1(data){
  // split each line into a pair of coordinates
  const arrayOfCoordinates = splitIntoCoordinates(data)
  // ignore any diagonal lines
  const arrayOfStraightLines = straightLinesOnly(data)
}

function splitIntoCoordinates(data: string[]): Array<string[]>{
  return data.slice(0, 2).map(lineString => {
    const coords = lineString.split(' -> ')
    return coords
  })
}