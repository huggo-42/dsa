// reference: https://en.wikipedia.org/wiki/Binary_search
export default function bs_list(haystack: number[], needle: number): boolean {
    let l = 0;
    let r = haystack.length - 1;
    while (l <= r) {
        const m = Math.floor((l + r) / 2);
        const v = haystack[m];
        if (v < needle) {
            l = m + 1;
        } else if (v > needle) {
            r = m - 1;
        } else {
            return true;
        }
    };
    return false;
}
