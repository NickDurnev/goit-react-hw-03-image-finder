import PropTypes from 'prop-types';
import { Component } from 'react';
import Overlay from './Modal.styled';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDownClose);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDownClose);
  }

  handleKeyDownClose = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleClickClose = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { image, description } = this.props;
    return (
      <Overlay onClick={this.handleClickClose}>
        <div>
          <img src={image} alt={description} />
        </div>
      </Overlay>
    );
  }
}

Modal.propTypes = {
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
