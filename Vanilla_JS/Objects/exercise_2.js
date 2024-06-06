// Using the same address object from exercise 1, create two functions that do the following:
// areEqual -> checks the properties of 2 address objects and returns whether they are the same or not
// isSame -> checks if the 2 address objects are referencing the same location.

function Address(street, city, zip) {
    this.street = street;
    this.city = city;
    this.zip = zip;
}

const address1 = new Address('a', 'b', 'c');
const address2 = address1;

function areEqual(address1, address2) {
    for(let entry in address1) {
        if(address1[entry] !== address2[entry]) return false;
    }
    return true;
}

function isSame(address1, address2) {
    return address1 === address2;
}

console.log(areEqual(address1, address2));
console.log(isSame(address1, address2))