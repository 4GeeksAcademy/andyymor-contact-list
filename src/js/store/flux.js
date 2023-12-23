const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contactList: [
				{
					"full_name": "John Doe",
					"address": "123 Main Street, Cityville",
					"phone": "555-1234",
					"email": "john.doe@example.com"
				},
				{
					"full_name": "Jane Smith",
					"address": "456 Oak Avenue, Townsville",
					"phone": "555-5678",
					"email": "jane.smith@example.com"
				},
				{
					"full_name": "Bob Johnson",
					"address": "789 Pine Road, Villagetown",
					"phone": "555-9101",
					"email": "bob.johnson@example.com"
				}
			]

		},
		actions: {
			createContact: newContact => {

				
				let options = {
					method:"POST",
					body: JSON.stringify(newContact),
					headers: {"Context-Type": "application/JSON"}
				}
				fetch("https://playground.4geeks.com/apis/fake/contact", options)
				.then(respone=>{
					if(!respone.ok)throw Error(respone.statusText);
					return respone
				})
				.then(respone => console.log('successfully created', response))
			},
			addContact:(aNewContact)=>{

			const store = getStore();
			let reviseStore = [...store.contactList, aNewContact];
			getActions().createContact(aNewContact);
				
				setStore({contactList:reviseStore})
			}, 
			updateContact: async(contactId, full_name, email, phone, address) => {
				const respone = await fetch("https://playground.4geeks.com/apis/fake/contact"+ contactId,{
					method:"PUT",
					body: JSON.stringify({
						full_name: full_name,
						phone: phone,
						email: email,
						address: address,
						agenda_slug: "andrewAgenda",
						
					}),
					headers: {"Context-Type": "application/JSON"}
				})
				const data = await respone.json()
				setStore({contactList:[...getStore().contactList,data]})
			},
			
			deleteContact: async(contactId) => {
			const respone = await fetch("https://playground.4geeks.com/apis/fake/contact"+ contactId,{
					method:"DELETE",
					
					headers: {"Context-Type": "application/JSON"}
				})
				const data = await respone.json()
				setStore({contactList:store.contactList.filter((contact)=> contact.id !== contactId )})
			},
			getContacts: async() => {
				const respone = await fetch ("https://playground.4geeks.com/apis/fake/contact/andrewAgenda" ) 
				const data = await respone.json()
				setStore({contactList:data})
			},
			saveContact: (name, address, phone, email) => {
				let newContact = {
					name: name,
					email: email,
					phone: phone,
					address: address,
					agenda_slug:"andrewAgenda"
				}
				getActions().addContact(newContact)
			}
		},
	};
};

export default getState;
