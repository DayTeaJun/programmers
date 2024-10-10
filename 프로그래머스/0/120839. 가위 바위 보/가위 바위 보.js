function solution(rsp) {
    let rsp1 = rsp.split('');
    const result = [];
    rsp1.map((item) => {
        item === '2' ? result.push(0) : item === '0' ? result.push(5) : result.push(2)
    })
    return result.join('')
}