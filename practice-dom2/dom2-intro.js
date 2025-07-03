changeDom(){
    //ヨットを追加する
    let l = document.createElement('li');
    let u = document.querySelector('ul#kazoeuta');
    u.insertAdjacentElement('beforeend', l);
    l.textContent = 'ヨット';

    //ブルームーンの画像を貼る
    let i = document.querySelector('img#bluemoon'); // 要素の検索
    i.setAttribute('src', 'bluemoon.jpg'); // 属性の設定

    //拓大リンクの追加
    let a = document.createElement('a'); // 新規要素 a を作成
    a.textContent = '拓殖大学HP'; // 要素 a のテキスト設定
    a.setAttribute('href', 'https://www.takushoku-u.ac.jp'); // 属性 href の設定
    let p = document.querySelector('p#takudai');
    onabort.insertAdjacentElement('afterend', a); // p の直後に a を追加

    //「餅」を削除
    l = document.querySelector('li#mochi'); // 削除したい要素を検索
    l.remove();                             // 要素を削除
    //「ul"kassen」を削除                           
    u = document.querySelector('ul#kassen');
    u,remove();
    
    //光の三原色追加
    u = document.createElement('ul'); //新規要素の作成
    p = document.querySelector('p#primary');
    p.insertAdjacentElement('afterend', u);
    //以下三点セット
    l = document.createElement('li'); //li作成
    u.insertAdjacentElement('beforeend', l); //・を作成
    l.textContent = '赤'; //テキストを作成

    l = document.createElement('li');
    u.insertAdjacentElement('beforeend', l);
    l.textContent = '緑';

    l = document.createElement('li');
    u.insertAdjacentElement('beforeend', l);
    l.textContent = '青';

}
b = document.querySelector('button#henkou');
b.addEventListener('click', changeDom);
