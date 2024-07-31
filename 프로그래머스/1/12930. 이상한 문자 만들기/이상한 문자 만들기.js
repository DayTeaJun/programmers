function solution(s) {
    return s.split(' ').map((v) => [...v].map((el, i) => i % 2 === 0 ? el.toUpperCase() : el.toLowerCase())).join(' ').replaceAll(',','')
}