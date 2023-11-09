function range(a, b) {
    a = parseInt(a);
    b = parseInt(b);
    var arr = [];
    for (var i = 0; i <= b - a; i++) {
        arr[i] = a + i;
    }
    arr.forEach((element, index) => {
        console.log(element);
    });
    return arr;
}
range(1,4);
