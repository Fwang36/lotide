const tail = require('../tail')
const assertEqual = require('../assertEqual')

const resultTest = tail([0,2,10]);
assertEqual(resultTest[1], 10)