function solution(absolutes, signs) {
    return absolutes.map((el,idx) => signs[idx] ? el : el * -1).reduce((a,c) => a + c, 0)
}