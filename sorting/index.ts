// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

export function bubbleSort(arr: number[]) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < (arr.length - i); j++) {
            if (arr[j] > arr[j + 1]) {
                let a = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = a;
            }
        }
    }
    return arr;
}

export function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let indexOfMin = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[indexOfMin] > arr[j]) {
                indexOfMin = j;
            }
        }

        if (indexOfMin !== i) {
            let a = arr[indexOfMin];
            arr[indexOfMin] = arr[i];
            arr[i] = a;
        }
    }
    return arr;
}

export function mergeSort(arr: number[]) {
    if (arr.length === 1) {
        return arr;
    }

    const center = Math.floor(arr.length / 2);
    const left = arr.slice(0, center);
    const right = arr.slice(center);
    
    return merge(mergeSort(left), mergeSort(right));
}

export function merge(left: number[], right: number[]) {
    const results: number[] = [];

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            results.push(left.shift());
        } else {
            results.push(right.shift());
        }
    }

    return [...results, ...left, ...right]
}
