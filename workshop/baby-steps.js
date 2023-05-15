const num=process.argv.slice(0);
// console.log(num)

const sum = num.reduce((acc,nu)=>acc+Number(nu),0)

console.log(sum);