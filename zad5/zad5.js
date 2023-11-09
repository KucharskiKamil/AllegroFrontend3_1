function fibonnaci(a)
{
    if(a<0) return;
    var arr = [];
    if(a==0)
    {
        return arr;
    }
    else if(a==1)
    {
        arr[0]=0;
        return arr;
    }
    else
    {
        arr[0]=0;
        arr[1]=1;
        for(var i=2;i<a;i++)
        {
            arr[i]=arr[i-1]+arr[i-2];
        }
    }
    return arr;
}
console.log(fibonnaci(9));