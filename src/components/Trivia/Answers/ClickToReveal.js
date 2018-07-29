import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrap = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  align-content: middle;
  justify-content: center;
`;

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

    return <Wrap>{innerStuff}</Wrap>;
  }
}

ClickToReveal.propTypes = {
  content: PropTypes.element.isRequired,
};

export default ClickToReveal;
