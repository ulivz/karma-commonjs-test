var isFilePath = require('../src/index.js');

describe('core.js: ', function () {
    it('[C:\\Users\\] is a file path - false', function () {
        expect(isFilePath('C:\\Users\\')).toBe(false)

    })
})

describe('core.js: ', function () {
    it('[C:\\Users\\test.js] is a file path - true', function () {
        expect(isFilePath('C:\\Users\\test.js')).toBe(true)

    })
})