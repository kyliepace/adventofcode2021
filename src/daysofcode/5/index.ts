import { loadAndSplit } from "../../utilities/load-data"
import { buildDiagram } from "./build-diagram"
import { lineToPoints } from "./line-to-points"
import { straightLinesOnly, straightAndDiagonalLines } from "./filter-lines"
import { Points } from "./types/points"
import { countPoints } from './count-points'

export async function five(filename: string = 'src/inputs/5.txt'){
  const data = loadAndSplit(filename) // ['822,976 -> 822,117', '387,419 -> 387,468]

  // part1(data)
  part2(data)
}

function part2(data){
  // now I need to consider diagonal lines but only 45degrees diaganol (whew)

  const arrayOfCoordinates = splitIntoCoordinates(data) // [[['822', '876'], ['387', '419']], [ [x1, y1], [x2, y2]]]
  const arrayOfLines = straightAndDiagonalLines(arrayOfCoordinates)

  const diagram = buildDiagram(arrayOfLines)
  
  const answer = countPoints(diagram, 2)
  console.log('answer: ', answer)
  // 21698 correct on first try!
}

function part1(data){
  // split each line into a pair of coordinates
  const arrayOfCoordinates = splitIntoCoordinates(data) // [[['822', '876'], ['387', '419']], [ [x1, y1], [x2, y2]]]
  // ignore any diagonal lines
  const arrayOfStraightLines = straightLinesOnly(arrayOfCoordinates)

  const diagram = buildDiagram(arrayOfStraightLines)
  
  const answer = countPoints(diagram, 2)
  console.log('answer: ', answer)
  // guesses
  // 2144 too low. array to loop through based on math.abs was short by 1
  // 5294 yay correct!
}

function splitIntoCoordinates(data: string[]): Array<Points>{
  return data
    // .slice(0, 50)
    .map(lineString => {
      const arrayOfCoordinates = lineString.split(' -> ').map(coordString => coordString.split(','))
      return lineToPoints(arrayOfCoordinates)
    })
}

