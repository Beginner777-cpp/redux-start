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
import * as projectActions from './store/projects/reducer';
import * as bugActions from './store/bugs/reducer';

const store = configureStore;
console.log(store);
const unsubscribe = store.subscribe(() => {
    console.log('Store changed', store.getState());
})

store.dispatch(projectActions.addProject({ name: 'proj1' }))
store.dispatch(projectActions.addProject({ name: 'proj2' }))
store.dispatch(bugActions.addBug({ description: 'bug1' }))
store.dispatch(bugActions.addBug({ description: 'bug2' }))
store.dispatch(bugActions.addBug({ description: 'bug3' }))
store.dispatch(bugActions.resolveBug({ id: 1 }))
unsubscribe()
// store.dispatch(bugActions.removeBug(1))
console.log(store.getState());
const unResolved = bugActions.getUnresolvedBug(store.getState());
const unResolved2 = bugActions.getUnresolvedBug(store.getState());
console.log(unResolved == unResolved2);
console.log(unResolved2);