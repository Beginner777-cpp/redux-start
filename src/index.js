// import { compose, pipe } from 'lodash/fp';
// import { Map } from 'immutable';
// import { produce } from 'immer';
// let input = ' Javascript '

// const trim = str => str.trim();
// const toLowerCase = str => str.toLowerCase();
// const wrap = type => str => `<${type}>${str}</${type}>`
// let res = wrap('div')(toLowerCase(trim(input)))
// let transform = pipe(trim, toLowerCase, wrap('div'))
// console.log(transform(input));


// const obj1 = {
//     name: 'Husan',
//     address: {
//         city: 'Tashkent'
//     }
// }

// const obj2 = {
//     ...obj1,
//     address: {
//         ...obj1.address
//     }
// }
// obj2.address.city = 'Samarkand';


//immutable js start//
// let user = Map({ name: 'Husan' });

// function change(user) {
//     return user.set('isUsed', true)
// }
// user = change(user)
// console.log(user.toJS());

//immutable js end//

//immer js start//

// const book = { name: 'Harry Potter' };

// function publish() {
//     return produce(book, draftBook => {
//         draftBook.ispublished = true
//     })
// }

// const updated = publish();

// console.log(book);
// console.log(updated);

//immer js end//

// import configureStore from './store/bugs/configureStore';
// import {actions} from './store/bugs/reducer'

import configureStore from './store/configureStore';
import { loadBugs, addBug, assignBugToUser, resolveBug } from './store/bugs/reducer';
const store = configureStore();
const unsubscribe = store.subscribe(() => {
    console.log('Store changed', store.getState());
})

// setTimeout(() => {
//     store.dispatch(loadBugs())

// }, 2000);
// store.dispatch(addBug({ description: 'test' }))
// store.dispatch(resolveBug(1))
// assignBugToUser(1, 5);
store.dispatch(loadBugs())


// store.dispatch(resolveBug(2))
// store.dispatch(assignBugToUser(4, 5))
// store.assignBugToUser(0, 1)
// store.dispatch(loadBugs())
// store.dispatch(loadBugs())

// store.dispatch((dispatch, getState) => {
//     dispatch({ type: 'bugsReceived', bugs: [1, 2, 3] });
//     console.log('dispatch store: ', getState());
// })
// store.dispatch({ type: 'error', payload: { message: 'some error occured' } })

// store.dispatch(projectActions.addProject({ name: 'proj1' }))
// store.dispatch(projectActions.addProject({ name: 'proj2' }))
// store.dispatch(bugActions.addBug({ description: 'bug1' }))
// store.dispatch(bugActions.addBug({ description: 'bug2' }))
// store.dispatch(bugActions.addBug({ description: 'bug3' }))
// store.dispatch(userActions.addUser({ name: 'User 1' }))
// store.dispatch(userActions.addUser({ name: 'User 2' }))
// store.dispatch(bugActions.assignBugToUser({ bugId: 1, userId: 1 }))
// store.dispatch(bugActions.assignBugToUser({ bugId: 2, userId: 1 }))
// store.dispatch(bugActions.resolveBug({ id: 2 }))
// unsubscribe()
// store.dispatch(bugActions.removeBug(1))
// console.log('state: ', store.getState());
// const unResolved = bugActions.getUnresolvedBug(store.getState());
// const assignedBugs = bugActions.getAssignedBugs(2)(store.getState());
// console.log('unResolved: ', unResolved);
// console.log('assignedBugs: ', assignedBugs);

