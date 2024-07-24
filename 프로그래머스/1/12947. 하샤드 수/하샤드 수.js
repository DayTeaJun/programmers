function solution(x) {
    return x % x.toString().split('').map((el) => parseInt(el)).reduce((a,c)=> (a+c),0) === 0 ? true : false
}