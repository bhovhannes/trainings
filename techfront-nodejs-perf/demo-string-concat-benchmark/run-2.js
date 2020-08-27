const {Suite} = require('benchmark')

const suite = new Suite()

const text = `Lorem`

const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']

suite.add('s = s + ch', () => {
    let s = text
    for (let ch of letters) {
        s = s + ch
    }
})

suite.add('s += ch', () => {
    let s = text
    for (let ch of letters) {
        s += ch
    }
})

suite.on('cycle', e => console.log(e.target.toString()))

suite.run()