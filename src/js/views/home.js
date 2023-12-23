import React,{useContext} from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import {ContactCard} from "../component/contactCard.js"
import { Link } from "react-router-dom";

export const Home = () => {
	
	const {store, actions} = useContext(Context)
	
	return  (
		<>
	<div className="text-center mt-5">
	<div className="container justify-content-center">
		<ul>
			{store.contactList.map((contact, index) =>{
				return(<li key={index}> <ContactCard contact = {contact} index = {index}/>  </li>)
			})}
		</ul>
			<button className="btn btn-primary btn-lg" href="#" role="button"> <Link to={"/addContact"}>link </Link>ADD CONTACT</button>
	</div>
	</div>
	<button ></button>
	</>
);

}
