// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function memoize(fn: Function): (...args) => any {
    const cache = {};
    return function (...args) {
        if (cache[args.join('-')]) {
            return cache[args.join('-')];
        } else {
            const result = fn.apply(this, args);
            cache[args.join('-')] = result;
            return result;
        }
    }
}

// ---- Solution 1 with recursion ----
function slowFib(n: number): number {
    if (n < 2) {
        return n;
    }
    return fib(n - 1) + fib(n - 2);
}
export const fib = memoize(slowFib);


// ---- Solution 2 ----
// export function fib(n: number): number {
//     let arrFib: number[] = [0, 1];
//     for (let i = 2; i <= n; i++) {
//         arrFib.push(arrFib[i - 1] + arrFib[i - 2]);
//     }

//     return arrFib[arrFib.length - 1];
// }

console.log(fib(4));
