import PropTypes from 'prop-types';
import Wrap from './Button.styled';

const Button = ({ children, onClick }) => (
  <Wrap type="button" onClick={onClick}>
    {children}
  </Wrap>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
