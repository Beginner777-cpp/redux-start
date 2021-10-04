import { createSlice } from '@reduxjs/toolkit'
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
    }
})
export const { addBug, removeBug, resolveBug } = slice.actions;

export default slice.reducer;
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


