import {
    createSlice
} from '@reduxjs/toolkit';
import {
    createSelector
} from 'reselect'
import moment from 'moment';
import { apiCallBegan } from '../api';
let lastId = 0;
const slice = createSlice({
    name: 'bugs',
    initialState: {
        list: [],
        loading: false,
        lastFetch: null,
    },
    reducers: {
        bugsRequested: (bugs, action) => {
            bugs.loading = true;
        },
        bugsReceived: (bugs, action) => {
            bugs.list = action.payload;
            bugs.loading = false;
            bugs.lastFetch = Date.now();
        },
        bugsRequestFailed: (bugs, action) => {
            bugs.loading = false;
        },
        bugAdded: (bugs, action) => {
            bugs.list.push(action.payload)
        },
        bugRemoved: (bugs, action) => {
            bugs.list.splice(action.payload.id, 1)
        },
        bugResolved: (bugs, action) => {
            const index = bugs.list.findIndex(bug => bug.id === action.payload.id)
            bugs.list[index].resolved = true;
        },
        bugAssignedToUser: (bugs, action) => {
            const index = bugs.list.findIndex(bug => bug.id === action.payload.id);
            bugs.list[index].userId = action.payload.userId;
        }
    }
})
const {
    bugAdded,
    bugRemoved,
    bugResolved,
    bugAssignedToUser,
    bugsReceived,
    bugsRequested,
    bugsRequestFailed
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
const url = '/bugs';
export const addBug = (bug) => apiCallBegan({
    url,
    method: 'post',
    data: bug,
    onSuccess: bugAdded.type
})
export const assignBugToUser = (bugId, userId) => apiCallBegan({
    url: url + '/' + bugId,
    method: 'patch',
    data: { userId: userId },
    onSuccess: bugAssignedToUser.type
})
export const resolveBug = (bugId) => apiCallBegan({
    url: url + '/' + bugId,
    method: 'patch',
    data: { resolved: true },
    onSuccess: bugResolved.type
})
export const loadBugs = () => (dispatch, getState) => {
    const { lastFetch } = getState().entities.bugs;
    const diffMinute = moment().diff(moment(lastFetch), 'minutes');
    console.log('bugs loaded ', diffMinute);
    if (diffMinute < 10) {
        return;
    }
    dispatch(apiCallBegan({
        url,
        onStart: bugsRequested.type,
        onSuccess: bugsReceived.type,
        onError: bugsRequestFailed.type,
    }))
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