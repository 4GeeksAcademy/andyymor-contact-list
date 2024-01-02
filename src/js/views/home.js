import React, { useContext, useEffect, useState } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { ContactCard } from "../component/contactCard.js"
import { Link } from "react-router-dom";

export const Home = () => {
    const [contacts, setContacts] = useState([])
    const { store, actions } = useContext(Context)

    useEffect(() => {
        async function getContacts() {
            await actions.getContacts()
            if (store.contactList.length < 1) {
                await actions.createContact("Andrew", "123 Main Street", 1231231234, "Andrew@gmail.com")
            }
            setContacts(store.contactList)
        }
        getContacts()
    }, []); // Add an empty dependency array if you want it to run only once on mount

    return (
        <>
            <div className="text-center mt-5">
                <div className="container justify-content-center">
                    <ul>
                        {contacts?.map((contact, index) => {
                            return (<li key={index}> <ContactCard contact={contact} index={index} />  </li>)
                        })}
                    </ul>
                    <Link className="btn btn-primary btn-lg" to={"/addContact"}>ADD CONTACT</Link>
                </div>
            </div>
            <button ></button>
        </>
    );

}






