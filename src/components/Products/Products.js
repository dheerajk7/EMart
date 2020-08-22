import React, { Component } from 'react';
import ProductItem from './ProductItem';
import { connect } from 'react-redux';
import { clearError, clearMessage, loadingStop } from '../../actions';
import { errorMessageAlert, successMessageAlert } from '../../helpers';

function compare_item(a, b) {
  // a should come before b in the sorted order
  if (a.price < b.price) {
    return -1;
    // a should come after b in the sorted order
  } else if (a.price > b.price) {
    return 1;
    // and and b are the same
  } else {
    return 0;
  }
}

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editableID: '',
      sortByPrice: false,
      product: [
        {
          id: '321',
          title: 'Mango',
          price: 1222,
          rating: 3,
          image:
            'https://hips.hearstapps.com/del.h-cdn.co/assets/cm/15/10/54f9207ab7c5b_-_kesar_mango.jpg?fill=160:190&resize=480:*',
          detail:
            'This is product. This is product. This is product. This is product. This is product. This is product. This is product. This is product. This is product. This is product. This is product. This is product. ',
        },
        {
          id: '123',
          title: 'Apple',
          price: 1000,
          rating: 4,
          image:
            'https://media.istockphoto.com/photos/red-apple-picture-id184276818?k=6&m=184276818&s=612x612&w=0&h=Fm2-2w98ahP4jUkj3UjgPa-dIqEHlRrsTxdA_a-Cclk=',
          detail:
            'This is product. This is product. This is product. This is product. This is product. This is product. This is product. This is product. This is product. This is product. This is product. This is product. ',
        },
      ],
    };
  }

  componentDidMount() {
    const { isLoading, dispatch } = this.props;
    if (isLoading === true) {
      dispatch(loadingStop());
    }
  }

  onClickSortByPrice = () => {
    const { sortByPrice } = this.state;
    this.setState({ sortByPrice: !sortByPrice });
  };

  componentDidUpdate() {
    const { error, dispatch, message } = this.props;
    if (message != null) {
      successMessageAlert(message.title, message.detail);
      dispatch(clearMessage());
    }
    if (error != null) {
      errorMessageAlert('Registration Error', error);
      dispatch(clearError());
    }
  }

  setEditableItem = (id) => {
    this.setState({ editableID: id });
  };

  render() {
    let { editableID, sortByPrice } = this.state;
    let product = '';
    let list = [...this.state.product];
    if (sortByPrice) {
      product = list.sort(compare_item);
    } else {
      product = list;
    }
    console.log(product, 'finalPorrr');

    return (
      <div className="products-container">
        <div className="products-heading">
          <div className="heading">Products </div>
          <div className="sort-price" onClick={this.onClickSortByPrice}>
            {sortByPrice ? (
              <i className="fa fa-times" aria-hidden="true"></i>
            ) : (
              'Sort By Price'
            )}
          </div>
        </div>
        {product.map((product) => {
          return (
            <ProductItem
              product={product}
              editable={editableID === product.id}
              setEditableID={this.setEditableItem}
              key={product.id}
            />
          );
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLoading: state.progress.isLoading,
    error: state.alert.error,
    message: state.alert.message,
  };
}

export default connect(mapStateToProps)(Products);
