import React from 'react';

class Panel extends React.Component {

  render() {
    return (
      <div className="panel uk-text-center uk-display-block">
        <span className={`icon light-grey icon-${this.props.icon}`}></span>
        <h3 className="light-grey">{this.props.text}</h3>
      </div>
    );
  }
}

Panel.propTypes = {
  text: React.PropTypes.string.isRequired
};
export default Panel;
