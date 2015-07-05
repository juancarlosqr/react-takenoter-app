import React from 'react';

class UserProfile extends React.Component {
  render () {
    var hasFollowers = (this.props.bio.followers && this.props.bio.followers !== 0 ? true : false),
        hasFollowing = (this.props.bio.following && this.props.bio.following !== 0 ? true : false),
        hasPublicRepos = (this.props.bio.public_repos && this.props.bio.public_repos !== 0 ? true : false);
    return (
      <div>
        <h2>User Profile</h2>
        <ul className="list-group">
          {this.props.bio.avatar_url && <li className="list-group-item"> <img src={this.props.bio.avatar_url} className="img-rounded img-responsive"/></li>}
          {this.props.bio.login && <li className="list-group-item">Username: {this.props.bio.login}</li>}
          {this.props.bio.name && <li className="list-group-item">Name: {this.props.bio.name}</li>}
          {this.props.bio.email && <li className="list-group-item">Email: {this.props.bio.email}</li>}
          {this.props.bio.location && <li className="list-group-item">Location: {this.props.bio.location}</li>}
          {this.props.bio.company && <li className="list-group-item">Company: {this.props.bio.company}</li>}
          {hasFollowers && (this.props.bio.followers != 0) && <li className="list-group-item">Followers: {this.props.bio.followers}</li>}
          {hasFollowing && <li className="list-group-item">Following: {this.props.bio.following}</li>}
          {hasPublicRepos && <li className="list-group-item">Public Repos: {this.props.bio.public_repos}</li>}
          {this.props.bio.blog && <li className="list-group-item">Blog: <a href={this.props.bio.blog}> {this.props.bio.blog}</a></li>}
        </ul>
      </div>
    )
  }
};

UserProfile.propTypes = {
  username: React.PropTypes.string.isRequired,
  bio: React.PropTypes.object.isRequired
};

export default UserProfile;
