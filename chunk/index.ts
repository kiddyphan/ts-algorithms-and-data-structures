// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// ---- Solution 1 ----
// export function chunk(array: number[], size: number): any[] {
//     let final = [];
//     let sub = [];
//     let index = 0;
//     for (let i = 0; i <= array.length - 1; i++) {
//         sub.push(array[i]);
//         index++;

//         if (index === size) {
//             final.push(sub);
//             index = 0;
//             sub = [];
//         } else if (index < size && i === array.length - 1) {
//             final.push(sub);
//         }
//     }
//     return final;
// }

// ---- Solution 2 ----
export function chunk(array: number[], size: number): any[] {
    let final = [];
    let index = 0;

    while (index < array.length) {
        final.push(array.slice(index, index + size));
        index += size;
    }
    
    return final;
}

// ---- Solution 3 ----
// export function chunk(array: number[], size: number): any[] {
//     let final = [];
//     let sub = [];
//     let index = 0;
//     let chunk = 1;
//     for (let i = 0; i <= array.length - 1; i++) {
        
//         if (index === (size * chunk)) {
//             final.push(sub);
//             chunk++;
//             sub = [];
//         }

//         let start = size * (chunk - 1);
//         let end = (size * chunk);
//         sub = array.slice(start, end);
        
//         if (i === array.length - 1) {
//             final.push(sub);
//         }
        
//         index++;
//     }
//     return final;
// }

console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
