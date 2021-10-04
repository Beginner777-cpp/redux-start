import { createAction } from '@reduxjs/toolkit'
export const addBug = createAction('ADD_BUG');
export const removeBug = createAction('REMOVE_BUG');
export const resolveBug = createAction('RESOLVE_BUG');

