// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function charMap(string: string): {} {
    let strMap = {};
    for (let char of string.replace(/[^\w]/g, '').toLowerCase().split('')) {
        strMap[char] = strMap[char] + 1 || 1;
    }
    return strMap;
}

function cleanString(string: string): string {
    return string.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

// ---- Solution 1 ----
export function anagrams(stringA: string, stringB: string): boolean {
    if (cleanString(stringA) === cleanString(stringB)) {
        return true;
    }
    return false;
}

// ---- Solution 2 ----
// export function anagrams(stringA: string, stringB: string): boolean {
//     let strAMap = charMap(stringA);
//     let strBMap = charMap(stringB);

//     if (Object.keys(strAMap).length === Object.keys(strBMap).length) {
//         for (let key in strAMap) {
//             if ((strAMap[key] && strBMap[key]) && (strAMap[key] === strBMap[key])) {
//                 return true;
//             } else {
//                 return false;
//             }
//         }
//     } else {
//         return false;
//     }

//     return true;
// }

console.log(anagrams('rail safety', 'fairy tales'));
console.log(anagrams('Hi there', 'Bye there'));
