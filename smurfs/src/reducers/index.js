/*
  Be sure to import in all of the action types from `../actions`
*/
import { FETCHING_SMURFS, FETCHING_SMURFS_SUCCESS, FETCHING_SMURFS_FAILURE, 
  ADD_SMURF, ADD_SMURF_SUCCESS, ADD_SMURF_FAILURE} from '../actions';


 //Your initial/default state for this project could *Although does not have to* look a lot like this
 const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   //updatingSmurf: false
   //deletingSmurf: false
   error: null
 };

 const rootReducer = (state = initialState, action) => {
   switch(action.type) {
    case FETCHING_SMURFS:
      return {...state, fetchingSmurfs: true};
    case FETCHING_SMURFS_SUCCESS:
      return {...state, 
        fetchingSmurfs: false, 
        smurfs: [...state.smurfs, ...action.payload]};
    case FETCHING_SMURFS_FAILURE:
     return {...state, 
        fetchingSmurfs: false, 
        error: action.payload};
    case ADD_SMURF:
      return {...state, 
        addingSmurf: true};
    case ADD_SMURF_SUCCESS:
      return {...state,
        addingSmurf: false,
        smurfs: action.payload};
    case ADD_SMURF_FAILURE:
      return {...state, 
        addingSmurf: false, 
        error: action.payload};
    default: 
      return state;
   }
 };
 export default rootReducer;

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
