import { combineReducers } from 'redux';
import teamMemberReducer from './TeamMemberReducer';

const rootReducer = combineReducers({
  teamMember: teamMemberReducer
});

export default rootReducer;
