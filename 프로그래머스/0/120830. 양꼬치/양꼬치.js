function solution(n, k) {
    let sum = 0
    for (let i = 1; i <= n; i++){
        if (i % 10 === 0){
            sum -= 2000
        }
        sum += 12000
    }
    
    for (let j = 0; j < k; j++){
            sum += 2000
    }
    
    return sum
}