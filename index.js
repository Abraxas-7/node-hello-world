// console.log("hello world");

// console.log("Hello boolean");

const args = process.argv;

console.log(args); // stampa tutti i componenti dell'array

console.log(`Hello ${args[2]}`); // Stampa solo la prima parola passata come argomento

console.log(`Hello ${args.splice(2).join(" ")}`); // Stampa tutte le parole passate come argomenti