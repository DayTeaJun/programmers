function solution(arr, n) {
    return arr.length % 2 === 0 ? arr.map((el, i) => i % 2 === 1 ? el + n : el) : arr.map((el, i) => i % 2 === 0 ? el + n : el)
}