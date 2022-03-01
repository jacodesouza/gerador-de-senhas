var min = 100
var med = 500
var max = 1000

function rand({ min = 100, med = 500, max = 1000 }) { 
    const valor = Math.random() * (max - med - min) + min
     return Math.floor(valor)
}
(min - med - max)

const obj = { min: 100, med: 500, max: 1000}
console.log(rand(obj))
console.log(rand({ min: 955}))
console.log(rand({max: 1000}))
