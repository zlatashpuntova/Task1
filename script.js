new Swiper('.image-slider',
{
    navigation: 
    {
        nextEl: '.button-next',
    },
});





function numbers()
{
    var x = document.getElementById('startNum').value;
    var p = document.getElementById('proc').value;
    var a = document.getElementById('div1').value;
    var b = document.getElementById('div2').value;
    var c = document.getElementById('div3').value;

    Number(x,p,a,b,c);

    if (x == 10000 && p < 16) 
    {
        x*=1.15;
        a=x;

        document.getElementById("div1").innerHTML = a;
    }
    

    if (a == 11500 && p < 16) 
    {
        a*=1.15;
        b=a;

        b = Math.round(b);
        document.getElementById("div2").innerHTML = b;
    }

  
    if (b == 13225 && p < 16) 
    {
        b*=1.15;
        c=b;

        c = Math.ceil(c*100) / 100;
        document.getElementById("div3").innerHTML = c;
    }

}
