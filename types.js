var number = 4;
number = "a";
var a;
a = 4;
a = "hello";
var b;
b = 4;
b = "hello";
b = true;
var c = [1, 2, 3, 4, 5, 6];
var d = [1, 2, 3, 4, 5, 6];
var e = [1, "hello", true];

var krediPayment = 0;
var havalePayment = 1;
var eftPayment = 2;
var Payment;
(function (Payment) {
  Payment[(Payment["kredi"] = 0)] = "kredi";
  Payment[(Payment["havale"] = 1)] = "havale";
  Payment[(Payment["eft"] = 2)] = "eft";
})(Payment || (Payment = {}));

var kredi = Payment.kredi;
var havale = Payment.havale;
var eft = Payment.eft;
