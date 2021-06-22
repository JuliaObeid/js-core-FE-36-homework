// === TO NUMBER ===

// ЛЮБОЕ СТРОЧНОЕ ЗНАЧЕНИЕ К ЧИСЛУ
let value ="Bla bla bla";

// 1й способ
let toNumber = Number(value)
console.log('${value},через конструктор String(): ', toNumber)
console.log('тип данных ${value},через конструктор String(): ',typeof toNumber)

// 2й способ
toNumber = +value
console.log('${value},через унарный +: ', toNumber)
console.log('тип данных ${value},через унарный +: ', typeof toNumber)


// СТРОЧНОЕ ЧИСЛО К ЧИСЛУ
value = "123";

// 1й способ
toNumber = Number(value)
console.log('${value},через конструктор String(): ', toNumber)
console.log('тип данных ${value},через конструктор String(): ',typeof toNumber)

// 2й способ
toNumber = +value
console.log('${value},через унарный +: ', toNumber)
console.log('тип данных ${value},через унарный +: ', typeof toNumber)


// ПУСТАЯ СТРОКА К ЧИСЛУ
value = "";

// 1й способ
toNumber = Number(value)
console.log('пустая строка ${value},через конструктор String(): ', toNumber)
console.log('тип данных пустой строки ${value},через конструктор String(): ',typeof toNumber)

// 2й способ
toNumber = +value
console.log('пустая строка ${value},через унарный +: ', toNumber)
console.log('тип данных пустой строки ${value},через унарный +: ', typeof toNumber)



// СТРОКА С ПРОБЕЛОМ К ЧИСЛУ
value = " ";

// 1й способ
toNumber = Number(value)
console.log('строка с пробелом ${value},через конструктор String(): ', toNumber)
console.log('тип данных строки с пробелом ${value},через конструктор String(): ',typeof toNumber)

// 2й способ
toNumber = +value
console.log('строка с пробелом ${value},через унарный +: ', toNumber)
console.log('тип данных строки с пробелом ${value},через унарный +: ', typeof toNumber) 


// БУЛЕВОЕ (ЛОГИЧЕСКОЕ) true к числу
value = true

// 1й способ
toNumber = Number(value)
console.log('${value},через конструктор String(): ', toNumber)
console.log('тип данных ${value},через конструктор String(): ',typeof toNumber)

// 2й способ
toNumber = +value
console.log('${value},через унарный +: ', toNumber)
console.log('тип данных ${value},через унарный +: ', typeof toNumber)


// БУЛЕВОЕ (ЛОГИЧЕСКОЕ) false к числу
value = false

// 1й способ
toNumber = Number(value)
console.log('${value},через конструктор String(): ', toNumber)
console.log('тип данных ${value},через конструктор String(): ',typeof toNumber)

// 2й способ
toNumber = +value
console.log('${value},через унарный +: ', toNumber)
console.log('тип данных ${value},через унарный +: ', typeof toNumber)


// undefined к числу
value = undefined

// 1й способ
toNumber = Number(value)
console.log('${value},через конструктор String(): ', toNumber)
console.log('тип данных ${value},через конструктор String(): ',typeof toNumber)

// 2й способ
toNumber = +value
console.log('${value},через унарный +: ', toNumber)
console.log('тип данных ${value},через унарный +: ', typeof toNumber)


// null к числу
value = null

// 1й способ
toNumber = Number(value)
console.log('${value},через конструктор String(): ', toNumber)
console.log('тип данных ${value},через конструктор String(): ',typeof toNumber)

// 2й способ
toNumber = +value
console.log('${value},через унарный +: ', toNumber)
console.log('тип данных ${value},через унарный +: ', typeof toNumber)

