import {
    createSlice
} from '@reduxjs/toolkit';
import {
    createSelector
} from 'reselect'
import { apiCallBegan } from '../api';
let lastId = 0;
const slice = createSlice({
    name: 'bugs',
    initialState: {
        list: [],
        loading: false,
        lastFetch: null
    },
    reducers: {
        bugsReceived: (bugs, action) => {
            bugs.list = action.payload;
        },
        addBug: (bugs, action) => {
            bugs.list.push({
                id: ++lastId,
                description: action.payload.description,
                resolved: false
            })
        },
        removeBug: (bugs, action) => {
            bugs.list.splice(action.payload.id, 1)
        },
        resolveBug: (bugs, action) => {
            const index = bugs.list.findIndex(bug => bug.id === action.payload.id)
            bugs.list[index].resolved = true;
        },
        assignBugToUser: (bugs, action) => {
            const index = bugs.list.findIndex(bug => bug.id === action.payload.bugId);
            bugs.list[index].userId = action.payload.userId;
        }
    }
})
export const {
    addBug,
    removeBug,
    resolveBug,
    assignBugToUser,
    bugsReceived
} = slice.actions;

export default slice.reducer;
// export const getUnresolvedBug = state => state.filter(bug => bug.resolved === false)


export const getUnresolvedBug = createSelector(
    state => state.entities.bugs,
    state => state.entities.projects,
    (bugs, projects) => bugs.list.filter(bug => !bug.resolved))
export const getAssignedBugs = (userId) => {
    return createSelector(
        state => state.entities.bugs,
        state => state.entities.projects,
        (bugs, projects) => {
            return bugs.list.filter(bug => bug.userId === userId)
        })
}
const url = '/bugs'
export const loadBugs = () => apiCallBegan({
    url,
    onSuccess: bugsReceived.type,
})
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