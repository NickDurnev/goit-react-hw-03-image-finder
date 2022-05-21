import { Component } from 'react';
import { Container } from './App.styled';
import Searchbar from './Searchbar';
import Loader from './Loader';
import Button from './Button';
import Modal from './Modal';
import fetchImages from 'services/api';
import ImageGallery from './ImageGallery';
import ErrorMessage from './ErrorMessage';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export class App extends Component {
  state = {
    searchValue: null,
    currentPage: 1,
    images: [],
    totalImages: null,
    selectImage: null,
    selectImageDescription: null,
    status: Status.IDLE,
    error: null,
    scrollY: 0,
    isModalOpen: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { searchValue, currentPage, scrollY } = this.state;
    if (
      prevState.searchValue !== searchValue ||
      prevState.currentPage !== currentPage
    ) {
      this.setState({ status: Status.PENDING });
      try {
        const response = await fetchImages(searchValue, currentPage);
        this.setState(prevState => {
          return {
            images: [...prevState.images, ...response.hits],
            totalImages: response.total,
          };
        });
        this.setState({ status: Status.RESOLVED });
      } catch (error) {
        this.setState({ error });
        this.setState({ status: Status.REJECTED });
      }
    }
    if (currentPage > 1) {
      window.scrollBy({
        top: scrollY * 2,
        behavior: 'smooth',
      });
    }
  }

  handleSubmit = value => {
    this.setState({ searchValue: value, currentPage: 1, images: [] });
  };

  handleLoadMore = () => {
    const { height: galleryHeight } = document
      .querySelector('#gallery')
      .getBoundingClientRect();
    this.setState(prevState => {
      const prevPage = prevState.currentPage;
      const prevScroll = prevState.scrollY;
      return { currentPage: prevPage + 1, scrollY: prevScroll + galleryHeight };
    });
  };

  openModal = (largeImage, tags) => {
    this.setState({
      isModalOpen: true,
      selectImage: largeImage,
      selectImageDescription: tags,
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
      selectImage: null,
      selectImageDescription: null,
    });
  };

  render() {
    const {
      status,
      images,
      isModalOpen,
      totalImages,
      selectImage,
      selectImageDescription,
    } = this.state;
    return (
      <Container>
        <Searchbar onSubmit={value => this.handleSubmit(value)}></Searchbar>
        <>
          {images.length > 0 && (
            <>
              <ImageGallery
                images={images}
                onClick={(largeImage, tags) => this.openModal(largeImage, tags)}
              />
              {status === Status.RESOLVED && images.length < totalImages && (
                <Button onClick={() => this.handleLoadMore()}>Load more</Button>
              )}
            </>
          )}
          {status === Status.PENDING && <Loader />}
        </>
        {status === Status.REJECTED && <ErrorMessage />}
        {isModalOpen && (
          <Modal
            image={selectImage}
            description={selectImageDescription}
            onClose={this.closeModal}
          />
        )}
      </Container>
    );
  }
}
