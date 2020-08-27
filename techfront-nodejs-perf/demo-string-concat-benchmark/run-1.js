const {Suite} = require('benchmark')

const suite = new Suite()

const text = `
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it to make a type specimen book
`

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