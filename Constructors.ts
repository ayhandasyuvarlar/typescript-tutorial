interface Point {
  x: number
  y: number
}

interface Vehicle {
  currentLocation: Point
  travelTo(point: Point): void
}
class Taxi implements Vehicle {
    
  constructor(localtion: Point) {
    this.currentLocation = localtion
  }
  currentLocation: Point
  travelTo(point: Point): void {
    console.log(`Bus x localtion ${point.x}  y localtion  ${point.y} lets go`)
  }
}

let taxi = new Taxi({ x: 1, y: 2 })
taxi.travelTo({ x: 1, y: 2 })

console.log(taxi.currentLocation)
