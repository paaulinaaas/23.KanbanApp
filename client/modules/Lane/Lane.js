import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Import Style
import styles from './Lane.css';

class Lane extends Component {
  render() {
    const { lane, laneNotes, ...props } = this.props;
    const laneId = lane.id;

    return (
      <div {...props}>
        <div
          className={styles.LaneHeader}
          onClick={() => props.updateLane({ id: laneId, editing: true })}
        >
          <div className={styles.LaneAddNote}>
            <button onClick={props.addNote.bind(this, laneId)}>+</button>
          </div>
          <Edit className={styles.LaneName} editing={lane.editing}
            value={lane.name}
            onEdit={name => props.updateLane({id: laneId, name, editing: false})}
          />
          <div className={styles.LaneDelete}>
            <button onClick={this.props.deleteLane.bind(this, lane)}>x</button>
          </div>
        </div>
        <NotesContainer
          notes={laneNotes}
        />
      </div>
    );
  }
}

Lane.propTypes = {
  lane: PropTypes.object,
  laneNotes: PropTypes.array
};

export default Lane;