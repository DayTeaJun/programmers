function solution(num) {
    let result = 0
    while (num !== 1) {
        if (num % 2 === 0) {
            num /= 2
        } else if (num % 2 === 1) {
            num = (num * 3) + 1
        }
        result += 1
    }
    if (result >= 500) {
        return -1
    } else {
         return result
    }
}