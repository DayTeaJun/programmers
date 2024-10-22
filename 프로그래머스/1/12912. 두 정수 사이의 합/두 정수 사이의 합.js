function solution(a, b) {
    let num = 0;
    
    let aa = a;
    let bb = b;
    if ( b - a <= 0 ) {
        bb = a
        aa = b
    }
    for (let i = aa; i <= bb; i++) {
        num += i
    }
    return num
}