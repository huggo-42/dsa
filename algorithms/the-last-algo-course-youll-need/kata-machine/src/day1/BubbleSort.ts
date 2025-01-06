export default function bubble_sort(arr: number[]): void {
    for (let j = arr.length; j > 1; j--) {
        for (let i = 0; i < j; i++) {
            if (arr[i] > arr[i + 1]) {
                const tmp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = tmp;
            }
        }
    }
}
