function solution(elements) {
    let answer = new Set();
    let length = elements.length;
    let circle = [...elements, ...elements.slice(0, length-1)];
    for (let i = 0; i < length; i++) {
        let sum = 0;
        for (let j = 0; j < length; j++) {
            sum += circle[i+j];
            answer.add(sum);
        }
    }
    return answer.size;
}