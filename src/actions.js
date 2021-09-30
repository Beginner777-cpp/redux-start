import * as actions from './actionTypes'

export function addBug(bug) {
    return {
        type: actions.ADD_BUG,
        payload: {
            description: bug
        }
    }
}
export function removeBug(bugId) {
    return {
        type: actions.REMOVE_BUG,
        payload: {
            id: bugId
        }
    }
}
export function resolveBug(bugId) {
    return {
        type: actions.RESOLVE_BUG,
        payload: {
            id: bugId
        }
    }
}