import { Component } from 'react';
import { Container } from './App.styled';
import Searchbar from './Searchbar';
import Loader from './Loader';
import Button from './Button';
import Modal from './Modal';
import fetchImages from 'api';
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
    status: Status.IDLE,
    error: null,
    scrollY: 0,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { searchValue, currentPage } = this.state;
    if (
      prevState.searchValue !== searchValue ||
      prevState.currentPage !== currentPage
    ) {
      this.setState({ status: Status.PENDING });
      try {
        const response = await fetchImages(searchValue, currentPage);
        this.setState(prevState => {
          return { images: [...prevState.images, ...response] };
        });
        this.setState({ status: Status.RESOLVED });
      } catch (error) {
        this.setState({ error });
        this.setState({ status: Status.REJECTED });
      }
    }
  }

  handleSubmit = value => {
    this.setState({ searchValue: value });
  };

  handleLoadMore = () => {
    this.setState(prevState => {
      const prevPage = prevState.currentPage;
      return { currentPage: prevPage + 1 };
    });
  };

  render() {
    const { status, images } = this.state;
    return (
      <Container>
        <Searchbar onSubmit={value => this.handleSubmit(value)}></Searchbar>
        {status === Status.PENDING && <Loader />}
        {status === Status.RESOLVED && (
          <>
            <ImageGallery images={images} />{' '}
            <Button onClick={() => this.handleLoadMore()}>Load more</Button>
          </>
        )}
        {status === Status.REJECTED && <ErrorMessage />}
      </Container>
    );
  }
}
