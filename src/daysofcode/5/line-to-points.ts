import { Points } from "./types/points"

export function lineToPoints(line: string[][]): Points{
  const point1 = line[0]
  const point2 = line[1]
  if (!point1 || !point2){
    console.log('points missing: ', line)
    throw new Error('points missing')
  }
  return {
    x1: parseInt(point1[0]),
    x2: parseInt(point2[0]),
    y1: parseInt(point1[1]),
    y2: parseInt(point2[1])
  }
}