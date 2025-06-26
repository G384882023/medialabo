
function greeting2(){
    let i = document.querySelector('input[name="shimei"]');
    let name = i.value;
    let p = document.querySelector('p#message');
    p.textContent = 'こんにちは, ' + name + 'さん';
}

b = document.querySelector('button#print');
b.addEventListener('click',greeting2);