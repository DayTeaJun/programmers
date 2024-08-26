function solution(n) {
    return parseInt((n).toString().split('').map((el) => parseInt(el)).sort((a, b) => b-a).join(""));
}