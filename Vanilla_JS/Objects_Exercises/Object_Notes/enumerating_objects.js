// Different ways to iterate through an object and it's properties


const person = {
    name: 'Devin',
    age: 20,
    email: 'ddiaz@gmail.com',
    pswd: 'hellworld!',
    astro: function() {
        return 'aries'
    }
}

for(let key in person) {
    console.log(key, person[key]);
}

for(let key of Object.keys(person)) {
    console.log(key)
}

for(let entry of Object.entries(person)) {
    console.log(entry);
}

if('email' in person) console.log('true');
