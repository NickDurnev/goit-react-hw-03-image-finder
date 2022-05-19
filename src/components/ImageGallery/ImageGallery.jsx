import PropTypes from 'prop-types';
import { Gallery } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem';

const ImageGallery = ({ images, onClick }) => (
  <Gallery id="gallery">
    {images.map(image => (
      <ImageGalleryItem key={image.id} image={image} onClick={onClick} />
    ))}
  </Gallery>
);

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default ImageGallery;
