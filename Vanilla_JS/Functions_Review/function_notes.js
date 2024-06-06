/* Rest operator, in the arguments of a parameter, we do ...args. Note don't confuse this with the
spread operator we use when copying objects to another variable. The point of this is, a function can
take n amount of arguments, and convert them to an array. Note the rest operator arg must be the last
one in the parameter or issues will arise.
*/

// An application of this is to sum a group of elements with using a list as an argument and instead the 
// elements themselves as args.
function sum(...args) {
    return args.reduce((a, b) => a + b);
}

// Make an example where you have a discount as parameter, and a spread of store items denoted as prices.
// Sum all the items and apply the disccount.
function storeDiscount(discount, ...prices) {
    const total = prices.reduce((a, b) => a + b);
    return (1 - discount) * total; 
}


// Creating default parameters in a function and avoid ugliness when calling that function does as following:
function interest(principal, rate = 3.5, years = 5) {
    return principal * rate / years * 100;
}

// to avoid confusion when calling the function, make sure that the default argument vals are last.
interest(10000)


// Getters and Setters in JS go as following with object literal instances
// Note these aren't functions, they are properties. 

// We can add a bit of defensive programming to this object via try, throw, catch error handling

const person = {
    firstName: 'Devin',
    lastName: 'Diaz',
    get fullName() {
        return this.firstName + " " + this.lastName;
    },
    set fullName(value) {
        if(typeof value !== 'string') throw new Error('Value must be a string!')
        
        let splitName = value.split(' ');
        if(splitName.length !== 2) throw new Error('First and Last values only!')

        this.firstName = splitName[0];
        this.lastName = splitName[1]; 
    }
}

try {
    console.log(person.fullName)
    person.fullName = 'John Doe'
    console.log(person.firstName)
} catch(e) {
    alert(e)
}



