// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// ---- Solution 1 ----
export function maxChar(str: string): string {
    let obj = {};
    for (let char of str.split('')) {
        obj[char] = obj[char] + 1 || 1;
    }
    const values: number[] = Object.keys(obj).map(key => obj[key]);

    return Object.keys(obj).filter((key, i) => i === values.indexOf(Math.max(...values)))[0];
}

console.log(maxChar('abcccccccd'));
console.log(maxChar('apple 1231111'));
