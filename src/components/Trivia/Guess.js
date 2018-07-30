import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrap = styled.form`
  display: flex;
`;

const InputWrap = styled.div`
  width: 70%;
`;

const ButtonWrap = styled.div`
  flex-grow: 1;
`;

class Guess extends React.Component {
  constructor(props) {
    super();

    const { lastNames } = props;
    const isLastNameValid = lastNames.length === 0;

    this.state = {
      isLastNameValid,
    };
  }

  handleChange = (e) => {
    const { onChange, lastNames } = this.props;
    onChange(e);

    if (lastNames.length > 0) {
      const { value } = e.target;
      this.validateInput(value);
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { onSubmit } = this.props;
    onSubmit();
  };

  validateInput = (text) => {
    const { lastNames } = this.props;
    const isLastNameValid = lastNames.includes(text.toLowerCase());

    this.setState({ isLastNameValid });
  };

  render() {
    const { text } = this.props;
    const { isLastNameValid } = this.state;

    return (
      <Wrap onSubmit={this.handleSubmit} className="guess">
        <InputWrap>
          <input
            value={text}
            onChange={this.handleChange}
            type="text"
            placeholder="Player's last name"
          />
        </InputWrap>

        <ButtonWrap>
          <button type="submit" disabled={!isLastNameValid}>
            Guess
          </button>
        </ButtonWrap>
      </Wrap>
    );
  }
}

Guess.propTypes = {
  text: PropTypes.string.isRequired,
  lastNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Guess;
