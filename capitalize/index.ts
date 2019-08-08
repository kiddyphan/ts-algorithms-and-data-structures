// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// ---- Solution 1 ----
// export function capitalize(str: string): string {
//     let strArr = str.split(' ');

//     return strArr.map((char, i) => {
//         let newChar = char[0].toUpperCase() + char.slice(1)
//         return newChar;
//     }).join(' ');
// }

// ---- Solution 2 ----
export function capitalize(str: string): string {
    let newStr = str[0].toUpperCase();
    for (let i = 1; i < str.length; i++) {
        newStr += str[i];
        if ((str[i] === ' ' && str[i + 1])) {
            newStr += str[i + 1].toUpperCase();
            i++;
        }
    }
    return newStr;
}

console.log(capitalize('a short sentence'));
console.log(capitalize('look, it is working!'));