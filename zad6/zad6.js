function palindrom(slowo)
{
    var a=0;
    var b=slowo.length-1;
    for(var i=0;i<b/2-1;i++)
    {
        if(slowo[a+i]!=slowo[b-i])
        {
            return false;
        }
    }
    return true;
}
console.log(palindrom("ekajake"));