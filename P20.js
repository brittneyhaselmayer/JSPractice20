//object.create()

//first the outline/default obect is created with object literal syntax using default values

let person = {
	firstname: 'default',
	lastname: 'default',
	nameBuilder: function () {
		return this.firstname + ' ' + this.lastname;
	},
};

//then you create an object with obj.create and that creates a new EMPTY object
// the new objecct will inheret the parents properties as its prototype ans will have access to all its default properties
let mike = Object.create(person);

//to get specific values you must write them to the object to overwrite the prototype values
mike.firstname = 'mike';
mike.lastname = 'wix';

console.log(mike.nameBuilder());
