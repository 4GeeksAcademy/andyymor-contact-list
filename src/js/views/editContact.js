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
	const [contact, setContact] = useState({})
	let navigate = useNavigate()
	const {id} = useParams()

	useEffect(()=> {
		let thisContact = store.contactList.find((contact)=>{contact.id === id})
		setContact(thisContact) 
		setEmail(thisContact.email)
		setAddress(thisContact.address)
		setPhone(thisContact.phone)
	})

	const submiContact =(e)=>{
		e.preventDefault()
		console.log(name, email, address, phone)
		actions.updateContact(name, email, address, phone)
		
		navigate('/')
	}
	return (
		<div className="jumbotron">
			<div class="mb-3">
				<h1>Add a New Contact</h1>
				<label for="formGroupExampleInput" class="form-label">Full Name</label>
				<input value={name} onChange={(e) => setName(e.target.value)} type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input placeholder" />
			</div>
			<div class="mb-3">
				<label for="formGroupExampleInput2" class="form-label">Email</label>
				<input value={email} onChange={(e) => setEmail(e.target.value)} type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder" />
			</div>
			<div class="mb-3">
				<label for="formGroupExampleInput" class="form-label">Phone</label>
				<input value={address} onChange={(e) => setAddress(e.target.value)} type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input placeholder" />
			</div>
			<div class="mb-3">
				<label for="formGroupExampleInput2" class="form-label">Address</label>
				<input value={phone} onChange={(e) => setPhone(e.target.value)} type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder" />
			</div>

			<hr className="my-4" />

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
			<button className="btn btn-primary btn-lg" href="#" role="button" onClick={(e)=> submiContact(e)} >Add new contact</button>
		</div>
	);
};

// Single.propTypes = {
// 	match: PropTypes.object
// };

