import React, { Component } from 'react';
import { connect } from 'react-redux';
import { successMessageAlert, errorMessageAlert } from '../../helpers';
import { clearMessage, clearError, loadingStop } from '../../actions';

class AddProduct extends Component {
  componentDidMount() {
    const { isLoading, dispatch } = this.props;
    if (isLoading === true) {
      dispatch(loadingStop());
    }
  }

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

  render() {
    return (
      <div className="add-product-container">
        <div className="heading">Add Product</div>
        <form>
          <div className="input-container">
            <label>Title</label>
            <input type="text" required="true" placeholder="Title" />
          </div>
          <div className="input-container">
            <label>Price</label>
            <input type="text" required="true" placeholder="Price" />
          </div>
          <div className="input-container">
            <label>Rating</label>
            <input type="text" required="true" placeholdere="Rating" />
          </div>
          <div className="input-container">
            <label>Detail</label>
            <textarea
              rows="5"
              type="text"
              required="true"
              placeholder="Detail"
            />
          </div>
          <div className="input-container">
            <label>Image URL</label>
            <input type="text" placeholder="Image URL" />
          </div>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    error: state.alert.error,
    message: state.alert.message,
    isLoading: state.progress.isLoading,
  };
}

export default connect(mapStateToProps)(AddProduct);
