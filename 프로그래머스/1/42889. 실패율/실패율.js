function solution(N, stages) {
    const users = stages.length;
    const stage = {};
    
    for (let i=1; i<=N; i++) {
        const filtered = stages.filter(num => num >= i).length;
        const failed = stages.filter(num => num === i).length;
      
        stage[i] = failed / filtered
    }
    
    const answer = Object.keys(stage);
    answer.sort((a, b) => stage[b] - stage[a]);

    return answer.map(Number);
}