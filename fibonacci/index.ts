// --- Directions
// Write a fibonacci with the given number
// A tiling with squares whose side lengths are successive Fibonacci numbers
// In mathematics, the Fibonacci numbers are the numbers in the following integer sequence, called the Fibonacci sequence, and characterized by the fact that every number after the first two is the sum of the two preceding ones:
// --- Example
//   fibonacci(13);
//   0 1 1 2 3 5 8 13 21 34 55 89 144

//   fibonacci(9);
//   0 1 1 2 3 5 8 13 21

// ---- Solution 1 with recursion ----
export function fibonacci(n: number, arrNumber: number[] = [], current: number = 0): void {
    if (arrNumber.length >= n) {
        // console.log(arrNumber.join(' '));
        return;
    } else {
        console.log(current);
        arrNumber.push(current);
        let next = (arrNumber[arrNumber.length - 1] + arrNumber[arrNumber.length - 2]) || 1;
        fibonacci(n, arrNumber, next);
    }
}

// ---- Solution 2 ----
// export function fibonacci(n: number): void {
//     let arrNumber: number[] = [0, 1];
//     for (let i = 0; i < n; i++) {
//         if (i >= 2) arrNumber[i] = arrNumber[i - 1] + arrNumber[i - 2];
//         console.log(arrNumber[i]);
//     }
//     // console.log(arrNumber.join(' '));
// }

fibonacci(9);

