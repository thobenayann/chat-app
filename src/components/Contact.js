import React from 'react';
import PropTypes from 'prop-types';

import './Contact.css';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avatar: '',
      name: '',
      online: props.online,

    };
  }
  render() {
    return (
      <div className="Contact">
          <img className="avatar" alt="avatar" src={this.props.avatar}/>
          <div >
              <h1 className="name">{this.props.name}</h1>
              <div 
                className="status"
                onClick={(event) => {
                  console.log(this.state.online);
                  this.setState({
                    online: !this.state.online,
                  });
                }}
              >
                  <span className={this.state.online ? 'status-online' : 'status-offline'}></span>
                  <p className="status-text">{this.state.online ? 'online' : 'offline'}</p>
              </div>  
          </div>
      </div>
    );
  }
}

Contact.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  online: PropTypes.bool.isRequired
}

export default Contact;