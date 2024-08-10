function solution(name, yearning, photo) {
    let obj = {}
    const arr = []
    
    for(let i = 0; i < name.length; i++) {
        obj[name[i]] = yearning[i]
    }
    for(let i = 0; i < photo.length; i++) {
        let a = 0
        for(let j = 0; j < photo[i].length; j++) {
            if(Object.keys(obj).includes(photo[i][j])) {
                a += obj[photo[i][j]]
            }
        }
        arr.push(a)
    }
    return arr
}