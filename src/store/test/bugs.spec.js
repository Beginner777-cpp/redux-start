import { addBug, bugAdded } from '../bugs/reducer';
import { apiCallBegan } from '../api'
describe('bugsSlice', () => {
    describe('actionCreators', () => {
        it('addBug', () => {
            const bug = { description: 'a' }
            const expected = addBug(bug);
            const result = {
                type: apiCallBegan.type,
                payload: {
                    url: '/bugs',
                    method: 'post',
                    data: bug,
                    onSuccess: bugAdded.type
                },
            };

            expect(result).toEqual(expected)
        })
    })
})