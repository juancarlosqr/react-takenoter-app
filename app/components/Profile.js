import React from 'react';
import Router from 'react-router';
import Repos from './Github/Repos';
import UserProfile from './Github/UserProfile';
import Notes from './Notes/Notes';
import Firebase from 'firebase';
import ReactFireMixin from 'reactfire';
import helpers from '../utils/helpers';

var Profile = React.createClass({
  mixins: [Router.State, ReactFireMixin],
  getInitialState () {
    return {
      bio: {},
      repos: [],
      notes: []
    }
  },
  init () {
    var childRef = this.ref.child(this.getParams().username);
    this.bindAsArray(childRef, 'notes');

    helpers.getGithubInfo(this.getParams().username)
      .then(function (dataObj) {
        this.setState({
          bio: dataObj.bio,
          repos: dataObj.repos
        })
      }.bind(this));
  },
  componentDidMount () {
    this.ref = new Firebase('https://react-takenoter-app.firebaseio.com/');
    this.init();
  },
  componentWillUnmount () {
    this.unbind('notes');
  },
  componentWillReceiveProps () {
    this.unbind('notes');
    this.init();
  },
  handleAddNote (newNote) {
    this.ref.child(this.getParams().username).set(this.state.notes.concat([newNote]));
  },
  render () {
    var username = this.getParams().username;
    return (
      <div className="row">
        <div className="col-md-4">
          <UserProfile username={username} bio={this.state.bio}/>
        </div>
        <div className="col-md-4">
          <Repos username={username} repos={this.state.repos} />
        </div>
        <div className="col-md-4">
          <Notes
            username={username}
            notes={this.state.notes}
            addNote={this.handleAddNote} />
        </div>
      </div>
    )
  }
});

export default Profile;
