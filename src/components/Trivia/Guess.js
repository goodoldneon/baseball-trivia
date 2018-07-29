import React from 'react';
import PropTypes from 'prop-types';

class Guess extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();

    const { onSubmit } = this.props;
    onSubmit();
  };

  render() {
    const { text, onChange } = this.props;

    return (
      <form onSubmit={this.handleSubmit} className="guess">
        <div className="input-wrap">
          <input
            value={text}
            onChange={onChange}
            type="text"
            placeholder="Player's last name"
          />
        </div>

        <div className="button-wrap">
          <button type="submit">Guess</button>
        </div>
      </form>
    );
  }
}

Guess.propTypes = {
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Guess;
