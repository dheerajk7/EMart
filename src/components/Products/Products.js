import React, { Component } from 'react';
import ProductItem from './ProductItem';
import { connect } from 'react-redux';
import {
  clearError,
  clearMessage,
  loadingStop,
  loadingStart,
  fetchProduct,
} from '../../actions';
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
    };
  }

  componentDidMount() {
    const { isLoading, dispatch } = this.props;
    if (isLoading === true) {
      dispatch(loadingStop());
    }
    dispatch(fetchProduct());
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
      errorMessageAlert(error.title, error.detail);
      dispatch(clearError());
    }
  }

  setEditableItem = (id) => {
    this.setState({ editableID: id });
  };

  handleAddToCart = (id) => {
    console.log(id);
    this.props.dispatch(loadingStart());
  };

  render() {
    let { editableID, sortByPrice } = this.state;
    let { product } = this.props;
    if (sortByPrice) {
      let list = [];
      list = [...product];
      product = list.sort(compare_item);
    } else {
      product = this.props.product;
    }
    console.log(product, '');
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
              cartButtonClick={this.handleAddToCart}
              key={product.id}
              isCart={false}
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
    product: state.product.products,
  };
}

export default connect(mapStateToProps)(Products);
