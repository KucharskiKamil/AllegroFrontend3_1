function isOdd(x)
{
    return !(x%2);
}
const isEven = (x) => (Boolean(x%2));    

console.log(isOdd(5));
console.log(isEven(5));