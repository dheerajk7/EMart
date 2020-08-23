import React, { Component } from 'react';
import { ProductItem } from '../../components';
import { connect } from 'react-redux';
import { errorMessageAlert, successMessageAlert } from '../../helpers';
import {
  clearError,
  clearMessage,
  loadingStop,
  fetchCartItem,
  deleteCartItem,
} from '../../actions';

class Cart extends Component {
  componentDidMount() {
    const { isLoading, dispatch } = this.props;
    if (isLoading === true) {
      dispatch(loadingStop());
    }
    dispatch(fetchCartItem());
  }

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

  deleteItemFromCart = (product) => {
    this.props.dispatch(deleteCartItem(product.id));
  };

  render() {
    let product = this.props.product;
    let total = 0;
    for (let i = 0; i < product.length; i++) {
      total += eval(product[i].price);
    }
    return (
      <div className="products-container">
        <div className="products-heading">
          <div className="heading">Cart</div>
          <div
            className="sort-price"
            style={{
              background: 'transparent',
              color: 'black',
              cursor: 'default',
            }}
            onClick={this.onClickSortByPrice}
          >
            Total : {total}
          </div>
        </div>
        {product.map((product) => {
          return (
            <ProductItem
              product={product}
              editable={false}
              cartButtonClick={this.deleteItemFromCart}
              key={product.id}
              isCart={true}
            />
          );
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    error: state.alert.error,
    message: state.alert.message,
    isLoading: state.progress.isLoading,
    product: state.product.cart,
  };
}

export default connect(mapStateToProps)(Cart);
