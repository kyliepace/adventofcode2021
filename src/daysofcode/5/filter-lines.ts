import { Points } from "./types/points"

/**
 * only return lines where either x1=x2 or y1=y2
 */
export function straightLinesOnly(arrayOfCoordinates: Array<Points>): Array<Points>{
  return arrayOfCoordinates.filter(isStraightLine)  
}

function isStraightLine({x1, x2, y1, y2}: Points): boolean {
  return x1 === x2 || y1 === y2
}

function isDiagonalLine({x1, x2, y1, y2}: Points): boolean {
  const diffX = Math.abs(x1 - x2)
  const diffY = Math.abs(y1 - y2)
  const slope = diffX / diffY 
  return slope === 1
}


/**
 * if not a straight line, then do both points change at the same rate?
 * e.g. [[8,0], [0,8]] does
 * but [[6,2], [2,0]] does not
 */
export function straightAndDiagonalLines(arrayOfCoordinates: Array<Points>): Array<Points>{
  return arrayOfCoordinates.filter(points => {
    return isStraightLine(points) || isDiagonalLine(points)
  })
}