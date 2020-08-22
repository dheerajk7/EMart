import React, { Component } from 'react';

class ProductItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: '',
      id: '',
      title: '',
      rating: '',
      detail: '',
      image: '',
    };
  }

  componentDidMount() {
    const { id, title, rating, price, detail, image } = this.props.product;
    this.setState({ id, title, rating, price, detail, image });
  }

  handleChange = (label, value) => {
    if (label === 'detail') {
      this.setState({ detail: value });
    } else if (label === 'title') {
      this.setState({ title: value });
    } else if (label === 'rating') {
      this.setState({ rating: value });
    } else if (label === 'price') {
      this.setState({ price: value });
    }
  };

  handleCancle = () => {
    this.props.setEditableID('');
  };

  handleSubmit = (id) => {
    console.log(this.state);
  };

  ch = (id) => {
    this.props.setEditableID(id);
  };

  render() {
    const ratingArray = [1, 2, 3, 4, 5];
    const { id, title, rating, price, detail, image } = this.state;
    const { editable } = this.props;
    return (
      <div className="product-item-container" key={id}>
        {!editable && (
          <div className="container-div">
            <div className="image">
              <img src={image} alt={title}></img>
            </div>
            <div className="product-detail">
              <div className="title">{title}</div>
              <div className="detail">{detail}</div>
              <div className="rating">
                {ratingArray.map((value) => {
                  if (value <= rating) {
                    return (
                      <i
                        className="fa fa-star"
                        aria-hidden="true"
                        key={value}
                      ></i>
                    );
                  }
                  return <span key={value}></span>;
                })}
              </div>
            </div>
            <div className="option-container">
              <div className="price">
                <div>Price:</div>
                <div className="tag">Rs {price}</div>
              </div>
              <div className="add-to-cart">Add to Cart</div>
              <div className="buttons">
                <i
                  className="fa fa-pencil"
                  onClick={() => {
                    this.ch(id);
                  }}
                ></i>
                <i className="fa fa-trash"></i>
              </div>
            </div>
          </div>
        )}
        {editable && (
          <div className="container-div">
            <div className="image">
              <img src={image} alt={title}></img>
            </div>
            <div className="product-detail">
              <div className="title">
                <input
                  type="text"
                  value={title}
                  required
                  onChange={(event) => {
                    this.handleChange('title', event.target.value);
                  }}
                />
              </div>
              <div className="detail">
                <textarea
                  type="text"
                  value={detail}
                  data-label="detail"
                  required
                  onChange={(event) => {
                    this.handleChange('detail', event.target.value);
                  }}
                />
              </div>
              <div className="rating">
                {
                  <input
                    type="number"
                    value={rating}
                    required
                    onChange={(event) => {
                      this.handleChange('rating', event.target.value);
                    }}
                  />
                }
              </div>
            </div>
            <div className="option-container">
              <div className="price">
                <div>Price:</div>
                <div className="tag">
                  Rs{' '}
                  <input
                    type="text"
                    value={price}
                    required
                    onChange={(event) => {
                      this.handleChange('price', event.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="buttons">
                <i className="fa fa-times" onClick={this.handleCancle}></i>
                <i
                  className="fa fa-check"
                  onClick={() => {
                    this.handleSubmit(id);
                  }}
                ></i>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default ProductItem;
