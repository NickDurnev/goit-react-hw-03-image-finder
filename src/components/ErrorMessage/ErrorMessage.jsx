import error from '../../error.png';
import Container from './ErrorMessage.styled';

const ErrorMessage = () => (
  <Container>
    <img src={error} alt="Error message" />
  </Container>
);

export default ErrorMessage;
