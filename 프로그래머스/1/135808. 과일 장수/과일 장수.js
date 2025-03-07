function solution(k, m, score) {
    let answer = 0;

    score.sort((a, b) => b - a);

    for (let i = 0; i < score.length; i += m) {
        if (i + m > score.length) break;

        const boxPrice = score[i + m - 1] * m;
        answer += boxPrice;
    }

    return answer;
}