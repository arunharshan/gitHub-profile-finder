import React, { Component, Fragment } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import Message from './layouts/Message';
import About from './components/Pages/About';
import Home from './layouts/Home';
import Details from './layouts/Details';

class App extends Component {
  state = {
    users: [],
    UserDetails: {},
    UserRepos: [],
    header: [
      {
        title: 'Git Hub Profile Finder',
        icon: 'fab fa-github'
      }
    ],
    message: [
      {
        isMessage: false,
        text: null,
        type: null
      }
    ],
    searchKey: null,
    hasSpinner: false,
    hasClearButton: false
  };
  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers = async () => {
    //let res = await axios.get('https://api.github.com/users'); // OR
    this.setState({ hasSpinner: true });
    if (this.state.searchKey == null) {
      this.setState({ hasClearButton: false });
    }
    const apiUrl =
      this.state.searchKey == null
        ? 'https://api.github.com/users'
        : `https://api.github.com/search/users?q=${
            this.state.searchKey
          }&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${
            process.env.REACT_APP_GITHUB_CLIENT_SECRET
          }`;

    await axios
      .get(apiUrl)
      .then(res => {
        if (res.data.total_count <= 0) {
          // if no data found show a message
          this.setState(
            {
              message: [
                {
                  isMessage: true,
                  text: `No search result found. Please try again. Search result is : ${
                    res.data.total_count
                  }`,
                  type: 'alert-primary'
                }
              ]
            },
            () => {
              this.resetMessage();
            }
          );
        }
        if (res.data.items) {
          // this is based on the user keyword search
          this.setState({ users: res.data.items });
        } else {
          // this is based on the default page load search
          this.setState({ users: res.data });
        }
        this.setState({ hasSpinner: false });
      })
      .catch(err => {
        this.setState(
          {
            message: [
              {
                isMessage: true,
                text: 'Unable to fetch data from Git API. Please retry.',
                type: 'alert-danger'
              }
            ]
          },
          () => {
            this.resetMessage();
          }
        );
        this.setState({ hasSpinner: false });
        return null;
      });
  };

  fetchUserDetailWithId = async id => {
    this.setState({ hasSpinner: true });
    await axios
      .get(
        `https://api.github.com/users/${id}?client_id=${
          process.env.REACT_APP_GITHUB_CLIENT_ID
        }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      )
      .then(res => {
        this.setState({
          UserDetails: res.data
        });
      })
      .catch(err => {
        this.setState(
          {
            message: [
              {
                isMessage: true,
                text:
                  'Unable to fetch the profile information. Please go back to home page and search again.',
                type: 'alert-danger'
              }
            ]
          },
          () => {
            this.resetMessage();
          }
        );
        return null;
      });
    this.setState({ hasSpinner: false });
  };
  fetchUserRepo = async id => {
    this.setState({ hasSpinner: true });
    await axios
      .get(
        `https://api.github.com/users/${id}/repos?per_page=5&client_id=${
          process.env.REACT_APP_GITHUB_CLIENT_ID
        }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      )
      .then(res => {
        this.setState({
          UserRepos: res.data
        });
      })
      .catch(err => {
        this.setState(
          {
            message: [
              {
                isMessage: true,
                text: 'Unable to fetch the repo information.',
                type: 'alert-danger'
              }
            ]
          },
          () => {
            this.resetMessage();
          }
        );
        return null;
      });
    this.setState({ hasSpinner: false });
  };

  resetMessage = () => {
    setTimeout(() => {
      this.setState({
        message: [
          {
            isMessage: false,
            text: null,
            type: null
          }
        ]
      });
    }, 4000);
  };

  searchUsers = term => {
    this.setState({ searchKey: term, hasClearButton: true }, () => {
      this.fetchUsers();
    });
  };
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Header header={this.state.header} />
          <div className='app container'>
            <Message message={this.state.message} />
            <Switch>
              <Route
                path='/'
                exact
                render={props => (
                  <Home
                    searchUserTerm={this.searchUsers}
                    clearState={this.state.hasClearButton}
                    hasSpinner={this.state.hasSpinner}
                    users={this.state.users}
                  />
                )}
              />
              <Route
                path='/details/:user_id'
                exact
                render={props => (
                  <Details
                    getUserID={this.fetchUserDetailWithId}
                    getUserRepo={this.fetchUserRepo}
                    {...props}
                    userDetails={this.state.UserDetails}
                    userRepos={this.state.UserRepos}
                  />
                )}
              />
              <Route exact path='/about' component={About} />
            </Switch>
          </div>
          <Footer />
        </Fragment>
      </BrowserRouter>
    );
  }
}
export default App;
