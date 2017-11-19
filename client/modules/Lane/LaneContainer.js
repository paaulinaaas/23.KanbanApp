import { connect } from 'react-redux';
import Lane from './Lane';
import * as laneActions from './LaneActions';
import { createNote } from '../Note/NoteActions';

const mapStateToProps = (state, ownProps) => {
  return {
    laneNotes: ownProps.lane.notes,
  };
};

const mapDispatchToProps = {
  ...laneActions,
  createNote
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lane);