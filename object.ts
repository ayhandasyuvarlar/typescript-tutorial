interface Point {
  x: number
  y: number
}
interface PointTwo {
  carname: string
  x: string
  y: string
  c: number
}
interface Vehicle {
  currentLocation: Point
  travelTo(point: Point): void
  carTo(point: PointTwo): void
}
class Taxi implements Vehicle {
  currentLocation: Point
  travelTo(point: Point): void {
    console.log(`taxi x localtion ${point.x}  y localtion  ${point.y} lets go`)
  }
}
class Bus implements Vehicle {
  currentLocation: Point
  travelTo(point: Point): void {
    console.log(`Bus x localtion ${point.x}  y localtion  ${point.y} lets go`)
  }
}
class Car implements Vehicle {
  carTo(point: PointTwo): void {
    console.log(
      `${point.carname} name is car ${point.x} from the point ${point.y} to the point going , estimated time of arrival ${point.c}`,
    )
  }
}
let taxi: Taxi = new Taxi()
taxi.travelTo({ x: 1, y: 2 })

let taxiTwo = new Taxi()
taxiTwo.travelTo({ x: 3, y: 1 })

let car = new Car()
car.carTo({ carname: 'Audi Rs7', x: 'Ankara', y: 'Malatya', c: 12 })
