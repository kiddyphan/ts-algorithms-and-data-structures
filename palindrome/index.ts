// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// ---- Solution 1 ----
// export function palindrome(str: string): boolean {
//     let reversedString = str.split('').reduce((reversed, char) => char + reversed, '');
//     return reversedString === str;
// }

// ---- Solution 2 ----
export function palindrome(str: string): boolean {
    return str.split('').every((char, i) => {
        return char === str[str.length - i - 1];
    });
}

console.log(palindrome('abba'));
console.log(palindrome('abcdefg'));
