import { combineReducers } from 'redux'
import mapReducer from 'services/map/reducer'

export default combineReducers({
  map: mapReducer
})
