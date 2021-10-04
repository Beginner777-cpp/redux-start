import { combineReducers } from "redux";
import bugsReducer from './bugs/reducer';
import projectsReducer from './projects/reducer';
export default combineReducers({
    bugs: bugsReducer,
    projects: projectsReducer
})