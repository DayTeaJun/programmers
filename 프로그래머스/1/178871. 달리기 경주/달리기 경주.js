function solution(players, callings) {
    let playersIdx = {};
    
    players.forEach((name, index) => {
        playersIdx[name] = index;
    });
    
    for(let i=0; i< callings.length; i++){
        let idx = playersIdx[callings[i]];
        let chang = players[idx-1];
        
        [players[idx], players[idx-1]] = [players[idx-1], players[idx]];
        
        playersIdx[callings[i]] = idx - 1;
        playersIdx[chang] = idx;
    }

    return players;
}