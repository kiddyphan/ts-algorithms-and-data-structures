// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// ---- Solution 1 ----
export function reverseInt(n: number): number {
    let reverse = n.toString().split('').reverse().join('');
    return n < 0 ? -(parseInt(reverse)) : parseInt(reverse);
}

console.log(reverseInt(12345));
console.log(reverseInt(-50));
