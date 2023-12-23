import React, { } from "react";
import { Link } from "react-router-dom";
export const ContactCard = ({ contact, index }) => (

  <div className="card mb-3" style={{ maxWidth: "540px" }}>
    <div className="row g-0">
      <div className="col-md-4">
        <img src="https://xsgames.co/randomusers/avatar.php?g=male" />
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title">{contact.full_name}</h5>
          <p className="card-text">{contact.address}</p>
          <p className="card-text">{contact.phone}</p>
          <p className="card-text">{contact.email}</p>
          <Link className="btn btn-primary btn-lg" href="#" role="button" to={'editContact/'+ contact.id}>edit contact</Link> 
        </div>
      </div>
      
    </div>
  </div>

);