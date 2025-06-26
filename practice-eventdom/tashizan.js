function greeting3(){
    let i = document.querySelector('input[name="left"]');
    let leftbox = Number(i.value);
    let j = document.querySelector('input[name="right"]');
    let rightbox = Number(j.value);
        let sum = leftbox + rightbox;
        let p = document.querySelector('#answer');
        p.textContent = sum;
}

b = document.querySelector('button#calc');
b.addEventListener('click',greeting3);