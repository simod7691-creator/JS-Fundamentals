"#!/usr/bin/node" 

const n = parseInt(process.argv[2]);

function factorial(x) {
  return x * factorial(x - 1);
}

console.log(factorial(n));
