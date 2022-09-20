let number = 4
number = `a`

let a: number
a = 4
a = 'hello'

let b

b = 4
b = 'hello'
b = true

let c: number[] = [1, 2, 3, 4, 5, 6]
let d: Array<number> = [1, 2, 3, 4, 5, 6]
let e: [number, string, boolean] = [1, 'hello', true]

let krediPayment = 0
const havalePayment = 1
let eftPayment = 2

enum Payment {
  kredi = 0,
  havale = 1,
  eft = 2,
}

let kredi = Payment.kredi
let havale = Payment.havale
let eft = Payment.eft
