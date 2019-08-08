// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// ---- Solution 1 ----
// export function reverse(str: string): string {
//     let reverse = '';

//     for (let i = str.length - 1; i >= 0; i--) {
//         reverse += str[i];
//     }

//     return reverse;
// }

// ---- Solution 2 ----
// export function reverse(str: string): string {
//     let reverse =  str.split('').reverse().join('');
//     return reverse;
// }

// ---- Solution 3 ----
export function reverse(str: string): string {
    let reverse = str.split('').reduce((reversed, character) => character + reversed, '');
    return reverse;
}

console.log(reverse('abcd'));
