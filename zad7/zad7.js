function isHappyNumber(x)
{
    x=String(x);
    var liczbyJakoLitery = [];
    var suma=0;
    for(var j=0;j<4;j++)
    {
        for(var i=0;i<x.length;i++)
        {
            liczbyJakoLitery[i]=x.at(i)
        }
        suma=0;
        for(var i=0;i<liczbyJakoLitery.length;i++)
        {
            suma+=parseInt(liczbyJakoLitery[i]) * parseInt(liczbyJakoLitery[i]);
        }
        x=String(suma);
    }
    if(suma==1)
    {
        return true;
    }
    else
    {
        return false;
    }
}
console.log(isHappyNumber(19));