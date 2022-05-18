import PropTypes from 'prop-types';
import { Item } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ image }) => {
  const { webformatURL, largeImageURL, tags } = image;
  return (
    <Item>
      <img src={webformatURL} alt="" />
    </Item>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }),
};

export default ImageGalleryItem;
