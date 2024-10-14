function solution(num_str) {
    return num_str.split('').map((el) => parseInt(el)).reduce((a,c) => a + c,0)
}