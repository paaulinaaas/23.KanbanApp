import React, { Component, PropTypes } from 'react';

export default class Edit extends Component {
render() {
  const {editing, ...props} = this.props;

  return (
    <div {...props}>
      {editing ? this.renderEdit() : this.renderValue()}
    </div>
  );
}
renderEdit = () => {
  return <input type="text"
          autoFocus={true}
          defaultValue={this.props.value}
          onBlur={this.finishEdit}
          onKeyPress={this.checkEnter} />;
};
renderValue = () => {
  const { value, onDelete, onValueClick } = this.props;

  return (
    <div onClick={onValueClick}>
      <span className={styles.value}>{value}</span>
      {onDelete ? this.renderDelete() : null }
    </div>
  );
};
renderDelete = () => {
  return <button className={styles.delete} onClick={this.props.onDelete}>×</button>;
};
checkEnter = (e) => {
  if(e.key === 'Enter') {
    this.finishEdit(e);
  }
};
finishEdit = (e) => {
  const value = e.target.value;

  if(this.props.onEdit) {
    this.props.onEdit(value.trim());
  }
};

Edit.propTypes = {
  value: PropTypes.string,
  onEdit: PropTypes.func,
  onValueClick: PropTypes.func,
  editing: PropTypes.bool
};

export default Edit;