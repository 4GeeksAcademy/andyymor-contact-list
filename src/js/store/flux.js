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
			
		
		}
	};
};

export default getState;
