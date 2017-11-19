import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Lanes from '../Lane/Lanes';
import { createLane } from '../Lane/LaneActions';
import { bindActionCreators } from 'redux';

// Import Style
import styles from './Kanban.css';

class Kanban extends React.Component {
  render() {
    const { lanes } = this.props;

    return (
      <div>
        <button className={styles.AddLane}>Add lane</button>
        <Lanes lanes={lanes} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  lanes: Object.values(state.lanes)
});

const mapDispatchToProps = {
  createLane
}

connect(mapStateToProps, mapDispatchToProps)(Kanban);

const { lanes, createLane } = this.props;

<button className="add-lane"
  onClick={() => createLane({
    name: 'New lane'
  })}
>+</button>

export default connect(mapStateToProps)(Kanban);