import { Points } from "./types/points";
import { Diagram } from './types/diagram'

/**
 * return a matrix dimensions equal to max x coord by max y coord
 * each unmarked coordinate will have value 0
 * every time a coordinate is touched by a line, its value increases by 1
 */
export function buildDiagram(arrayOfCoordinates: Array<Points>){
  function reducer(previous, points){
    if (points.x1 == points.x2){
      return buildVerticalLine(points, previous)
    }
    else if (points.y1 == points.y2){
      return buildHorizontalLine(points, previous)
    }
    else {
      return buildDiagonalLine(points, previous)
    }
  }
  return arrayOfCoordinates.reduce(reducer, [])
}

function buildDiagonalLine(points: Points, diagram: Diagram): Diagram {
  // we know the slope has to equal 1
  const horizontalDifference = points.x2 - points.x1
  const verticalDifference = points.y2 - points.y1

  const xDifferenceLength = Math.abs(horizontalDifference) + 1
  const differenceArray = [...new Array(xDifferenceLength).keys()]

  differenceArray.forEach((value) => {
    const xValue = horizontalDifference > 0 ? points.x1 + value : points.x2 + value 
    const yValue = verticalDifference > 0 ? 
      horizontalDifference > 0 ? points.y1 + value : points.y2 - value :
      horizontalDifference > 0 ? points.y1 - value : points.y2 + value
    // const yValue = verticalDifference > 0 ? points.y2 + value : points.y1 + value 

    diagram[yValue] = buildLine(diagram, xValue, yValue)
  })
  return diagram
}

function buildHorizontalLine(points: Points, diagram: Diagram): Diagram {
  const horizontalDifference = Math.abs(points.x1 - points.x2)
  const smallerXValue = points.x1 < points.x2 ? points.x1 : points.x2
  const xDifferenceArray = [...new Array(horizontalDifference + 1).keys()]
  xDifferenceArray.forEach(value => {
    const xValue = smallerXValue + value 
    const yValue = points.y1 
    diagram[yValue] = buildLine(diagram, xValue, yValue)
  })
  return diagram
}

function buildVerticalLine(points: Points, diagram: Diagram): Diagram{
  const verticalDifference = Math.abs(points.y1 - points.y2)
  const smallerYValue = points.y1 < points.y2 ? points.y1 : points.y2
  const yDifferenceArray = [ ...new Array(verticalDifference + 1).keys()]
  yDifferenceArray.forEach(value => {
    const yValue = smallerYValue + value 
    const xValue = points.x1
    diagram[yValue] = buildLine(diagram, xValue, yValue)
  })
  return diagram
}

function buildLine(diagram: Diagram, xValue: number, yValue: number){
  const diagramRow = diagram[yValue] || []
  let coordinate = diagramRow[xValue]
  if (!coordinate){
    diagramRow[xValue] = 1
  }
  else {
    diagramRow[xValue] ++
  }
  return diagramRow
}