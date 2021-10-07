import { isEven } from './math'
it("first test", () => {

})
describe('isEven', () => {
    it("isEven", () => {
        const result = isEven(2);
        expect(result).toEqual(true);
    })
    it("isOdd", () => {
        const result = isEven(1);
        expect(result).toEqual(false);
    })
})


