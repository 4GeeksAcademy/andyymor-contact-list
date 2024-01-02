const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contactList: [
				// {
				// 	"full_name": "John Doe",
				// 	"address": "123 Main Street, Cityville",
				// 	"phone": "555-1234",
				// 	"email": "john.doe@example.com"
				// },
				// {
				// 	"full_name": "Jane Smith",
				// 	"address": "456 Oak Avenue, Townsville",
				// 	"phone": "555-5678",
				// 	"email": "jane.smith@example.com"
				// },
				// {
				// 	"full_name": "Bob Johnson",
				// 	"address": "789 Pine Road, Villagetown",
				// 	"phone": "555-9101",
				// 	"email": "bob.johnson@example.com"
				// }
			]

		},
		actions: {
			createContact: async (name, address, phone, email) => {
				// do fetch request, add contact to store with setStore

				let response = await fetch("https://playground.4geeks.com/apis/fake/contact/", {
					method: "POST",
					body: JSON.stringify({
						"full_name": name,
						"email": email,
						"agenda_slug": "andrewAgenda",
						"address": address,
						"phone": phone,
					}),
					headers: {
						"Content-Type": "application/json",
					}
				})
				let data = response.json()
			},
			// createContact: async (full_name, email, phone, address) => {

			// 	let response = await fetch("https://playground.4geeks.com/apis/fake/contact", 
			// 	{
			// 		method: "POST",
			// 		body: JSON.stringify({
			// 			full_name: full_name,
			// 			phone: phone,
			// 			email: email,
			// 			address: address,
			// 			agenda_slug: "andrewAgenda",

			// 		}),
			// 		headers: { "Content-Type": "application/json" }
			// 	}

			// 	)
			// 	let data =  response.json()
			// 	(console.log('successfully created', data))
			// },

			addContact: (aNewContact) => {

				const store = getStore();
				let reviseStore = [...store.contactList, aNewContact];
				getActions().createContact(aNewContact);

				setStore({ contactList: reviseStore })
			},
			updateContact: async (contactId, full_name, email, phone, address) => {
				const respone = await fetch("https://playground.4geeks.com/apis/fake/contact" + contactId, {
					method: "PUT",
					body: JSON.stringify({
						full_name: full_name,
						phone: phone,
						email: email,
						address: address,
						agenda_slug: "andrewAgenda",

					}),
					headers: { "Content-Type": "application/json" }
				})
				const data = await respone.json()
				setStore({ contactList: [...getStore().contactList, data] })
			},

			deleteContact: async (contactId) => {
				let store = getStore()
				const respone = await fetch("https://playground.4geeks.com/apis/fake/contact/" + contactId, {
					method: "DELETE",

					headers: { "Content-Type": "application/json" }
				})
				const data = await respone.json()
				setStore({ contactList: store.contactList.filter((contact) => contact.id !== contactId) })
				window.location.reload();
			},
			getContacts: async () => {
				const respone = await fetch("https://playground.4geeks.com/apis/fake/contact/agenda/andrewAgenda")
				const data = await respone.json()
				setStore({ contactList: data })
			},
			saveContact: (name, address, phone, email) => {
				let newContact = {
					name: name,
					email: email,
					phone: phone,
					address: address,
					agenda_slug: "andrewAgenda"
				}
				getActions().addContact(newContact)
			}
		},
	};
};

export default getState;