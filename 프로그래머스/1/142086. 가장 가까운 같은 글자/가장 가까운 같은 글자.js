function solution(s) {
    const result = []
    const newS = []
    for(let i = 0; i < s.length; i++) {
        if(!newS.includes(s[i])) {
            result.push(-1)
            newS.push(s[i])
        }
        else {
            result.push(newS.length - newS.lastIndexOf(s[i]))
            newS.push(s[i])
        }
    }
    return result
}