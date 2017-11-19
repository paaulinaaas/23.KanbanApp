import { CREATE_LANE, CREATE_LANES, UPDATE_LANE, DELETE_LANE } from './LaneActions';
import _ from 'lodash';

const initialState = {};

export default function lanes(state = initialState, action) {
  switch (action.type) {
    case CREATE_LANE:
      return { ...state, [action.lane.id]: action.lane };
    case CREATE_LANES:
      return { ...action.lanes }
    case UPDATE_LANE:
      return { ...state, [action.updatedLine.id]: action.updatedLine };
    case DELETE_LANE:
      return _.omit(state, action.id);
    default:
      return state;
  }
}