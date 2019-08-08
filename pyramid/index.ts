// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// ---- Solution 1 ----
// export function pyramid(n: number) {
//     for (let row = 0; row < n; row++) {
//         let stair = '';
//         let maxColumn = (n * 2) - 1;
//         let midPoint = Math.floor(maxColumn / 2);
//         for (let column = 0; column < maxColumn; column++) {
//             if (midPoint - row <= column && midPoint + row >= column) {
//                 stair += '#';
//             } else {
//                 stair += ' ';
//             }
//         }
//         console.log(stair);
//     }
// }

// ---- Solution 2 using recursion ----
export function pyramid(n: number, row: number = 0, stair: string = '') {
    if (row === n) {
        return;
    }

    let maxStringLength = (n * 2) - 1;
    if (stair.length === maxStringLength) {
        console.log(stair);
        return pyramid(n, row + 1);
    }
    let midPoint = Math.floor(maxStringLength / 2);
    if (midPoint - row <= stair.length && midPoint + row >= stair.length) {
        stair += '#';
    } else {
        stair += ' ';
    }

    pyramid(n, row, stair);
}

pyramid(4);
