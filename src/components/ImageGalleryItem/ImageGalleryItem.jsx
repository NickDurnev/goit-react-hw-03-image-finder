import { Component } from 'react';
import PropTypes from 'prop-types';
import { Item } from './ImageGalleryItem.styled';

class ImageGalleryItem extends Component {
  selectImage = (largeImageURL, tags) => {
    this.props.onClick(largeImageURL, tags);
  };

  render() {
    const { webformatURL, largeImageURL, tags } = this.props.image;
    return (
      <Item>
        <img
          src={webformatURL}
          alt={tags}
          onClick={() => this.selectImage(largeImageURL, tags)}
        />
      </Item>
    );
  }
}

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }),
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
