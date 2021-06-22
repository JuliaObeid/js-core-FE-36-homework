// === TO STRING ===

// ЧИСЛО К СТРОКЕ
let value = 0;

// 1й способ
let toString = String(value)
console.log('${value},через конструктор String(): ', toString)
console.log('тип данных ${value},через конструктор String(): ',typeof toString)

// 2й способ
toString = value + ""
console.log('${value},через конкатенацию: ', toString)
console.log('тип данных ${value},через конкатенацию: ', typeof toString)

value = 1;

// 1й способ
toString = String(value)
console.log('${value},через конструктор String(): ', toString)
console.log('тип данных ${value},через конструктор String(): ',typeof toString)

// 2й способ
toString = value + ""
console.log('${value},через конкатенацию: ', toString)
console.log('тип данных ${value},через конкатенацию: ', typeof toString)

value = Infinity;

// 1й способ
toString = String(value)
console.log('${value},через конструктор String(): ', toString)
console.log('тип данных ${value},через конструктор String(): ',typeof toString)

// 2й способ
toString = value + ""
console.log('${value},через конкатенацию: ', toString)
console.log('тип данных ${value},через конкатенацию: ', typeof toString)

value = NaN

// 1й способ
toString = String(value)
console.log('${value},через конструктор String(): ', toString)
console.log('тип данных ${value},через конструктор String(): ',typeof toString)

// 2й способ
toString = value + ""
console.log('${value},через конкатенацию: ', toString)
console.log('тип данных ${value},через конкатенацию: ', typeof toString)

// БУЛЕВОЕ (ЛОГИЧЕСКОЕ) true к строке
value = true

// 1й способ
toString = String(value)
console.log('${value},через конструктор String(): ', toString)
console.log('тип данных ${value},через конструктор String(): ',typeof toString)

// 2й способ
toString = value + ""
console.log('${value},через конкатенацию: ', toString)
console.log('тип данных ${value},через конкатенацию: ', typeof toString)


// БУЛЕВОЕ (ЛОГИЧЕСКОЕ) false к строке
value = false

// 1й способ
toString = String(value)
console.log('${value},через конструктор String(): ', toString)
console.log('тип данных ${value},через конструктор String(): ',typeof toString)

// 2й способ
toString = value + ""
console.log('${value},через конкатенацию: ', toString)
console.log('тип данных ${value},через конкатенацию: ', typeof toString)



// undefined к строке
value = undefined

// 1й способ
toString = String(value)
console.log('${value},через конструктор String(): ', toString)
console.log('тип данных ${value},через конструктор String(): ',typeof toString)

// 2й способ
toString = value + ""
console.log('${value},через конкатенацию: ', toString)
console.log('тип данных ${value},через конкатенацию: ', typeof toString)


// null к строке
value = null

// 1й способ
toString = String(value)
console.log('${value},через конструктор String(): ', toString)
console.log('тип данных ${value},через конструктор String(): ',typeof toString)

// 2й способ
toString = value + ""
console.log('${value},через конкатенацию: ', toString)
console.log('тип данных ${value},через конкатенацию: ', typeof toString)
