// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function charMap(str: string) {
    let charMap = {};
    for (let char of str.replace(/[^\w]/g, '').toLowerCase().split('')) {
        charMap[char] = charMap[char] + 1 || 1;
    }
    return charMap;
}

// ---- Solution 1 ----
export function vowels(str: string): number {
    let matches = str.match(/[aeiou]/gi);
    return matches === null ? 0 : matches.length;
}

// ---- Solution 2 ----
// export function vowels(str: string): number {
//     let vowels: string[] = ['a', 'e', 'i', 'o', 'u'];
//     let counter = 0;
//     for (let char of str.toLowerCase().split('')) {
//         if (vowels.includes(char)) {
//             counter++;
//         }
//     }
//     return counter;
// }

// ---- Solution 3 ----
// export function vowels(str: string): number {
//     let strMap = charMap(str);
//     let vowels: string[] = ['a', 'e', 'i', 'o', 'u'];

//     let vowelMapArr = [];
//     for (let key in strMap) {
//         if (vowels.indexOf(key) > -1) {
//             vowelMapArr.push(strMap[key]);
//         }
//     }

//     return vowelMapArr.reduce((sum, value) => {
//         return sum + value;
//     }, 0);
// }

console.log(vowels('Hi There!'));
console.log(vowels('Why do you ask?'));
console.log(vowels('Why?'));
