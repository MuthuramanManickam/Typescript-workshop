const fs = require('fs');
  const buffer = fs.readFileSync(process.argv[2]);
  const str = buffer.toString();
  const array = str.split('\n');
  const newLine = array.length-1;
  console.log(newLine);