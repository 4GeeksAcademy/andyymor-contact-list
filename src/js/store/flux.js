const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contactList: [
				{
					"fullName": "John Doe",
					"address": "123 Main Street, Cityville",
					"phone": "555-1234",
					"email": "john.doe@example.com"
				},
				{
					"fullName": "Jane Smith",
					"address": "456 Oak Avenue, Townsville",
					"phone": "555-5678",
					"email": "jane.smith@example.com"
				},
				{
					"fullName": "Bob Johnson",
					"address": "789 Pine Road, Villagetown",
					"phone": "555-9101",
					"email": "bob.johnson@example.com"
				}
			]

		},
		actions: {
			addContact:async(fullName, email, phone, address) => {
				const respone = await fetch("https://playground.4geeks.com/apis/fake/contact",{
					method:"POST",
					body: JSON.stringify({
						full_name: fullName,
						phone: phone,
						email: email,
						address: address,
						agenda_slug: "agenda",
						
					}),
					headers: {"Context-Type": "application/JSON"}
				})
				const data = await respone.json()
				setStore({contactList:[...getStore().contactList,data]})
			}, 
			updateContact: (contactId, fullName, email, phone, address) => {
				const respone = await fetch("https://playground.4geeks.com/apis/fake/contact"+ contactId,{
					method:"PUT",
					body: JSON.stringify({
						full_name: fullName,
						phone: phone,
						email: email,
						address: address,
						agenda_slug: "agenda",
						
					}),
					headers: {"Context-Type": "application/JSON"}
				})
				const data = await respone.json()
				setStore({contactList:[...getStore().contactList,data]})
			}
			},
			deleteContact: (contactId) => {}
		
		}
	};
};

export default getState;
