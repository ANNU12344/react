import React from 'react';
import './footer.css';
function Footer() {
  return (
    <footer className="w-100 py-4 flex-shrink-0">
      <div className="container py-4">
        <div className="row gy-4 gx-5">
          <div className="col-lg-4 col-md-6">
            <h5 className="h1 text-white">Task tracker website</h5>
            <p className="text-white mb-3">Education is one thing no one can take away from you.</p>
            <p className="small text-muted mb-0">&copy; Copyrights. All rights reserved. <a className="text-primary" href="https://www.javatpoint.com/reactjs-tutorial">Bootstrapious.com</a></p>
          </div>
          <div className="col-lg-2 col-md-6">
            <h5 className="text-white mb-3">Quick links</h5>
            <ul className="list-unstyled text-muted">
              <li><a href="https://www.javatpoint.com/reactjs-tutorial">Home</a></li>
              <li><a href="https://www.javatpoint.com/reactjs-tutorial">About</a></li>
              <li><a href="https://www.javatpoint.com/reactjs-tutorial">Get started</a></li>
              <li><a href="https://www.javatpoint.com/reactjs-tutorial">FAQ</a></li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-6">
            <h5 className="text-white mb-3">Quick links</h5>
            <ul className="list-unstyled text-muted">
              <li><a href="https://www.javatpoint.com/reactjs-tutorial">Home</a></li>
              <li><a href="https://www.javatpoint.com/reactjs-tutorial">About</a></li>
              <li><a href="https://www.javatpoint.com/reactjs-tutorial">Get started</a></li>
              <li><a href="https://www.javatpoint.com/reactjs-tutorial">FAQ</a></li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6">
            <h5 className="text-white mb-3">Newsletter</h5>
            <p className="text-white mb-3">Education is the key that unlocks the golden door to freedom.</p>
            <form >
              <div className="input-group mb-3">
                <input className="form-control" type="text" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
                <button className="btn btn-primary" id="button-addon2" type="button"><i className="fas fa-paper-plane"></i></button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
