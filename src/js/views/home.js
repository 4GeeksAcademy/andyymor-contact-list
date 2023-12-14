import React,{useContext} from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import {ContactCard} from "../component/contactCard.js"

export const Home = () => {
	
	const {store, actions} = useContext(Context)
	
	return  (
	<div className="text-center mt-5">
	<div className="container justify-content-center">
		<ul>
			{store.contactList.map((contact, index) =>{
				return(<li key={index}> <ContactCard contact = {contact} index = {index}/>  </li>)
			})}
		</ul>

	</div>
	</div>
);
}
