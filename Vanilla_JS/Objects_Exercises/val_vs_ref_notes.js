/*
    Value Types (Primitives): Number, String, Boolean, Symbol, undefined, null
    Reference Types (Objects): Object, Function, Array
*/

// The following two primitive variables are independent,
let x = 10
let y = x;
x = 20
 
// when logged to console, x = 20, and y = 10.

// Let's now try this with a reference type object:
let a = {value: 10}
let b = a

a.value = 20;

/* When logged to console, both a AND b are going to have a value of 20. Despite a being copied to be when it was 10,
   the value for b will still update to 20 because we are not copying the exact object from a rather the address of a thus
   any updates made to a will happen to b as well since it's pulling information from that specific address. 
   Same logic applies to functions where we update outside objects
*/


/*
    Primitives are copied by their value, objects are copied by their reference
*/