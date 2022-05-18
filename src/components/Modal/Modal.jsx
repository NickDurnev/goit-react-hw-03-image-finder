import PropTypes from 'prop-types';
import { Component } from 'react';
import Overlay from './Modal.styled';

class Modal extends Component {
  render() {
    return (
      <Overlay>
        <div>
          <img src="" alt="" />
        </div>
      </Overlay>
    );
  }
}

export default Modal;
