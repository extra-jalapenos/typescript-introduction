interface BusinessPartner {
	name: string;
	credit: number;
}

interface Identity {
	id: number;
	name: string;
}

interface Contact {
	email: string;
	phone: string;
}

// make a type that is identity with extension through contact
type EmployeeDetails = Identity & Contact;
type Customer = BusinessPartner & Identity;

let c: Customer = {
	id: 15,
	name: "",
	credit: 15
}

let e: EmployeeDetails = {
	id: 1,
	name: "testName",
	email: "testEmail",
	phone: "testPhone"
}
