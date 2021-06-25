// === TO BOOLEAN ===

// ЛЮБОЕ СТРОЧНОЕ ЗНАЧЕНИЕ К BOOLEAN
let value ="Bla bla bla";

// 1й способ
let toBoolean = Boolean(value)
console.log('${value},через конструктор Boolean(): ', toBoolean)
console.log('тип данных ${value},через конструктор Boolean(): ',typeof toBoolean)

// 2й способ
toBoolean = !!value
console.log('${value},через !!: ', toBoolean)
console.log('тип данных ${value},через !!: ', typeof toBoolean)


// ЛЮБОЕ СТРОЧНОЕ ЧИСЛО К BOOLEAN
value ="123";

// 1й способ
toBoolean = Boolean(value)
console.log('${value},через конструктор Boolean(): ', toBoolean)
console.log('тип данных ${value},через конструктор Boolean(): ',typeof toBoolean)

// 2й способ
toBoolean = !!value
console.log('${value},через !!: ', toBoolean)
console.log('тип данных ${value},через !!: ', typeof toBoolean)


// ПУСТАЯ СТРОКА К BOOLEAN
value =  "";

// 1й способ
toBoolean = Boolean(value)
console.log('пустая строка ${value},через конструктор Boolean(): ', toBoolean)
console.log('тип данных пустой строки ${value},через конструктор Boolean(): ',typeof toBoolean)

// 2й способ
toBoolean = !!value
console.log('${value},через !!: ', toBoolean)
console.log('тип данных пустой строки ${value},через !!: ', typeof toBoolean)


// СТРОКА С ПРОБЕЛОМ К BOOLEAN
value = " ";

// 1й способ
toBoolean = Boolean(value)
console.log('строка С ПРОБЕЛОМ ${value},через конструктор Boolean(): ', toBoolean)
console.log('тип данных строки с пробелом ${value},через конструктор Boolean(): ',typeof toBoolean)

// 2й способ
toBoolean = !!value
console.log('строка с пробелом ${value},через !!: ', toBoolean)
console.log('тип данных строки с пробелом ${value},через !!: ', typeof toBoolean);


// ЧИСЛО К BOOLEAN
value = 0;

// 1й способ
toBoolean = Boolean(value)
console.log('${value},через конструктор Boolean(): ', toBoolean)
console.log('тип данных ${value},через конструктор Boolean(): ',typeof toBoolean)

// 2й способ
toBoolean = !!value
console.log('${value},через !!: ', toBoolean)
console.log('тип данных ${value},через !!: ', typeof toBoolean);


// ЧИСЛО К BOOLEAN
value = 1;

// 1й способ
toBoolean = Boolean(value)
console.log('${value},через конструктор Boolean(): ', toBoolean)
console.log('тип данных ${value},через конструктор Boolean(): ',typeof toBoolean)

// 2й способ
toBoolean = !!value
console.log('${value},через !!: ', toBoolean)
console.log('тип данных ${value},через !!: ', typeof toBoolean);


// UNDEFINED К BOOLEAN
value = undefined;

// 1й способ
toBoolean = Boolean(value)
console.log('${value},через конструктор Boolean(): ', toBoolean)
console.log('тип данных ${value},через конструктор Boolean(): ',typeof toBoolean)

// 2й способ
toBoolean = !!value
console.log('${value},через !!: ', toBoolean)
console.log('тип данных ${value},через !!: ', typeof toBoolean);


// NULL К BOOLEAN
value = null;

// 1й способ
toBoolean = Boolean(value)
console.log('${value},через конструктор Boolean(): ', toBoolean)
console.log('тип данных ${value},через конструктор Boolean(): ',typeof toBoolean)

// 2й способ
toBoolean = !!value
console.log('${value},через !!: ', toBoolean)
console.log('тип данных ${value},через !!: ', typeof toBoolean);


// NaN К BOOLEAN
value = NaN;

// 1й способ
toBoolean = Boolean(value)
console.log('${value},через конструктор Boolean(): ', toBoolean)
console.log('тип данных ${value},через конструктор Boolean(): ',typeof toBoolean)

// 2й способ
toBoolean = !!value
console.log('${value},через !!: ', toBoolean)
console.log('тип данных ${value},через !!: ', typeof toBoolean);



// Infinity К BOOLEAN
value = Infinity;

// 1й способ
toBoolean = Boolean(value)
console.log('${value},через конструктор Boolean(): ', toBoolean)
console.log('тип данных ${value},через конструктор Boolean(): ',typeof toBoolean)

// 2й способ
toBoolean = !!value
console.log('${value},через !!: ', toBoolean)
console.log('тип данных ${value},через !!: ', typeof toBoolean);

