import { BiLoader } from 'react-icons/bi';
import { IconContext } from 'react-icons';
import Rotate from './Loader.styled';

const Loader = () => (
  <IconContext.Provider value={{ color: '#3f51b5', size: '100%' }}>
    <Rotate>
      <BiLoader></BiLoader>
    </Rotate>
  </IconContext.Provider>
);

export default Loader;
