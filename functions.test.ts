const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    // CODE HERE

    test('return an array of the same length', () => {
        let myArray = [1,2,3,4,5]
        let result = shuffleArray(myArray)

        expect(result.length).toEqual(myArray.length)
    })

    // test('return array with same initial length', () => {
    //     expect(shuffleArray(['dom', 'ini', 'que'])).toHaveLength(3)
    // });

    // test('return an array with the same items that were sent in', () => {
    //     let arr = [1,2,3,4,5]
    //     let result = shuffleArray(arr)
    //     expect(result).toEqual(expect.arrayContaining(arr))
    // })

    test('should shuffle array of items', () => {
        let myArray = [1,2,3,4,5]
        let result = shuffleArray(myArray)

        expect(result.join()).not.toEqual(myArray.join())
    })

})