import { Diagram } from './types/diagram'

export function countPoints(diagram: Diagram, atLeast = 2){
  function reducer(previous, rowOrNumber: number[] | number){
    if (Array.isArray(rowOrNumber)){
      previous += rowOrNumber.reduce(reducer, 0)
    }
    else if (rowOrNumber >= atLeast){
      previous ++
    }
    return previous
  }
  return diagram.reduce(reducer, 0)
}