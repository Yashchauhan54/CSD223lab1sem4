import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer bg-black text-white" >
      
      <div className="container text-center py-3">
        <div className="row">
        <div className="col-md-4 text-start">
            <ul className="list-inline">
              <li className="list-inline-item">
                <Link className="text-white" to="/faq">FAQ</Link>
              </li>
              <li className="list-inline-item">
                <Link className="text-white" to="/careers">Careers</Link>
              </li>
              <li className="list-inline-item">
                <Link className="text-white" to="/legal">Legal</Link>
              </li>
              <li className="list-inline-item">
                <Link className="text-white" to="/">Home</Link>
              </li>
              <li className="list-inline-item">
                <Link className="text-white" to="/settings">Settings</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-8 text-center">
            <p>&copy; 2024 Your Bank. All rights reserved.</p>
            <p>Contact us at info@yourbank.com</p>
            <p>Helpline number: 9804314981</p>
          </div>
          
        </div>
      </div>
    </footer>
  );
}

export default Footer;
