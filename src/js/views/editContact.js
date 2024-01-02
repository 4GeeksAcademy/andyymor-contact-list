import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const EditContact = () => {
    const { store, actions } = useContext(Context);
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    let navigate = useNavigate()
    const { id } = useParams()

    // useEffect(() => {
    //  actions.getContacts();
    //  console.log(store.contactList)

    // }, [])

    useEffect(() => {
        async function getContact() {
            await actions.getContacts()
            let thisContact = store.contactList.find(contact => contact.id == id);
            setName(thisContact.full_name)
            setEmail(thisContact.email)
            setAddress(thisContact.address)
            setPhone(thisContact.phone)

        }
        getContact()
    }, []);

    const submitContact = (e) => {
        e.preventDefault()
        console.log(id, name, email, address, phone)
        actions.updateContact(id, name, email, address, phone)

        navigate('/')
    }
    return (
        <div className="jumbotron">
            <div className="mb-3">
                <h1>Edit Contact</h1>
                <label htmlFor="formGroupExampleInput" className="form-label">Full Name</label>
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="form-control" id="formGroupExampleInput" placeholder={name} />
            </div>
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput2" className="form-label">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" className="form-control" id="formGroupExampleInput2" placeholder={email} />
            </div>
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput" className="form-label">Phone</label>
                <input value={address} onChange={(e) => setAddress(e.target.value)} type="text" className="form-control" id="formGroupExampleInput" placeholder={address} />
            </div>
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput2" className="form-label">Address</label>
                <input value={phone} onChange={(e) => setPhone(e.target.value)} type="text" className="form-control" id="formGroupExampleInput2" placeholder={phone} />
            </div>

            <hr className="my-4" />

            <Link to="/">
                <span className="btn btn-primary btn-lg" href="#" role="button">
                    Back home
                </span>
            </Link>
            <button className="btn btn-primary btn-lg" href="#" role="button" onClick={(e) => submitContact(e)} >Update contact</button>
        </div>
    );
};

// Single.propTypes = {
//  match: PropTypes.object
// };