function increment()
{
    var liczba = document.getElementById("number").innerHTML;
    liczba = parseInt(liczba);
    document.getElementById("number").innerHTML = liczba +=1;
}
function changeColor()
{
    if(document.getElementById("number").style.color=="red")
    {
        document.getElementById("number").style="color:black;";
    }
    else
    {
        document.getElementById("number").style="color:red;";
    }
    
}