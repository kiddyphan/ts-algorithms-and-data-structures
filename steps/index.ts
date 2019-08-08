// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// ---- Solution 1 ----
// export function steps(n: number) {
//     let char = '';
//     let space = '';
//     for (let i = 1; i <= n; i++) {
//         char += '#';
//         for (let j = 1; j <= n - i; j++) {
//             space += ' ';
//         }
//         console.log(char + space);
//         space = '';
//     }
// }

// ---- Solution 2 ----
// export function steps(n: number) {
//     for (let row = 1; row <= n; row++) {
//         let stair = '';
//         for (let colunm = 1; colunm <= n; colunm++) {
//             if (colunm <= row) {
//                 stair += '#';
//             } else {
//                 stair += ' ';
//             }
//         }
//         console.log(stair);
//     }
// }

// ---- Solution 3 using recursion ----
export function steps(n: number, row: number = 0, stair: string = '') {
    if (n === row) {
        return;
    }

    if (n === stair.length) {
        console.log(stair);
        return steps(n, row + 1);
    }

    stair += stair.length <= row ? '#' : ' ';

    steps(n, row, stair);
}

steps(4);
