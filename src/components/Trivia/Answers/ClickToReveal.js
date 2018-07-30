import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

class ClickToReveal extends React.Component {
  constructor() {
    super();

    this.state = {
      isContentVisible: false,
    };
  }

  revealContent = () => {
    this.setState({ isContentVisible: true });
  };

  render() {
    const { content } = this.props;
    const { isContentVisible } = this.state;
    let innerStuff = null;

    if (isContentVisible) {
      innerStuff = <div>{content}</div>;
    } else {
      innerStuff = (
        <button
          onClick={this.revealContent}
          type="button"
          className="reveal-btn"
        >
          Reveal
        </button>
      );
    }

    return <Fragment>{innerStuff}</Fragment>;
  }
}

ClickToReveal.propTypes = {
  content: PropTypes.string.isRequired,
};

export default ClickToReveal;
