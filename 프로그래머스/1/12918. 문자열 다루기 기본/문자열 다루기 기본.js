function solution(s) {
    return [...s].map((v) => parseInt(v)).join('').includes('NaN') ? false : (s.length === 4 || s.length === 6) && !([...s].map((v) => parseInt(v)).join('').includes('NaN')) ? true : false
}