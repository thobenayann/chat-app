import './Contact.css';

function Contact() {
  return (
    <div className="Contact">
        <img className="avatar" alt="avatar" src="https://randomuser.me/api/portraits/women/39.jpg"/>
        <div >
            <h1 className="name">Roberta White</h1>
            <div className="status">
                <span className="status-online"></span>
                <p className="status-text">online</p>
            </div>  
        </div>
    </div>
  );
}

export default Contact;