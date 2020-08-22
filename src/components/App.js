import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Navbar, Product, ProgressBar } from '../components';
import { clearError, clearMessage } from '../actions';
import { errorMessageAlert, successMessageAlert } from '../helpers';

class App extends Component {
  componentDidMount() {
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
    const { isLoading } = this.props;
    return (
      <Router>
        <div className="App">
          <div className="blank-nav"></div>
          <Navbar />
          <div className="blank-progress-bar"></div>
          {isLoading && <ProgressBar />}
          <Switch>
            <Route to="/" exact component={Product} />
          </Switch>
        </div>
      </Router>
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

export default connect(mapStateToProps)(App);
