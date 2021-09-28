import { compose, pipe } from 'lodash/fp';
import { Map } from 'immutable';
import { produce } from 'immer';
let input = ' Javascript '

const trim = str => str.trim();
const toLowerCase = str => str.toLowerCase();
const wrap = type => str => `<${type}>${str}</${type}>`
// let res = wrap('div')(toLowerCase(trim(input)))
let transform = pipe(trim, toLowerCase, wrap('div'))
// console.log(transform(input));


const obj1 = {
    name: 'Husan',
    address: {
        city: 'Tashkent'
    }
}

const obj2 = {
    ...obj1,
    address: {
        ...obj1.address
    }
}
obj2.address.city = 'Samarkand';


//immutable js start//
let user = Map({ name: 'Husan' });

function change(user) {
    return user.set('isUsed', true)
}
user = change(user)
// console.log(user.toJS());

//immutable js end//

//immer js start//

const book = { name: 'Harry Potter' };

function publish() {
    return produce(book, draftBook => {
        draftBook.ispublished = true
    })
}

const updated = publish();

// console.log(book);
// console.log(updated);

//immer js end//