function solution(s) {
    const alpa = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    let answer = s;
    for (let i = 0; i < alpa.length; i++) {
        let arr = answer.split(alpa[i]);
        answer = arr.join(i);
    }
    return Number(answer);
}