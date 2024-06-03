/* 
Create an address object w/ 3 properties, street, city, zip code
Create a function called show address that takes an address object
and shows all properties and values of the address object. 

Do this the literal, factory, and constructor way
*/

const literalAddress = {
    street: 'Oak st',
    city: 'Waltham',
    zipCode: 4343
}

function factoryAddress(street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    };
}


function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

function showAddress(addressObj) {
    for(let entry in addressObj) {
        console.log(entry + ": " + addressObj[entry])
    }
}

const address = new Address("Oak st", "Waltham", 24681)
showAddress(address)



