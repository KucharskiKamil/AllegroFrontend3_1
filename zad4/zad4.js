function sum(args)
{
    var liczba=0;
    args.forEach(element => {
        liczba+=element;
    });
    return liczba;
}
console.log(sum([1,2,3]));