/*
  Напишите функцию, которая параметрами принимает 2 числа и возвращает их сумму
*/
export function sum(a, b) {
    return a + b;
}

/*
  Напишите функцию, которая возвращает сумму всех чисел, что передаются параметрами
*/
export function sumAll() {
    return [].reduce.call(arguments, (acc, el) => {
        console.log(typeof el);
        if (typeof el === 'number' && !Number.isNaN(el)) {
            return acc + el;
        }
        return acc;
    }, 0);
}

/*
  Напишите функцию, которая возвращает число x в степень n
*/
export function pow(x, n) {
    if (n === 0) return 1;
    let res = 1;
    while (n > 0) {
        res *= x;
        n--;
    }
    return res;
}

/*
  Напишите функцию, которая возвращает рандомное целое число от from до to
*/
export function random(from, to) {
    return Math.floor(from + Math.random() * (to + 1 - from));
}

export default {
    sum,
    sumAll,
    pow,
    random,
};
