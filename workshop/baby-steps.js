const numbers = process.argv.slice(2); // Get the command-line arguments starting from index 2
const sum = numbers.reduce((acc, num) => acc + Number(num), 0); // Calculate the sum
console.log(sum);
