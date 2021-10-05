import {
    createSlice
} from '@reduxjs/toolkit';
import {
    createSelector
} from 'reselect'
let lastId = 0;
const slice = createSlice({
    name: 'bugs',
    initialState: [],
    reducers: {
        addBug: (bugs, action) => {
            bugs.push({
                id: ++lastId,
                description: action.payload.description,
                resolved: false
            })
        },
        removeBug: (bugs, action) => {
            bugs.splice(action.payload.id, 1)
        },
        resolveBug: (bugs, action) => {
            const index = bugs.findIndex(bug => bug.id === action.payload.id)
            bugs[index].resolved = true;
        },
        assignBugToUser: (bugs, action) => {
            const index = bugs.findIndex(bug => bug.id === action.payload.bugId);
            bugs[index].userId = action.payload.userId;
        }
    }
})
export const {
    addBug,
    removeBug,
    resolveBug,
    assignBugToUser
} = slice.actions;

export default slice.reducer;
// export const getUnresolvedBug = state => state.filter(bug => bug.resolved === false)


export const getUnresolvedBug = createSelector(
    state => state.entities.bugs,
    state => state.entities.projects,
    (bugs, projects) => bugs.filter(bug => !bug.resolved))
export const getAssignedBugs = (userId) => {
    return createSelector(
        state => state.entities.bugs,
        state => state.entities.projects,
        (bugs, projects) => {
            console.log('teamMember: ', userId);
            return bugs.filter(bug => bug.userId === userId)
        })
}
// export default createReducer([], {
//     [actions.addBug.type]: (bugs, action) => {
//         bugs.push({
//             id: ++lastId,
//             description: action.payload.description,
//             resolved: false
//         })
//     },
//     [actions.removeBug.type]: (bugs, action) => {
//         bugs.splice(action.payload.id, 1)
//     },
//     [actions.resolveBug.type]: (bugs, action) => {
//         const index = bugs.findIndex(bug => bug.id === action.payload.id)
//         bugs[index].resolved = true;
//     },

// })