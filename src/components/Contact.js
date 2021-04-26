import React from 'react';
import PropTypes from 'prop-types';

import './Contact.css';

function Contact(props) {
  return (
    <div className="Contact">
        <img className="avatar" alt="avatar" src={props.avatar}/>
        <div >
            <h1 className="name">{props.name}</h1>
            <div className="status">
                <span className={props.online ? 'status-online' : 'status-offline'}></span>
                <p className="status-text">{props.online ? 'online' : 'offline'}</p>
            </div>  
        </div>
    </div>
  );
}

Contact.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  online: PropTypes.bool.isRequired
}

export default Contact;