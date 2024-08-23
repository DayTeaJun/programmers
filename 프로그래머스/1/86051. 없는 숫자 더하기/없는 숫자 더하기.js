function solution(numbers) {
    let sum = (9 * (9 + 1)) / 2 // 45
    return sum - numbers.reduce((a,c)=> a+c,0)
}