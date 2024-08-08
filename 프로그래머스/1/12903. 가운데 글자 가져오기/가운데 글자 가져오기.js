function solution(s) {
    const result = []
    const arrayS = [...s]
    for (let i = 0; i <= arrayS.length; i++) {
        if (arrayS.length % 2 === 1 && i === Math.floor(arrayS.length / 2)) {
            result.push(arrayS[i])
        } else if (arrayS.length % 2 === 0 && i === Math.floor(arrayS.length / 2)) {
            result.push(arrayS[i - 1])
            result.push(arrayS[i])
        }
    }
    return result.join('')
} 