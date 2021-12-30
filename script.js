const button = document.querySelector('#button');
    
button.addEventListener("click", function(){
    let x = document.getElementById('startNum').value;
    let p = document.getElementById('percentage').value;
    let a = document.getElementById('div1').value;
    let b = document.getElementById('div2').value;
    let c = document.getElementById('div3').value;

    if (p < 101) 
    {   
        let sum = Number(x,p);

        sum = (((1 + p) / 100) * x);

        a = sum;

        const div1 = document.querySelector('#div1');
        div1.innerHTML = a;

        let sum1 = Number(a,p);

        sum1 = (((1 + p) / 100) * a);
        b = Math.round(sum1);

        const div2 = document.querySelector('#div2');
        div2.innerHTML = b;

        let sum2 = Number(b,p);
        sum1 = (((1 + p) / 100) * b);

        c = Math.ceil(sum1*100) / 100;

        const div3 = document.querySelector('#div3');
        div3.innerHTML = c;
    }            
});