interface Point {
  x: number
  y: number
}

interface Vehicle {
  currentLocation: Point
  travelTo(point: Point): void
}
class Taxi  implements Vehicle{
    currentLocation: Point
    travelTo(point: Point): void {
            console.log(`taxi x localtion ${point.x }  y localtion  ${point.y} lets go`)
    }
}
class Bus  implements Vehicle{
    currentLocation: Point
    travelTo(point: Point): void {
        console.log(`Bus x localtion ${point.x }  y localtion  ${point.y} lets go`)
    }
}