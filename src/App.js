import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';

import './App.css';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';
import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

class App extends React.Component {
  unsubscribeFromAuth = null;
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
    //const { setCurrentUser, collectionsArray } = this.props;

    //auth subscription.  keeps session
    // this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    //   if (userAuth) {
    //     const userRef = await createUserProfileDocument(userAuth);

    //     this.unsubscribeFromSnapshot = userRef.onSnapshot(snapshot => {
    //       setCurrentUser({
    //         currentUser: {
    //           id: snapshot.id,
    //           ...snapshot.data()
    //         }
    //       });
    //       // this.setState({
    //       //   currentUser: {
    //       //     id: snapshot.id,
    //       //     ...snapshot.data()
    //       //   }
    //       // }/*, () => console.log(this.state)*/);
    //     });
    // }
    // else {
    //   setCurrentUser(null);
    //   // this.setState({currentUser: null/*userAuth*/});    
      //}
      //
      //this.setState({currentUser: null/*userAuth*/});
      // createUserProfileDocument(userAuth);
      // this.setState({currentUser: user});
    // });
  }

  //auth.onAuthStateChanged
  componentWillUnmount() {
    this.unsubscribeFromAuth();
    if (this.unsubscribeFromSnapshot) {
      this.unsubscribeFromSnapshot();
    }
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path='/signin' render={ () => this.props.currentUser ? 
            (<Redirect to='/' />) : (<SignInAndSignUpPage />) } />
          
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector(
  {
    currentUser: selectCurrentUser
  }
);

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
