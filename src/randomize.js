const randomize = (a) => { // Fisher–Yates
    let b = [...a]
    for(let i=b.length-1; i > 0; i--) {
        const j = Math.floor(Math.random()*i);
        [b[i], b[j]] = [b[j], b[i]]
    }
    return b
}
export default randomize