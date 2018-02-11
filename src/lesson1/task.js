/*
  Напишите функцию, которая принимает 1 аргумент и возварщает его тип
*/
function getDataType(variable) {
  return typeof variable;
}

/*
  Напишите функцию, которая принимает 1 аргумент и возвращает:
  'primitive' если тип данных относится к примивным
  'primitive-special' если тип данных специальный
  'object' - если простой обьект
  'object-array' - если массив
  'object-function' - если функция
*/
function getDataTypePseudoName(variable) {
  if (variable === null || variable === undefined) return 'primitive-special';
  if (typeof variable === 'number' || typeof variable === 'string' || typeof variable === 'boolean') return 'primitive';
  if (typeof variable === 'function') return 'object-function';
  if (Array.isArray(variable)) return 'object-array';
  return 'object';
}


/*
  Напишите функцию, которая принимает 2 аргумента,
  и возврвщает 1 если их значения и их типы равны,
  0 если равны только значения
  и -1 в другом случае
*/
function compareByType(a, b) {
    if (a == b) {
      if (typeof a === typeof b) return 1;
      return 0;
    }
    return -1;
}

// Numbers

/*
  Напишите функцию, которая принимает 1 аргумент,
  и в случае если аргумент имеет числовой тип увеличивает его на 1
  и возврвщвет результат,
  в любом другом случае возврвщвет -1
*/
function increase(value) {
  if (typeof value === 'number') return ++value;
  return-1;
}

/*
  Напишите функцию, которая принимает 1 аргумент(число),
  и в случае если аргумент не Infinity или NaN возвращает строку 'safe' иначе 'danger'
*/
function testForSafeNumber(value) {
  if (!Number.isFinite(value) || Number.isNaN(value)) return 'danger';
  return 'safe';
}



// Strings

/*
  Напишите функцию, которая принимает 1 аргумент (строку),
  и возвращает массив из елементов строки разделенных по пробелу ' '
*/
function stringToArray(str) {
  return str.split(' ');
}


/*
  Напишите функцию, которая принимает 1 аргумент (строку),
  и возвращает часть этой строки до первой запятой
*/
function getStringPart(str) {
  return str.slice(0, str.indexOf(','));
}

/*
  Напишите функцию, которая принимает 2 аргумента (строку и симовл),
  и возвращает порядковый номер симовола в строе если символ встречается в строке 1 раз,
  false в противоположном случае
*/
function isSingleSymbolMatch(str, symbol) {
  const index = str.indexOf(symbol);
  if (~index && !~str.slice(index + 1).indexOf(symbol)) return index;
  return false;
}

/*
  Напишите функцию, которая принимает 2 аргумента,
  массив в разделитель[опционально],
  и возвращает строку ввиде элементов массива c разделителями если разделитель задан
  или строку разделенную "-" если не задан
*/
function join(array, separator) {
  if (separator) return array.join(separator);
  return array.join('-');
}


/*
  Напишите функцию, которая принимает 2 массива,
  и возвращает один состоящий из элементов перового и второго (последовательно сначала первый потом второй)
*/
function glue(arrA, arrB) {
  return [...arrA, ...arrB];
}


/*
  Напишите функцию, которая принимает 1 массив,
  и возвращает другой массив отсортированный от большего к меньшему
*/
function order(arr) {
  return arr.sort((a,b) => a < b);
}


/*
  Напишите функцию, которая принимает 1 массив,
  и возвращает другой без чисел которые меньше 0
*/
function removeNegative(arr) {
  return arr.filter(x => x >= 0);
}

/*
  Напишите функцию, которая принимает 2 числовых массива,
  и возвращает новый массив, состоящий из элементов первого но без элементов
  которые присутствуют во втром
  [1,2,3], [1, 3] => [2]
*/
function without(arrA, arrB) {
  for (let i of arrB) {
      if (arrA.includes(i)) {
          arrA.splice(arrA.indexOf(i), 1);
      }
  }
  return arrA;
}

/*
  Напишите функцию, которая принимает строку,
  содержащую выражение математической операции с двумя
  операндами (поддерживаются 4 базовых оператора + - / *).
  Функция вычисляет выражение и возвращает число либо NaN.
  '12/6' => 2
*/
function calcExpression(expression) {
  try {
      return eval(expression);
  } catch (e) {
    return Number.NaN;
  }
}

/*
  Напишите функцию, которая принимает строку,
  содержащую выражение логической операции с двумя
  операндами (поддерживаются 5 базовых операторов > < = >= <=).
  Функция вычисляет выражение и возвращает true / false,
  либо бросает exception в случае ошибки.
  '100>5' => true
*/
function calcComparison(expression) {
    return new Function(`return ${expression}`)();
}

/*
  Напишите функцию, которая принимает обьект и строку,
  содержащую выражение доступа к свойствам обьекта.
  Функция возвращает значение запрашиваемого свойства либо
  бросает exception в случае ошибки.
  { a: { x: 2 }, b: 5 }, '.a.x' => 2
  { a: 1, b: 2 }, '.c' => exception
*/
function evalKey(obj, expression) {
    if (!expression.startsWith('.')) throw new Error();
    const props = expression.split('.').filter(x => x);
    for (let k of props) {
        obj = obj[k];
        if (obj === undefined) throw new Error();
    }
    return obj;
}

export default {
  getDataType,
  getDataTypePseudoName,
  compareByType,
  increase,
  testForSafeNumber,
  stringToArray,
  getStringPart,
  isSingleSymbolMatch,
  join,
  glue,
  order,
  removeNegative,
  without,
  calcExpression,
  calcComparison,
  evalKey
};
