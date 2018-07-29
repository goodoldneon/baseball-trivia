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
  handleSubmit = (e) => {
    e.preventDefault();

    const { onSubmit } = this.props;
    onSubmit();
  };

  render() {
    const { text, onChange } = this.props;

    return (
      <Wrap onSubmit={this.handleSubmit} className="guess">
        <InputWrap>
          <input
            value={text}
            onChange={onChange}
            type="text"
            placeholder="Player's last name"
          />
        </InputWrap>

        <ButtonWrap>
          <button type="submit">Guess</button>
        </ButtonWrap>
      </Wrap>
    );
  }
}

Guess.propTypes = {
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Guess;
